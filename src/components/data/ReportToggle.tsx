import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import moment from "moment";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { storage } from "../../../firebase";
import { ReportContext } from "./Report";

interface Inputs {
    title: string; // 자료명
    type: string;
    researcher: string;
    year: string;
    createdAt: string;
    imgUrl: File[];
    fileUrl: File[];
}

export default function ReportToggle() {
    const { register, handleSubmit } = useForm<Inputs>();
    const { collectionRef, setIsEditing } = useContext(ReportContext);
    const addMutation = useFirestoreCollectionMutation(collectionRef);

    const onAddReport: SubmitHandler<Inputs> = (data) => {
        uploadFileAndAddDoc(data, addMutation);
    };

    function uploadFileAndAddDoc(data: Inputs, mutation: any) {
        const file = data.fileUrl[0];
        const img = data.imgUrl[0];

        const fileStorageRef = ref(
            storage,
            `documents/researchReport/${file.name}`
        );
        const imgStorageRef = ref(storage, `images/researchReport/${img.name}`);

        const imgUpload = uploadBytesResumable(imgStorageRef, img);
        const fileUpload = uploadBytesResumable(fileStorageRef, file);

        fileUpload.on(
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
            }
        );

        imgUpload.on(
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
                getDownloadURL(imgUpload.snapshot.ref).then((img) => {
                    getDownloadURL(fileUpload.snapshot.ref).then((file) => {
                        mutation.mutate({
                            createdAt: moment().format("YYYYMMDDHHmmss"),
                            fileUrl: file,
                            imgUrl: img,
                            researcher: data.researcher, // 연구자
                            title: data.title, // 제목
                            type: data.type,
                            year: data.year, //발행년도
                        });
                        setIsEditing(false);
                    });
                });
            }
        );
    }

    return (
        <React.Fragment>
            <div className='flex h-[250px] w-[800px] flex-col justify-between border-4 border-gray-200  hover:border-4 '>
                <form onSubmit={handleSubmit(onAddReport)} className='flex '>
                    <div className=' flex flex-col justify-around p-2'>
                        <div className='p-1'>
                            제목 :
                            <input
                                {...register("title", {
                                    required: true,
                                })}
                                placeholder='제목을 입력해 주세요.'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            종류 :
                            <input
                                {...register("type", {
                                    required: true,
                                })}
                                placeholder='보고서의 종류를 입력해 주세요.'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            연구자 :
                            <input
                                {...register("researcher", {
                                    required: true,
                                })}
                                placeholder='연구자를 입력해 주세요'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            발행 년도 :
                            <input
                                {...register("year", {
                                    required: true,
                                })}
                                placeholder='발행 년도를 입력해 주세요'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            pdf :
                            <input
                                type='file'
                                {...register("fileUrl", {
                                    required: true,
                                })}
                                className=' p-2'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='p-1'>
                            이미지 :
                            <input
                                type='file'
                                {...register("imgUrl", {
                                    required: true,
                                })}
                                className=' p-2'
                            />
                        </div>
                        <button
                            className=' my-2 h-[30px] w-[50px] rounded-md bg-gray-400 font-bold text-white hover:bg-gray-500'
                            type='submit'
                        >
                            저장
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
