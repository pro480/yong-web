import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { News, CenterNews, EventNews } from "../../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc } from "@firebase/firestore";
import { db, storage } from "../../../firebase";
import { NewsTableContext } from "./NewsTable";
import { NewsTableCancelButton } from "./NewsTableButton";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { UseMutationResult } from "react-query";
import moment from "moment";
import { fill } from "lodash";
import { ImFileText2 } from "react-icons/im";
import data from "../../../pages/data/paper";
import { IconButton } from "@material-tailwind/react";

interface Inputs {
    title: string; // 자료명
    writer: string; // 작성자
    createdAt: string; // 등록일
    content: string; // 내용
    newsFile: File[]; // 첨부파일
}

interface Props {
    news: News;
}

function NewsTableToggle({ news }: Props) {
    const today = moment();
    const { selectedNews, collectionRef, selectedDocId, setIsEditing } =
        useContext(NewsTableContext);
    const [editFile, setEditFile] = useState(false);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
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
        doc(collection(db, news), `${selectedDocId}`),
        { merge: true }
    );

    const onAddNews: SubmitHandler<Inputs> = (data) => {
        uploadFileAndAddDoc(data, addMutation);
    };

    function uploadFileAndAddDoc(data: Inputs, mutation: any) {
        let file = data.newsFile[0];
        if (file) {
            const storageRef = ref(
                storage,
                news === "센터 소식"
                    ? "documents/centerNews/" + file.name
                    : "documents/eventNews/" + file.name
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
                    getDownloadURL(uploadFile.snapshot.ref).then(
                        (downloadURL) => {
                            addMutation.mutate({
                                title: data.title, // 제목
                                writer: data.writer, // 작성자
                                createdAt: today.format("YYYYMMDDHHmmss"), // 등록일
                                content: data.content, // 게시글 본문
                                fileUrl: downloadURL, // 첨부파일 주소
                                news: news,
                            });
                        }
                    );
                }
            );
        } else {
            addMutation.mutate({
                title: data.title, // 제목
                writer: data.writer, // 작성자
                createdAt: today.format("YYYYMMDDHHmmss"), // 등록일
                content: data.content, // 게시글 본문
                fileUrl: "empty", // 첨부파일 주소
                news: news,
            });
        }
        setIsEditing(false);
    }

    const onUpdateNews: SubmitHandler<Inputs> = (data) => {
        if (editFile) {
            uploadFileAndAddDoc(data, updateMutation);
        } else {
            updateMutation.mutate({
                title: data.title, // 제목
                writer: data.writer, // 작성자
                content: data.content, // 본문 내용
            });
        }
        setIsEditing(false);
    };

    return (
        <form
            className='relative w-full flex-col items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 text-xs sm:text-sm '
            onSubmit={
                selectedNews
                    ? handleSubmit(onUpdateNews)
                    : handleSubmit(onAddNews)
            }
        >
            {/* input */}
            <div className='flex h-10 items-center justify-around'>
                <label className='w-[45%] p-1'>
                    <input
                        className=' w-full border border-gray-700 text-center'
                        placeholder='자료명'
                        {...register("title", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[15%] p-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='작성자'
                        {...register("writer", {
                            required: true,
                        })}
                    />
                </label>

                {selectedNews ? (
                    <label className='w-[15%] text-right'>
                        {`${selectedNews.createdAt.slice(
                            0,
                            4
                        )}-${selectedNews.createdAt.slice(
                            4,
                            6
                        )}-${selectedNews.createdAt.slice(6, 8)}`}
                    </label>
                ) : (
                    <label className='w-[15%] text-right'>
                        {today.format("YYYY-MM-DD")}
                    </label>
                )}

                {selectedNews && !editFile ? (
                    <div className='flex w-[20%] items-center'>
                        <label className='items-left flex h-12 w-full justify-center self-center'>
                            {selectedNews.fileUrl == "empty" ? (
                                <input
                                    className='w-full self-center pl-5 text-xs'
                                    type='file'
                                    {...register("newsFile", {
                                        // required: selectedNews ? false : true
                                        required: false,
                                    })}
                                />
                            ) : (
                                <IconButton
                                    className='flex self-center text-black hover:underline hover:underline-offset-2'
                                    onClick={() => setEditFile(true)}
                                >
                                    <ImFileText2 className='ml-2' size={20} />
                                </IconButton>
                            )}
                        </label>
                        <label className='w-15 absolute right-2 z-50 hidden bg-gray-100 text-sm lg:flex'>
                            <input type='submit' className=' border p-1' />
                            <NewsTableCancelButton />
                        </label>
                    </div>
                ) : (
                    <>
                        <label className='flex w-[20%] items-center text-right'>
                            <input
                                className='w-full pl-5 text-xs'
                                type='file'
                                {...register("newsFile", {
                                    // required: selectedNews ? false : true
                                    required: false,
                                })}
                            />
                            <label className='w-15 absolute right-2 hidden bg-gray-100 text-sm lg:flex'>
                                <input type='submit' className=' border p-1' />
                            </label>
                        </label>
                    </>
                )}
            </div>
            <label>
                <textarea
                    placeholder='게시글 본문 내용을 작성해주세요.'
                    className='w-full border-gray-700 pl-5 text-sm'
                    {...register("content", {
                        required: true,
                    })}
                />
            </label>
        </form>
    );
}

export default NewsTableToggle;
