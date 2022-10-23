import React, { useContext, useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Organization } from "../../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc } from "@firebase/firestore";
import { db } from "../../../firebase";
import { MemberTableContext } from "./MemberTable";
import { MemberTableCancelButton } from "./MemberTableButton";

interface Inputs {
    name: string; // 이름
    email: string; // 개인 이메일
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    organization: Organization;
    division?: string | null; // 구분 (대학 or 연구 기관)
}

interface Props {
    organization: Organization;
}

function MemberTableToggle({ organization }: Props) {
    const { selectedMember, collectionRef, selectedDocId, selectedIndex } =
        useContext(MemberTableContext);

    const { register, reset, handleSubmit } = useForm<Inputs>({
        defaultValues: useMemo(() => {
            if (selectedMember) {
                return selectedMember;
            }
        }, [selectedMember]),
    });

    useEffect(() => {
        if (selectedMember) {
            reset(selectedMember);
        }
    }, [selectedMember]);

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
            division: data.division ? data.division : null, // 구분 (대학 or 연구 기관)
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
            {organization === "연구 자문단" && (
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
            <div className='w-[5%] py-3 text-center'>{selectedIndex}</div>
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
                    type='email'
                    placeholder='이메일'
                    {...register("email", {
                        required: true,
                    })}
                />
            </label>
            <div className='absolute right-2 flex gap-x-3 text-sm'>
                <input type='submit' className=' border p-1' />
                <MemberTableCancelButton />
            </div>
        </form>
    );
}

export default MemberTableToggle;
