import React, { Dispatch } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ExternalMember,  Organization } from "../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, CollectionReference, doc } from "@firebase/firestore";
import { db } from "../../firebase";

interface Inputs {
    name: string; // 이름
    email: string; // 개인 이메일
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    organization: Organization;
    division?: string; // 구분 (대학 or 연구 기관)
}

interface Props {
    selectedMember: ExternalMember | undefined;
    setSelectedMember: Dispatch<
        React.SetStateAction<ExternalMember | undefined>
    >;
    collectionRef: CollectionReference<ExternalMember>;
    organization: Organization;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    isAdvisor: boolean;
    count: number;
    selectedDocId: string | null;
}

function MemberTableModal({
    selectedMember,
    setSelectedMember,
    collectionRef,
    organization,
    setIsEditing,
    isAdvisor,
    count,
    selectedDocId,
}: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>({
        defaultValues: {
            name: selectedMember?.name,
            email: selectedMember?.email,
            department: selectedMember?.department,
            division: selectedMember?.division,
            organization: selectedMember?.organization,
        },
    });

    const addMutation = useFirestoreCollectionMutation(collectionRef);
    const updateMutation = useFirestoreDocumentMutation(
        doc(collection(db, "externalMembers"), `${selectedDocId}`),
        { merge: true }
    );

    const onAddMember: SubmitHandler<Inputs> = (data) => {
        addMutation.mutate({
            name: data.name, // 이름
            email: data.email, // 개인 이메일
            department: data.department, // 소속 (ex.인하대학교 교육학과 교수)
            organization: organization,
            division: data?.division, // 구분 (대학 or 연구 기관)
        });
    };

    const onUpdateMember: SubmitHandler<Inputs> = (data) => {
        updateMutation.mutate({
            name: data.name, // 이름
            email: data.email, // 개인 이메일
            department: data.department, // 소속 (ex.인하대학교 교육학과 교수)
            organization: organization,
            division: data?.division, // 구분 (대학 or 연구 기관)
        });
    };

    return (
        <form
            className='relative flex w-full items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 '
            onSubmit={
                selectedMember
                    ? handleSubmit(onUpdateMember)
                    : handleSubmit(onAddMember)
            }
        >
            {isAdvisor && (
                <div className='w-[10%] text-center'>
                    <select
                        className='mx-2 h-8 border border-gray-700  pl-3'
                        placeholder='구분'
                        {...register("division")}
                    >
                        <option value='대학'>대학</option>
                        <option value='연구 기관'>연구 기관</option>
                    </select>
                </div>
            )}
            <div className='w-[5%] py-3 text-center'>{count + 1}</div>
            <label className='w-[20%] text-center'>
                <input
                    className=' mx-2 h-7 border  border-gray-700   pl-3'
                    placeholder='성명'
                    {...register("name", {
                        required: true,
                    })}
                />
            </label>
            <label className='w-[30%] text-center'>
                <input
                    className=' mx-2 w-60 border border-gray-700   pl-3'
                    placeholder='소속'
                    {...register("department", {
                        required: true,
                    })}
                />
            </label>
            <label className='w-[35%] items-center  justify-center text-center'>
                <input
                    className=' mx-2 h-7 w-44 border border-gray-700   pl-3'
                    placeholder='이메일'
                    {...register("email", {
                        required: true,
                    })}
                />
            </label>
            <div className='absolute right-2 flex gap-x-3 text-sm'>
                <input type='submit' className=' border p-1' />
                <button
                    className='border p-1'
                    onClick={() => {
                        setIsEditing(false);
                        setSelectedMember(undefined);
                    }}
                >
                    취소
                </button>
            </div>
        </form>
    );
}

export default MemberTableModal;
