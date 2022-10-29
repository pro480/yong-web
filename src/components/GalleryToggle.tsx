import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { doc, collection } from "firebase/firestore";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { db, storage } from "../../firebase";
import { CollectionReference } from "@firebase/firestore";
import { GalleryProps } from "../../typing";
import { SubmitHandler, useForm } from "react-hook-form";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

interface Props {
    galleryRef: CollectionReference<GalleryProps>;
    setToggleOpen: Dispatch<SetStateAction<boolean>>;
}

interface Inputs {
    createdAt: string;
    title: string;
    imgUrl: File[];
    isBanner: boolean;
}

function GalleryToggle({ galleryRef, setToggleOpen }: Props) {
    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const addGalleryData = useFirestoreCollectionMutation(galleryRef);

    const onAddGalleryPost: SubmitHandler<Inputs> = (data) => {
        console.log(data.imgUrl);
        let file = data.imgUrl[0];
        const storageRef = ref(storage, "images/gallery" + file.name);
        const uploadImg = uploadBytesResumable(storageRef, file);

        uploadImg.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
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
                getDownloadURL(uploadImg.snapshot.ref).then((downloadURL) => {
                    addGalleryData.mutate({
                        title: data.title,
                        imgUrl: downloadURL,
                        isBanner: data.isBanner,
                        createdAt: data.createdAt,
                    });
                });
                setToggleOpen(false);
            }
        );
    };

    return (
        <form onSubmit={handleSubmit(onAddGalleryPost)}>
            <div className='mt-3 flex h-80 flex-col rounded-md bg-GRAY_COLOR-500'>
                <div className='flex h-80 items-center justify-center space-x-2'>
                    {/* 이미지 썸네일 */}
                    <div className='relative h-4/5 w-1/3 border-2 '>
                        <Image
                            src=''
                            alt='업로드된 사진 미리보기'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>

                    <div className='flex h-64 w-1/2 flex-col justify-center space-y-5 px-5'>
                        {/*이미지 파일 업로드*/}
                        <input
                            placeholder='이미지 파일을 넣어주세요'
                            {...register("imgUrl", { required: true })}
                            value={imgUrl}
                            type='file'
                            className='file:rounded-[10px] file:border-4 file:border-GRAY_COLOR-800 file:bg-PRIMARY_COLOR-100'
                        />

                        {/* 제목 입력 */}
                        <label>
                            제목
                            <input
                                placeholder='게시물의 제목을 입력해주세요'
                                {...register("title", { required: true })}
                                value={title}
                                type='text'
                                className='w-80 bg-GRAY_COLOR-200 text-black'
                            />
                        </label>
                        {/* 메인 페이지 배너 설정 */}
                        <label className='flex space-x-1'>
                            <a>메인페이지 배너로 지정</a>
                            <input
                                className='w-4'
                                defaultChecked={false}
                                type='checkbox'
                                {...register("isBanner")}
                                //여기서 메인 페이지로 전송해줘야 함
                            />
                        </label>
                    </div>
                </div>

                {/* 게시, 취소 버튼*/}
                <div className='mr-4 flex h-20 justify-end space-x-4 pb-1'>
                    <input
                        className='h-8 w-20 border-4 border-GRAY_COLOR-800 bg-PRIMARY_COLOR-100'
                        type='submit'
                    >
                        게시
                    </input>
                    <button className='h-8 w-20 border-4 border-GRAY_COLOR-800'>
                        취소
                    </button>
                </div>
            </div>
        </form>
    );
}

export default GalleryToggle;
