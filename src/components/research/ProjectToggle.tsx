import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProjectContext } from "../../../pages/research";
import { Course, Team } from "../../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc } from "@firebase/firestore";
import { db, storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import Image from "next/image";
import { MemberCancelButton } from "../info/MemberButton";
import moment from "moment/moment";

interface Inputs {
    title_KO: string;
    description: string;
    consignment: string[];
    startedAt: string;
    completed: boolean;
    endedAt?: string;
    imageFile?: File[];
}

function ProjectToggle() {
    const [consignmentList, setConsignmentList] = useState([""]);
    const [editImage, setEditImage] = useState(false);
    const { selectedProject, collectionRef, selectedDocId, setModalOpen } =
        useContext(ProjectContext);

    useEffect(() => {
        if (selectedProject) {
            let newConsignmentList = [...selectedProject.consignment];
            setConsignmentList(newConsignmentList);
            reset(selectedProject);
        }
    }, [selectedProject]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: useMemo(() => {
            if (selectedProject) {
                return selectedProject;
            }
        }, [selectedProject]),
    });

    // firebase members 컬렉션에 문서 추가하기 위한 작업
    const addMutation = useFirestoreCollectionMutation(collectionRef);
    // firebase members 컬렉션에 있는 특정 문서를 수정하기 위한 작업
    const updateMutation = useFirestoreDocumentMutation(
        doc(collection(db, "projects"), `${selectedDocId}`),
        { merge: true }
    );

    const onAddProject: SubmitHandler<Inputs> = (data) => {
        addMutation.mutate({
            title_KO: data.title_KO,
            description: data.description,
            consignment: data.consignment.slice(0, consignmentList.length),
            startedAt: data.startedAt,
            completed: false,
        });
    };

    // function uploadImageAndAddDoc(data: Inputs, mutation: any) {
    //     let file = data.imageFile[0];
    //     const storageRef = ref(storage, "images/projects/" + file.name);
    //     const uploadImage = uploadBytesResumable(storageRef, file);
    //
    //     uploadImage.on(
    //         "state_changed",
    //         (snapshot) => {
    //             // 이미지 업로드가 얼마나 진행됐는지 알려주는 상태
    //             const progress =
    //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //             console.log("Upload is " + progress + "% done");
    //             switch (snapshot.state) {
    //                 case "paused":
    //                     console.log("Upload is paused");
    //                     break;
    //                 case "running":
    //                     console.log("Upload is running");
    //                     break;
    //             }
    //         },
    //
    //         (error) => {
    //             // 아래는 에러 처리 코드, 여기서는 3가지 경우만 했지만 아래 사이트를 참고하면 모든 에러를 볼 수 있다.
    //             // https://firebase.google.com/docs/storage/web/handle-errors
    //             switch (error.code) {
    //                 case "storage/unauthorized":
    //                     // 유저에게 업로드 권한이 없는 경우, firebase storage 의 Rules 를 확인하자
    //                     console.log(error);
    //                     break;
    //                 case "storage/canceled":
    //                     // 유저가 업로드를 취소한 경우
    //                     console.log(error);
    //                     break;
    //                 case "storage/unknown":
    //                     // 알수 없는 에러, 아마도 서버측 에러?
    //                     console.log(error);
    //                     break;
    //             }
    //         },
    //         () => {
    //             // 업로드가 성공하면 업로드 주소를 가져오고 addMutation.mutate 함수를 실행해 문서를 추가한다
    //             getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
    //                 mutation.mutate({
    //                     title_KO: data.title_KO,
    //                     description: data.description,
    //                     consignment: data.consignment.slice(
    //                         0,
    //                         consignmentList.length
    //                     ),
    //                     startedAt: data.startedAt,
    //                     completed: data.completed,
    //                     endedAt: data.endedAt,
    //                     imageUrl: downloadURL,
    //                 });
    //             });
    //             setModalOpen(false);
    //         }
    //     );
    // }

    // const onUpdateProject: SubmitHandler<Inputs> = (data) => {
    //     if (editImage) {
    //         uploadImageAndAddDoc(data, updateMutation);
    //     } else {
    //         updateMutation.mutate({
    //             title_KO: data.title_KO,
    //             description: data.description,
    //             consignment: data.consignment.slice(0, consignmentList.length),
    //             startedAt: data.startedAt,
    //             completed: data.completed,
    //             endedAt: data.endedAt,
    //         });
    //         setModalOpen(false);
    //     }
    // };

    // 약력 입력란 추가
    const addConsignment = () => {
        if (consignmentList.length < 8) {
            let newConsignmentList = [...consignmentList];
            newConsignmentList.push("");
            setConsignmentList(newConsignmentList);
        }
    };

    // 약력 입력란 삭제
    const deletedConsignment = () => {
        if (consignmentList.length > 1) {
            let newConsignmentList = [...consignmentList];
            newConsignmentList.pop();
            setConsignmentList(newConsignmentList);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onAddProject)}
            className='min-h-44 relative flex w-full flex-col flex-wrap gap-y-2 bg-gray-300 p-4'
        >
            <label className='flex flex-col'>
                프로젝트 제목
                <input {...register("title_KO", { required: true })} />
            </label>
            <label className='flex flex-col'>
                프로젝트 설명
                <textarea
                    className='h-32 w-full'
                    {...register("description", { required: true })}
                />
            </label>
            <label className='flex flex-col'>
                시작일
                <input type='date' {...register("startedAt")} />
            </label>
            <label className='flex flex-col'>
                <div className='flex gap-x-4'>
                    약력 (최대 8개)
                    <button
                        className='flex w-fit border bg-PRIMARY_COLOR-50 px-2'
                        onClick={(e) => {
                            e.preventDefault();
                            addConsignment();
                        }}
                    >
                        수탁 기관 추가
                    </button>
                    <button
                        className='flex w-fit border bg-PRIMARY_COLOR-50 px-2'
                        onClick={(e) => {
                            e.preventDefault();
                            deletedConsignment();
                        }}
                    >
                        수탁 기관 삭제
                    </button>
                </div>

                <div className='w-full'>
                    {consignmentList.map((consignment, index) => (
                        <input
                            key={index}
                            className='m-1 h-7 w-[20%] border border-gray-700  pl-3'
                            type='history'
                            placeholder='수탁 기관'
                            {...register(`consignment.${index}`, {
                                required: true,
                            })}
                        />
                    ))}
                </div>
            </label>
            <input
                className='mr-10 w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1'
                type='submit'
                value='추가'
            />
        </form>
    );
}

export default ProjectToggle;
