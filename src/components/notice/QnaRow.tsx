import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { QNA } from "../../../typing";
import moment from "moment";
import { useRecoilState } from "recoil";
import { qnaDocState } from "../../atoms/qnaAtom";

interface Props {
    qna: QNA;
}

export default function QnaRow({ qna }: Props) {
    const setSelectedQNA = useRecoilState(qnaDocState);

    return (
        <>
            <tr className='border-b border-gray-200 hover:bg-gray-100'>
                <td className='bold text-center font-bold text-red-400'>
                    {qna.isAnswered ? "답변 완료" : ""}
                </td>
                <td className='text-l cursor-pointer px-12 py-4 font-semibold'>
                    {qna.title}
                </td>
                <td className='text-center'>{qna.writer}</td>
                <td className='text-center'>
                    {moment(qna.createAt).format("YYYY.MM.DD")}
                </td>
                <td>
                    <DocumentTextIcon
                        className='mx-auto h-8 w-8 cursor-pointer'
                        href={qna.fileUrl}
                    />
                </td>
            </tr>
            <div className='flex w-full text-center'>asdfasdf</div>
        </>
    );
}
