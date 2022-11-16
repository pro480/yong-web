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
import { ThesisContext } from "./ThesisMain";
import { addDoc, updateDoc, doc } from "firebase/firestore";

export default function ThesisToggle() {
    const today = moment();
    const { register, handleSubmit } = useForm<Thesis>();
    const { collectionRef, selectedDocId, selectedThesis } =
        useContext(ThesisContext);

    const onAddThesis: SubmitHandler<Thesis> = async (data: Thesis) => {
        const docData = {
            createdAt: today.format("YYYYMMDDHHmmss"),
            type: data.type,
            researcher: data.researcher,
            title: data.title,
            year: data.year,
        };

        await addDoc(collectionRef, docData);
    };

    const onUpdateThesis: SubmitHandler<Thesis> = async (data: Thesis) => {
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
        <React.Fragment>
            <div className='flex flex-col justify-between border-4 border-gray-200 px-1 text-sm hover:border-4 sm:h-[290px] sm:w-[500px] md:text-base lg:h-[220px] lg:w-[750px]'>
                <form
                    onSubmit={
                        selectedDocId == ""
                            ? handleSubmit(onAddThesis)
                            : handleSubmit(onUpdateThesis)
                    }
                    className='lg:flex'
                >
                    <div className=' flex flex-col justify-around lg:w-full lg:p-2'>
                        <div className='p-1'>
                            제목 :
                            <input
                                {...register("title", {
                                    required: true,
                                })}
                                placeholder='제목을 입력해 주세요.'
                                className=' h-[25px] w-[90%] p-2 lg:h-[30px]'
                            />
                        </div>
                        <div className='p-1'>
                            학회지 :
                            <input
                                {...register("type", {
                                    required: true,
                                })}
                                placeholder='학회지를 입력해 주세요'
                                className='h-[25px] w-[80%] p-2 lg:h-[30px]'
                            />
                        </div>
                        <div className='p-1'>
                            연구자 :
                            <input
                                {...register("researcher", {
                                    required: true,
                                })}
                                placeholder='연구자를 입력해 주세요'
                                className='h-[25px] w-[45%] p-2 lg:h-[30px]'
                            />
                        </div>
                        <div className='p-1'>
                            발행 년도 :
                            <input
                                {...register("year", {
                                    required: true,
                                })}
                                placeholder='발행 년도를 입력해 주세요'
                                className='h-[25px] w-[30%] p-2 lg:h-[30px]'
                            />
                        </div>
                        <button
                            className='m-2 h-[30px] w-[50px] rounded-md bg-gray-400 font-bold text-white hover:bg-gray-500 lg:my-2'
                            type='submit'
                        >
                            저장
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

// 파일 추가할때 첨부파일이랑 제출/취소버튼 겹침
// 취소버튼은 헤더에도 포함된 기능이므로 중복된 기능 => 제거
// 제출버튼은 조건이 모두 만족되면 visible하게 설정해보기!
