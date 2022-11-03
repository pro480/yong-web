import React, { useContext } from "react";
import { ReportContext } from "./Report";

export function ReportAddButton() {
    const { isAdding, setIsAdding } = useContext(ReportContext);

    return (
        <div>
            <button
                className=' mx-3 my-3 h-[28px] w-[50px]  cursor-pointer rounded-md bg-gray-400 text-center text-white hover:bg-gray-500'
                onClick={() => {
                    setIsAdding((prev) => !prev);
                }}
            >
                {isAdding ? "취소" : "추가"}
            </button>
        </div>
    );
}

export function ReportDeleteButton({ docId }: { docId: string }) {
    const { deleteDocument } = useContext(ReportContext);
    return (
        <div
            className='h-[30px] w-[40px] cursor-pointer rounded-md bg-gray-400 text-center text-white hover:bg-gray-600'
            onClick={() => {
                deleteDocument(docId);
                alert("보고서가 삭제되었습니다.");
            }}
        >
            삭제
        </div>
    );
}
