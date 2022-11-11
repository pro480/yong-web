import React, { useContext, useState } from "react";
import { QnaContext } from "../../../pages/notice/qna";

export function QnaDeleteButton({ docId }: { docId: string }) {
    const { deleteDocument } = useContext(QnaContext);
    return (
        <div className='mt-3 h-[20px] w-[33px] cursor-pointer rounded-md bg-gray-400 text-center text-[14px] text-white hover:bg-gray-500 lg:mx-3 lg:h-[28px] lg:w-[50px] lg:text-base'>
            <button
                onClick={() => {
                    confirm("게시글을 삭제하시겠습니까?")
                        ? deleteDocument(docId)
                        : null;
                }}
            >
                삭제
            </button>
        </div>
    );
}
