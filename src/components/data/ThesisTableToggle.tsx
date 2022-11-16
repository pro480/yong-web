import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Material, Thesis } from "../../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { db, storage } from "../../../firebase";
import { MaterialTableContext } from "./MaterialTable";
import { MaterialTableCancelButton } from "./MaterialTableButton";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import moment from "moment";
import { fill } from "lodash";
import { ImFileText2 } from "react-icons/im";
import data from "../../../pages/data/paper";
import { IconButton } from "@material-tailwind/react";
import { ThesisContext } from "./ThesisTable";
import { addDoc, updateDoc, doc } from "firebase/firestore";

export default function ThesisTableToggle() {
    const today = moment();
    const { register, handleSubmit } = useForm<Thesis>();
    const { collectionRef, selectedDocId, selectedThesis } =
        useContext(ThesisContext);

    const onAddMaterial: SubmitHandler<Thesis> = async (data: Thesis) => {
        const docData = {
            createdAt: today.format("YYYYMMDDHHmmss"),
            type: data.type,
            researcher: data.researcher,
            title: data.title,
            year: data.year,
        };

        await addDoc(collectionRef, docData);
    };

    const onUpdateMaterial: SubmitHandler<Thesis> = async (data: Thesis) => {
        const dataRef = doc(collectionRef, selectedDocId);

        const docData = {
            type: data.type,
            researcher: data.researcher,
            title: data.title,
            year: data.year,
        };

        await updateDoc(dataRef, docData);
    };

    return (
        <form
            className='relative w-full flex-col items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 text-xs sm:text-sm '
            onSubmit={
                selectedDocId == ""
                    ? handleSubmit(onAddMaterial)
                    : handleSubmit(onUpdateMaterial)
            }
        >
            {/* input */}
            <div className='flex h-10 items-center justify-around'>
                <div className='w-[5%] text-center'></div>
                <label className='w-[45%] p-1'>
                    <input
                        className=' w-full border border-gray-700 text-center'
                        placeholder='논문 제목'
                        {...register("title", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[20%] p-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='학회지'
                        {...register("type", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[20%] p-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='연구자'
                        {...register("researcher", {
                            required: true,
                        })}
                    />
                </label>
                <label className=' p-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='발행 년도'
                        {...register("year", {
                            required: true,
                        })}
                    />
                </label>

                <button
                    className='flex self-center text-black hover:underline hover:underline-offset-2'
                    type='submit'
                >
                    입력
                </button>

                {/* {selectedMaterial && !editFile ? (
                    <div className='flex w-[20%] items-center'>
                        <label className='items-left flex h-12 w-full justify-center self-center'>
                            <IconButton
                                className='flex self-center text-black hover:underline hover:underline-offset-2'
                                onClick={() => setEditFile(true)}
                            >
                                <ImFileText2 className='ml-2' size={20} />
                            </IconButton>
                        </label>
                        <label className='w-15 absolute right-2 z-50 hidden bg-gray-100 text-sm lg:flex'>
                            <input type='submit' className=' border p-1' />
                            <MaterialTableCancelButton />
                        </label>
                    </div>
                ) : (
                    <>
                        <label className='flex w-[20%] items-center text-right'>
                            <input
                                className='w-full pl-5 text-xs'
                                type='file'
                                {...register("materialFile", {
                                    required: selectedMaterial ? false : true,
                                })}
                            />
                            <label className='w-15 absolute right-2 hidden bg-gray-100 text-sm lg:flex'>
                                <input type='submit' className=' border p-1' />
                            </label>
                        </label>
                    </>
                )} */}
            </div>
        </form>
    );
}

// 파일 추가할때 첨부파일이랑 제출/취소버튼 겹침
// 취소버튼은 헤더에도 포함된 기능이므로 중복된 기능 => 제거
// 제출버튼은 조건이 모두 만족되면 visible하게 설정해보기!
