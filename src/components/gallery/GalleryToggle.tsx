import React, {useState, useEffect, useMemo, useContext} from "react";
import Image from "next/image";
import {MemberListContext} from "../common/MemberList";
import {GalleryContext} from "../../../pages/data/gallery";
import {SubmitHandler, useForm} from "react-hook-form";
import {useFirestoreCollectionMutation, useFirestoreDocumentMutation} from "@react-query-firebase/firestore";
import {collection, doc} from "@firebase/firestore";
import {db, storage} from "../../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";

interface Inputs {
    title:string;
    imgUrl:File[];
    createdAt:string;
    isBanner:boolean;
}


function GalleryToggle() {
    const [editImage, setEditImage] = useState(false);
    const { selectedPost ,collectionRef, selectedDocId, setToggleOpen } =
        useContext(GalleryContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: useMemo(()=>{
            if(selectedDocId){
                return(selectedDocId)
            }
        },[selectedDocId])
    })

    // firebase members 컬렉션에 문서 추가하기 위한 작업
    const addMutation = useFirestoreCollectionMutation(collectionRef);
    // firebase members 컬렉션에 있는 특정 문서를 수정하기 위한 작업
    const updateMutation = useFirestoreDocumentMutation(
        doc(
            collection(
                db,
                "galleryDatas"
            ),
            `${selectedDocId}`
        ),
        { merge: true }
    );

    function uploadImageAndAddDoc(data: Inputs, mutation: any) {
        let image = data.imgUrl[0];
        const storageRef = ref(
            storage,
            "images/gallery/" + image.name
        );
        const uploadImage = uploadBytesResumable(storageRef, image);

        uploadImage.on(
            "state_changed",
            (snapshot) => {
                // 이미지 업로드가 얼마나 진행됐는지 알려주는 상태
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
                getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
                    mutation.mutate({
                        title : data.title, //제목
                        imgUrl : data.imgUrl,
                        createdAt : data.createdAt,
                        isBanner : data.isBanner

                    });
                });
                setToggleOpen(false);
            }
        );
    }

    const onUpdatePost: SubmitHandler<Inputs> = (data) => {
        if (editImage) {
            uploadImageAndAddDoc(data, updateMutation);
        } else {
            updateMutation.mutate({
                title : data.title, //제목
                imgUrl : data.imgUrl,
                createdAt : data.createdAt,
                isBanner : data.isBanner,
            });
            setToggleOpen(false);
        }
    };

    const onAddPost: SubmitHandler<Inputs> = (data) => {
        uploadImageAndAddDoc(data, addMutation);
    };



    return (
        <form
            onSubmit={
                selectedDocId
                    ? handleSubmit(onUpdatePost)
                    : handleSubmit(onAddPost)
            }
        >

            <div className='mt-3 flex h-80 flex-col rounded-md bg-GRAY_COLOR-500'>
                {selectedPost && !editImage?(
                        <div>
                            <div className='relative h-4/5 w-1/3 border-2 '>
                                <Image
                                    src={selectedPost.imgUrl}
                                    alt='업로드된 사진 미리보기'
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                            <input
                                placeholder='이미지 파일을 넣어주세요'
                                {...register("imgUrl", { required: true })}
                                type='file'
                                className='file:rounded-[10px] file:border-4 file:border-GRAY_COLOR-800 file:bg-PRIMARY_COLOR-100'
                            />
                        </div>
                    ) : (
                    <div>
                        <div>
                            <input
                                placeholder='이미지 파일을 넣어주세요'
                                {...register("imgUrl", { required: true })}
                                type='file'
                                className='file:rounded-[10px] file:border-4 file:border-GRAY_COLOR-800 file:bg-PRIMARY_COLOR-100'
                            />
                        </div>
                    </div>
                )}
                <div className='flex h-80 items-center justify-center space-x-2'>
                    {/* 이미지 썸네일 */}


                        {/* 제목 입력 */}
                        <label>
                            제목
                            <input
                                placeholder='게시물의 제목을 입력해주세요'
                                {...register("title", { required: true })}
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
        </form>
    );
}

export default GalleryToggle;
