import { addDoc } from "firebase/firestore";
import moment from "moment";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Research } from "../../../typing";
import { ReportContext } from "./Report";

export default function ReportToggle() {
    const { register, handleSubmit } = useForm<Research>();
    const { collectionRef } = useContext(ReportContext);

    const onValid = async (data: Research) => {
        const docData = {
            createdAt: moment().format(),
            fileUrl: data.fileUrl,
            imgUrl: data.imgUrl,
            researcher: data.researcher, // 연구자
            title: data.title,
            type: data.type,
            year: data.year, //발행년도
        };
        await addDoc(collectionRef, docData);
    };

    return (
        <React.Fragment>
            <div className='flex h-[310px] w-[400px] flex-col justify-between border-4 border-gray-200  hover:border-4 '>
                <form onSubmit={handleSubmit(onValid)}>
                    <div className=' flex flex-col justify-around p-2'>
                        <div className='p-1'>
                            제목 :
                            <input
                                {...register("title", {
                                    required: true,
                                })}
                                placeholder='제목을 입력해 주세요.'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            종류 :
                            <input
                                {...register("type", {
                                    required: true,
                                })}
                                placeholder='보고서의 종류를 입력해 주세요.'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            연구자 :
                            <input
                                {...register("researcher", {
                                    required: true,
                                })}
                                placeholder='연구자를 입력해 주세요'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            발행 년도 :
                            <input
                                {...register("year", {
                                    required: true,
                                })}
                                placeholder='발행 년도를 입력해 주세요'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            pdf:
                            <input
                                {...register("fileUrl", {
                                    required: true,
                                })}
                                placeholder='pdf를 올려 주세요'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <div className='p-1'>
                            이미지 :
                            <input
                                {...register("imgUrl", {
                                    required: true,
                                })}
                                placeholder='이미지를 입력해 주세요'
                                className='h-[30px] p-2'
                            />
                        </div>
                        <button
                            className='my-2 h-[30px] w-[50px] rounded-md bg-gray-400 font-bold text-white hover:bg-gray-500'
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
