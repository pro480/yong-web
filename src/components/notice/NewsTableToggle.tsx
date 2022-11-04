import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { News, CenterNews, EventNews } from "../../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc, } from "@firebase/firestore";
import { db, storage } from "../../../firebase";
import { NewsTableContext } from "./NewsTable";
import { NewsTableCancelButton } from "./NewsTableButton";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { UseMutationResult } from "react-query";
import moment from "moment";
import { fill } from "lodash";
import { ImFileText2 } from "react-icons/im";
import data from "../../../pages/data";

interface Inputs {
    title: string; // 자료명
    writer: string; // 작성자
    date: string; // 등록일
    content: string; // 내용
    imgFile: File[]; // 이미지
    newsFile: File[]; // 첨부파일
}

interface Props {
    news: News;
}

function NewsTableToggle({ news }: Props) {
    const today = moment();
    const { selectedNews ,collectionRef, selectedDocId, selectedIndex, setIsEditing } = useContext(NewsTableContext);
    const [editFile, setEditFile] = useState(false);
    const { register, reset, handleSubmit, formState: {errors} } = useForm<Inputs>({
        defaultValues: useMemo(() => {
            if (selectedNews) {
                return selectedNews;
            }
        }, [selectedNews]),
    });

    useEffect(() => {
        if (selectedNews) {
            reset(selectedNews);
        }
    }, [selectedNews]);

    const addMutation = useFirestoreCollectionMutation(collectionRef);
    const updateMutation = useFirestoreDocumentMutation(
        doc(
            collection(
                db, 
                news
            ), 
            `${selectedDocId}`
        ),
        { merge: true }
    );

    const onAddNews: SubmitHandler<Inputs> = (data) => {
        uploadFileAndAddDoc(data, addMutation);
    };

    function uploadFileAndAddDoc(data: Inputs, mutation: any) {
        let file = data.newsFile[0];
        const storageRef = ref(
            storage, 
            (news === "센터 소식") ? "documents/centerNews/" + file.name : "documents/eventNews/" + file.name
        );
        const uploadFile = uploadBytesResumable(storageRef, file);

        uploadFile.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% now");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Uploading");
                        break;
                }
            },

            (error) => {
                switch (error.code) {
                    case "storage/unauthorized":
                        console.log(error);
                        break;
                    case "storage/canceled":
                        console.log(error);
                        break;
                    case "storage/unknown":
                        console.log(error);
                        break;
                }
            },
            () => {
                getDownloadURL(uploadFile.snapshot.ref).then((downloadURL) => {
                    addMutation.mutate({
                        title: data.title, // 제목
                        writer: data.writer, // 작성자
                        date: data.date, // 등록일
                        content: data.content,
                        imgUrl: downloadURL, // 이미지 주소
                        fileUrl: downloadURL, // 첨부파일 주소
                        news: news,
                    });
                });
                setIsEditing(false);
            }
        );
    };

    const onUpdateNews: SubmitHandler<Inputs> = (data) => {
        if (editFile) {
            uploadFileAndAddDoc(data, updateMutation);
        } else {
            updateMutation.mutate({
                title: data.title, // 제목
                writer: data.writer, // 작성자
            });
        }
        setIsEditing(false);
    };

    return (
        <form
            className='relative flex-col w-full items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 '
            onSubmit={
                selectedNews
                    ? handleSubmit(onUpdateNews)
                    : handleSubmit(onAddNews)
            }
        >
            {/* input */}
            <div className="flex items-center justify-around h-10">
                <div className='w-[5%] text-center'>{selectedIndex + 1}</div>
                <label className='w-[30%]'>
                    <input
                        className=' w-full border border-gray-700 text-center'
                        placeholder='자료명'
                        {...register("title", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[25%]'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='작성자'
                        {...register("writer", {
                            required: true,
                        })}
                    />
                </label>

                {selectedNews?(
                    <label className='w-[25%] text-center'>
                        {selectedNews.date}
                    </label>
                ) : (
                    <label className='w-[15%]'>
                        <input
                            className='w-full'
                            type='date'
                            defaultValue={today.format('YYYY-MM-DD')}
                            {...register("date", { 
                                required: selectedNews ? false : true 
                            })}
                        />
                    </label>
                )}

                <label className='w-15 flex text-xs'>
                    <input type='submit' className=' border p-1' />
                    <NewsTableCancelButton />
                </label> 
            </div>
        </form>
    );
}

export default NewsTableToggle;