import React, { useContext } from "react";
import { ResearchReport } from "../../../typing";
import { ReportContext } from "./Report";

export function ReportAddButton() {
    const { isEditing, setIsEditing, setSelectedResearch, setSelectedDocId } =
        useContext(ReportContext);

    return (
        <div>
            <button
                className='mx-3 my-3 h-[22px] w-[38px] cursor-pointer rounded-md bg-gray-400 text-center text-sm text-white hover:bg-gray-500 xl:h-[28px] xl:w-[50px] xl:text-base'
                onClick={() => {
                    setIsEditing((prev) => !prev);
                    setSelectedResearch(null);
                    setSelectedDocId(null);
                }}
            >
                {isEditing ? "취소" : "추가"}
            </button>
        </div>
    );
}

export function ReportDeleteButton({ docId }: { docId: string }) {
    const { deleteDocument } = useContext(ReportContext);
    return (
        <div
            className='h-[22px] w-[38px] cursor-pointer rounded-md bg-gray-400 text-center text-sm text-white hover:bg-gray-600 xl:h-[30px] xl:w-[40px] xl:text-base'
            onClick={() => {
                confirm("보고서를 삭제하시겠습니까?")
                    ? deleteDocument(docId)
                    : null;
            }}
        >
            삭제
        </div>
    );
}

export function ReportUpdateButton({
    docId,
    data,
}: {
    docId: string;
    data: ResearchReport;
}) {
    const { setIsEditing, setSelectedDocId, setSelectedResearch } =
        useContext(ReportContext);

    return (
        <div
            className='mx-1 h-[22px] w-[38px] cursor-pointer rounded-md bg-gray-400 text-center text-sm text-white hover:bg-gray-600 xl:h-[30px] xl:w-[40px] xl:text-base'
            onClick={() => {
                setIsEditing(true);
                setSelectedDocId(docId);
                setSelectedResearch(data);
            }}
        >
            수정
        </div>
    );
}
