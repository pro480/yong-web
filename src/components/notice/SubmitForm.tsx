import { addDoc } from "firebase/firestore";
import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { QNA } from "../../../typing";
import useFirebase from "../../hooks/useFirebase";

export default function SubmitForm() {
    const { collectionRef, collectionQuery, deleteDocument } = useFirebase<QNA>(
        "qna",
        ["qna"]
    );
    const { register, handleSubmit } = useForm<QNA>();

    const onValid = async (data: QNA) => {
        const docData = {
            answer: "",
            content: data.content,
            createAt: moment().format(),
            //password: data.password,
            isAnswered: false,
        };
        await addDoc(collectionRef, docData);
        // Router.push("./qna");
    };
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onValid)} method='POST' action=''>
                <div className='mt-8 flex border border-GRAY_COLOR-400 p-2'>
                    <textarea
                        {...register("content", {
                            required: true,
                            maxLength: 20,
                        })}
                        placeholder='질문 사항을 입력해 주세요'
                        className='h-[60px] w-full'
                    ></textarea>
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
