import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { Project } from "../../../typing";
import useAuth from "../../hooks/useAuth";
import { ProjectContext } from "../../../pages/research/business";
import { useForm } from "react-hook-form";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { db, storage } from "../../../firebase";
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import { collection, doc } from "@firebase/firestore";
import Image from "next/image";

interface Props {
    docID: string;
    project: Project;
}

interface Inputs {
    imageFile?: File[];
}

function ProgressResearchCard({ project, docID }: Props) {
    const { user } = useAuth();
    const { deleteDocument } = useContext(ProjectContext);
    const [modalOpen, setModalOpen] = useState(false);
    const { register, handleSubmit } = useForm<Inputs>();

    useEffect(() => {}, [modalOpen]);

    const updateMutation = useFirestoreDocumentMutation(
        doc(collection(db, "projects"), `${docID}`),
        { merge: true }
    );

    function uploadImageAndAddDoc(data: Inputs) {
        if (data.imageFile && data.imageFile?.length > 0) {
            let file = data.imageFile[0];
            const storageRef = ref(storage, "images/projects/" + file.name);
            const uploadImage = uploadBytesResumable(storageRef, file);

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
                    getDownloadURL(uploadImage.snapshot.ref).then(
                        (downloadURL) => {
                            updateMutation.mutate({
                                imageUrl: downloadURL,
                                completed: true,
                            });
                            setModalOpen(false);
                        }
                    );
                }
            );
        } else {
            updateMutation.mutate({
                completed: true,
            });
        }
    }

    return (
        <div className='relative flex h-32 cursor-pointer items-center border-b border-PRIMARY_COLOR-500 py-4 pr-8 first:border-t hover:bg-gray-200 sm:h-40 sm:py-6 md:h-44 xl:h-48 xl:py-7 desktop:h-52 desktop:py-8'>
            <div className='flex h-full w-32 flex-col items-center justify-center gap-y-1'>
                <div className='text-xl font-bold'>
                    {moment(project.startedAt).format("YYYY.MM")}
                </div>
                <span className='text-3sxl rotate-90'>~</span>
                <div className='text-xl font-bold'>
                    {moment(project.endedAt).format("YYYY.MM")}
                </div>
            </div>
            {project.imageUrl && (
                <div className='relative h-32 w-32 self-center'>
                    <Image
                        src={project.imageUrl}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                    />
                </div>
            )}

            <div className='flex h-full flex-1 flex-col gap-y-1 desktop:gap-y-2'>
                <div className='flex items-center text-xs sm:text-base xl:text-lg'>
                    <span className='flex items-center text-PRIMARY_COLOR-500'>
                        발주 기관
                    </span>
                    <div className='mx-2 h-3 border-r-2 border-PRIMARY_COLOR-500'></div>
                    {project.consignment.map((consignment, index) => (
                        <div key={index} className='flex items-center'>
                            {index > 0 && <span>,&nbsp;</span>}
                            {consignment}
                        </div>
                    ))}
                </div>
                <div className='text-base sm:text-xl desktop:text-2xl'>
                    {project.title_KO}
                </div>
                <div className='overflow-hidden text-sm'>
                    {project.description}
                </div>
            </div>
            {user && (
                <div className='flex flex-col gap-y-2'>
                    <button
                        className='h-8 w-12 rounded-sm border hover:bg-PRIMARY_COLOR-200'
                        onClick={() => deleteDocument(docID)}
                    >
                        삭제
                    </button>
                    <button
                        className='h-8 w-12 rounded-sm border hover:bg-PRIMARY_COLOR-200'
                        onClick={() => setModalOpen(true)}
                    >
                        완료
                    </button>
                </div>
            )}
            {modalOpen && (
                <form
                    className='absolute right-32  z-50 flex flex flex-col items-center justify-center gap-y-4 bg-gray-300 py-5'
                    onSubmit={handleSubmit(uploadImageAndAddDoc)}
                >
                    <label>
                        이미지
                        <input type='file' {...register("imageFile")} />
                    </label>
                    <input type='submit' />
                </form>
            )}
        </div>
    );
}

export default ProgressResearchCard;
