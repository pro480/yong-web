import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc } from "@firebase/firestore";
import { db, storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { Card } from "../../../typing";
import Image from "next/image";
import { GalleryCancelButton } from "./GalleryButton";
import { GalleryContext } from "./GalleryMain";
import moment from "moment";

interface Inputs {
    title: string; // 자료명
    imgFile: File[]; // 이미지 URL
    createdAt: string; // 등록일
    isBanner: boolean; // 배너 이미지 여부
}

interface Props {
    card: Card;
}

function GalleryToggle({ card }: Props) {
    const today = moment();
    const { collectionRef, selectedDocId, selectedCard, setIsEditing } =
        useContext(GalleryContext);
    // @ts-ignore
    const addMutation = useFirestoreCollectionMutation(collectionRef);
    const updateMutation = useFirestoreDocumentMutation(
        doc(collection(db, "갤러리 데이터"), `${selectedDocId}`),
        { merge: true }
    );
    const [editFile, setEditFile] = useState(false);
    const { register, handleSubmit, reset } = useForm<Inputs>({
        defaultValues: useMemo(() => {
            if (selectedCard) {
                return selectedCard;
            }
        }, [selectedCard]),
    });

    useEffect(() => {
        if (selectedCard) {
            reset(selectedCard);
        }
    }, [selectedCard]);

    const onAddCard: SubmitHandler<Inputs> = (data) => {
        let file = data.imgFile[0];
        const storageRef = ref(storage, "images/gallery/" + file.name);
        const uploadFile = uploadBytesResumable(storageRef, file);

        uploadFile.on(
            "state_changed",
            (snapshot) => {
                // 파일 업로드가 얼마나 진행됐는지 알려주는 상태
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
                // 아래는 에러 처리 코드, 여기서는 3가지 경우만 했지만 아래 사이트를 참고하면 모든 에러를 볼 수 있다.
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized":
                        // 유저에게 업로드 권한이 없는 경우, firebase storage 의 Rules 를 확인하자
                        console.log(error);
                        break;
                    case "storage/canceled":
                        // 유저가 업로드를 취소한 경우
                        console.log(error);
                        break;
                    case "storage/unknown":
                        // 알수 없는 에러, 아마도 서버측 에러?
                        console.log(error);
                        break;
                }
            },

            () => {
                // 업로드가 성공하면 업로드 주소를 가져오고 addMutation.mutate 함수를 실행해 문서를 추가한다
                getDownloadURL(uploadFile.snapshot.ref).then((downloadURL) => {
                    addMutation.mutate({
                        title: data.title,
                        isBanner: data.isBanner,
                        createdAt: today.format("YYYYMMDDHHmmss"),
                        imgUrl: downloadURL,
                        card: card,
                    });
                });
                setIsEditing(false);
            }
        );
    };

    const onUpdateCard: SubmitHandler<Inputs> = (data) => {
        if (editFile) {
            let file = data.imgFile[0];
            const storageRef = ref(storage, "images/gallery/" + file.name);
            const uploadFile = uploadBytesResumable(storageRef, file);

            uploadFile.on(
                "state_changed",
                (snapshot) => {
                    // 파일 업로드가 얼마나 진행됐는지 알려주는 상태
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
                    // 아래는 에러 처리 코드, 여기서는 3가지 경우만 했지만 아래 사이트를 참고하면 모든 에러를 볼 수 있다.
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case "storage/unauthorized":
                            // 유저에게 업로드 권한이 없는 경우, firebase st
                            // orage 의 Rules 를 확인하자
                            console.log(error);
                            break;
                        case "storage/canceled":
                            // 유저가 업로드를 취소한 경우
                            console.log(error);
                            break;
                        case "storage/unknown":
                            // 알수 없는 에러, 아마도 서버측 에러?
                            console.log(error);
                            break;
                    }
                },
                () => {
                    // 업로드가 성공하면 업로드 주소를 가져오고 addMutation.mutate 함수를 실행해 문서를 추가한다
                    getDownloadURL(uploadFile.snapshot.ref).then(
                        (downloadURL) => {
                            updateMutation.mutate({
                                title: data.title,
                                isBanner: data.isBanner,
                                imgUrl: downloadURL,
                                card: card,
                            });
                        }
                    );
                    setIsEditing(false);
                }
            );
        } else {
            updateMutation.mutate({
                title: data.title,
                isBanner: data.isBanner,
            });
        }
        setIsEditing(false);
    };

    return (
        <form
            className='relative flex w-full items-center justify-start border-b border-gray-200 bg-GRAY_COLOR-200 '
            onSubmit={
                selectedCard
                    ? handleSubmit(onUpdateCard)
                    : handleSubmit(onAddCard)
            }
        >
            {/*onUpdate Image*/}
            {selectedCard && !editFile ? (
                <div className='relative  flex h-52 flex-col items-end border p-2 md:w-1/3 lg:w-1/2'>
                    <Image
                        src={selectedCard.imgUrl}
                        layout='fill'
                        objectFit='contain'
                    />
                    <button
                        className='absolute right-2 bottom-2 z-50 border bg-GRAY_COLOR-600 text-sm'
                        onClick={() => setEditFile(true)}
                    >
                        이미지 수정
                    </button>
                </div>
            ) : (
                <div className='h-52 w-1/4 flex-col border p-2'>
                    <label>
                        이미지 파일명을 업로드 날짜로 바꿔서 업로드해주세요
                        <input
                            type='file'
                            {...register("imgFile", { required: true })}
                        />
                    </label>
                </div>
            )}

            <div className='w-3/4'>
                <div className='flex justify-center  md:mr-32'>
                    <label className='flex flex-col  items-center space-y-3'>
                        <div className='space-x-4'>
                            <a>제목 :</a>
                            <input
                                placeholder='사진의 제목을 입력해주세요'
                                {...register("title", { required: true })}
                            />
                        </div>

                        <label className='flex space-x-2'>
                            <a>메인페이지 배너</a>
                            <input
                                type='checkbox'
                                defaultChecked={false}
                                {...register("isBanner")}
                            />
                        </label>
                    </label>
                </div>
            </div>
            <div className='absolute bottom-3 right-1'>
                <input
                    className='mr-5 w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1'
                    type='submit'
                    value={selectedCard ? "편집" : "추가"}
                />
                <GalleryCancelButton />
            </div>
        </form>
    );
}

export default GalleryToggle;
