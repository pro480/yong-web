import React, { useContext, useState } from "react";
import { QnaContext } from "../../../pages/notice/qna";

export function QnaDeleteButton({ docId }: { docId: string }) {
    const { deleteDocument } = useContext(QnaContext);
    return (
        <button
            className=' mx-3 h-[28px] w-[50px]  cursor-pointer rounded-md bg-gray-400 text-center text-white hover:bg-gray-500'
            onClick={() => {
                deleteDocument(docId);
                return alert("게시글이 삭제되었습니다.");
            }}
        >
            삭제
        </button>
    );
}
