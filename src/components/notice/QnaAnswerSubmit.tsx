import { doc, updateDoc } from "firebase/firestore";
import moment from "moment";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { QnaContext } from "../../../pages/notice/qna";
import { QNA } from "../../../typing";

export default function QnaAnswerSubmit({ docId }: { docId: string }) {
    const { register, handleSubmit } = useForm<QNA>();
    63;
    const { collectionRef } = useContext(QnaContext);

    const onValid = async (data: { answer: string }) => {
        const submitRef = doc(collectionRef, docId);
        const docData = {
            answer: data.answer,
            answerAt: moment().format("YYYYMMDDss"),
        };
        await updateDoc(submitRef, docData);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onValid)}>
                <div className='flex border-GRAY_COLOR-400 '>
                    <div className='w-full'>
                        <div className='border-2 border-gray-400'>
                            <textarea
                                {...register("answer")}
                                placeholder='답변을 입력해 주세요'
                                className=' h-[50px] w-full resize-none pl-2'
                            ></textarea>
                        </div>
                    </div>
                    <button
                        className=' w-[10%] bg-PRIMARY_COLOR-200 font-bold text-white hover:bg-PRIMARY_COLOR-500'
                        type='submit'
                    >
                        답변 입력
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
}
