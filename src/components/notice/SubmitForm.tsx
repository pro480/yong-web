import { addDoc } from "firebase/firestore";
import moment from "moment";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { QnaContext } from "../../../pages/notice/qna";
import { QNA } from "../../../typing";

export default function SubmitForm() {
    const { register, handleSubmit } = useForm<QNA>();
    const { collectionRef } = useContext(QnaContext);

    const onValid = async (data: QNA) => {
        const docData = {
            answer: "",
            answerAt: "",
            content: data.content,
            createAt: moment().format("YYYYMMDDHHmmss"),
            title: data.title,
        };
        await addDoc(collectionRef, docData);
    };
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onValid)}>
                <div className='mt-8 flex border border-GRAY_COLOR-400 p-2'>
                    <div className='w-full flex-col text-[14px] lg:text-base'>
                        <div className='border-b border-gray-400'>
                            <textarea
                                {...register("title", {
                                    required: true,
                                    maxLength: 20,
                                })}
                                placeholder='제목을 입력해 주세요.(최대 20자)'
                                className='h-[23px] w-full resize-none pl-2 lg:h-[30px]'
                            ></textarea>
                        </div>
                        <textarea
                            {...register("content", {
                                required: true,
                                maxLength: 100,
                            })}
                            placeholder='질문 사항을 입력해 주세요.(최대 100자)'
                            className='h-[50px] w-full resize-none pl-2 lg:h-[60px]'
                        ></textarea>
                    </div>
                    <button
                        className='mx-2 w-[10%] bg-PRIMARY_COLOR-200 font-bold text-white hover:bg-PRIMARY_COLOR-500'
                        type='submit'
                    >
                        입력
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
}
