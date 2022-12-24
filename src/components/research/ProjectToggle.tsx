import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProjectContext } from "../../../pages/research/business";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc } from "@firebase/firestore";
import { db } from "../../../firebase";

interface Inputs {
    title_KO: string;
    description: string;
    consignment: string[];
    startedAt: string;
    completed: boolean;
    endedAt: string;
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
            endedAt: data.endedAt,
            completed: false,
        });
    };

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
                종료일
                <input type='date' {...register("endedAt")} />
            </label>
            <label className='flex flex-col'>
                <div className='flex gap-x-4'>
                    발주 기관 (최대 8개)
                    <button
                        className='flex w-fit border bg-PRIMARY_COLOR-50 px-2'
                        onClick={(e) => {
                            e.preventDefault();
                            addConsignment();
                        }}
                    >
                        발주 기관 추가
                    </button>
                    <button
                        className='flex w-fit border bg-PRIMARY_COLOR-50 px-2'
                        onClick={(e) => {
                            e.preventDefault();
                            deletedConsignment();
                        }}
                    >
                        발주 기관 삭제
                    </button>
                </div>

                <div className='w-full'>
                    {consignmentList.map((consignment, index) => (
                        <input
                            key={index}
                            className='m-1 h-7 w-[20%] border border-gray-700  pl-3'
                            type='history'
                            placeholder='발주 기관'
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
