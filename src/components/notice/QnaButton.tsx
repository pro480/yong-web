import React, { useContext, useState } from "react";
import { QnaContext } from "../../../pages/notice/qna";

function QnaAnswerButton() {
    const [rowEditing, setRowEditing] = useState(false); // 해당 row에서만 사용해야 하기 때문에 전역 관리를 하지 않는다.
    const { setIsEditing } = useContext(QnaContext);

    return (
        <button
            className=' mx-3 my-3 h-[28px] w-[50px]  cursor-pointer rounded-md bg-gray-400 text-center text-white hover:bg-gray-500'
            onClick={() => {
                setRowEditing((prev) => !prev);
                setIsEditing(rowEditing);
            }}
        >
            {rowEditing ? `취소` : `답변`}
        </button>
    );
}

function QnaDeleteButton({ docId }: { docId: string }) {
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

export { QnaAnswerButton, QnaDeleteButton };
