import { CKEditor } from "ckeditor4-react";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase";
import { QNA } from "../../../typing";
import Router from "next/router";
import moment from "moment";

export default function EditorForm() {
    {
        /* 참고 사이트 : https://velog.io/@sinclairr/next-react-hook-form 
        https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko*/
    }
    const colRef = collection(db, "qna");
    //const docRef = doc(db, "qna", newQnaRef);

    const { register, handleSubmit, reset } = useForm<QNA>();

    const onValid = async (data: QNA) => {
        const docData = {
            answer: "",
            content: data.content,
            createAt: moment().format(),
            fileUrl: data.fileUrl,
            password: data.password,
            isAnswered: false,
            title: data.title,
            writer: data.writer,
        };
        //await setDoc(colRef, docData);
        //setDoc은 지정된 Document 정보를 수정할 때 사용합니당.
        await addDoc(colRef, docData);
        Router.push("./qna");
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onValid)} method='POST' action=''>
                <table className='w-full table-auto border-t border-t-black'>
                    <thead></thead>
                    <tbody className='font-bold'>
                        <tr className='border border-gray-500'>
                            <td className='w-[15%] border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                <label htmlFor='title'>제목 *</label>
                            </td>
                            <td>
                                <input
                                    {...register("title", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                    type='text'
                                    placeholder='제목을 입력해 주세요'
                                    className='m-2 h-[50px] w-[180%]'
                                />
                            </td>
                        </tr>
                        <tr className='border border-gray-500'>
                            <td className='w-[15%] border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                <label htmlFor='writer'>작성자 *</label>
                            </td>
                            <td>
                                <input
                                    {...register("writer", {
                                        required: true,
                                        maxLength: 10,
                                    })}
                                    type='text'
                                    placeholder='이름을 입력해 주세요'
                                    className='m-2 h-[50px] w-[90%]'
                                />
                            </td>
                            <td className='w-[15%] border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                <label htmlFor='password'>비밀번호 *</label>
                            </td>
                            <td>
                                <input
                                    {...register("password", {
                                        required: true,
                                        maxLength: 10,
                                    })}
                                    type='password'
                                    placeholder='비밀번호'
                                    className='m-2 h-[50px] w-[90%]'
                                />
                            </td>
                        </tr>
                        <tr className='border border-gray-500'>
                            <td className='border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                <label htmlFor='content'>내용 *</label>
                            </td>
                            <td>
                                <input
                                    {...register("content", {
                                        required: true,
                                        maxLength: 200,
                                    })}
                                    type='text'
                                    placeholder=' 내용을 입력해 주세요'
                                    className='m-2 h-[300px] w-[238%]'
                                />
                            </td>
                        </tr>
                        <tr className='border border-gray-500'>
                            <td className='border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                <label htmlFor='fileUrl'>첨부 파일</label>
                            </td>
                            <td>
                                <input
                                    {...register("fileUrl", {
                                        required: false,
                                        maxLength: 100,
                                    })}
                                    type='text'
                                    placeholder=' 첨부파일 등록'
                                    className='m-2 h-[50px] w-[90%]'
                                />
                            </td>
                            <td>
                                <Button className='my-3 mr-5 rounded bg-GRAY_COLOR-200 py-2 px-4 font-bold hover:bg-GRAY_COLOR-300'>
                                    찾아보기
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button
                    className='float-right my-3 mr-5 rounded bg-PRIMARY_COLOR-300 py-2 px-4 font-bold text-white hover:bg-PRIMARY_COLOR-500'
                    href='./qna'
                >
                    취소
                </Button>
                <Button
                    type='submit'
                    className='float-right my-3 mr-1 rounded bg-PRIMARY_COLOR-300 py-2 px-4 font-bold text-white hover:bg-PRIMARY_COLOR-500'
                >
                    완료
                </Button>
            </form>
        </React.Fragment>
    );
}
