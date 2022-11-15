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

interface Props {
    docID: string;
    project: Project;
}

interface Inputs {
    endedAt: string;
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
        if (data.imageFile) {
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
                                endedAt: data.endedAt,
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
                endedAt: data.endedAt,
                completed: true,
            });
        }
    }

    return (
        <div className='relative flex h-52 cursor-pointer border-b  border-PRIMARY_COLOR-500  py-8 pr-8 first:border-t hover:bg-gray-200'>
            <div className='flex h-full w-40 flex-col items-center justify-evenly'>
                <div className='text-5xl font-bold'>
                    {moment(project.startedAt).format("DD")}
                </div>
                <div className='text-xl'>
                    {moment(project.startedAt).format("YYYY.MM")}
                </div>
            </div>
            <div className='flex flex-1 flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <span className='flex items-center text-PRIMARY_COLOR-500'>
                        수탁 기관
                    </span>
                    <div className='h-4 border-r-2 border-PRIMARY_COLOR-500'></div>
                    {project.consignment.map((consignment, index) => (
                        <div key={index} className='flex items-center'>
                            {consignment}
                        </div>
                    ))}
                </div>
                <div className='text-2xl'>{project.title_KO}</div>
                <div className='overflow-hidden'>{project.description}</div>
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
                        완료일
                        <input
                            type='date'
                            {...register("endedAt", { required: true })}
                        />
                    </label>
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
