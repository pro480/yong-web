import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
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

export function ReportPageButton() {
    const { pageNumber, setPageNumber, researchList } =
        useContext(ReportContext);
    const researchLength = Math.floor(Number(researchList?.length) / 8) + 1; // 한 페이지당 원하는 자료 수에 따라 달라지는 부분 /(원하는 자료 수)
    const maxOffset = Math.floor(researchLength / 5) * 5 + 1;
    let buttonOffset = Math.floor((Number(pageNumber) - 1) / 5) * 5 + 1;

    return (
        <div className=' m-5 flex items-center justify-center'>
            <ul className='inline-flex items-center -space-x-px '>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-3 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            setPageNumber(1);
                        }}
                    >
                        <ChevronDoubleLeftIcon className='h-3 w-3' />
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-3 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            buttonOffset == 1
                                ? (buttonOffset = 1)
                                : (buttonOffset = buttonOffset - 5);
                            setPageNumber(buttonOffset);
                        }}
                    >
                        <ChevronLeftIcon className='h-3 w-3' />
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            setPageNumber(buttonOffset);
                        }}
                    >
                        {buttonOffset}
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            setPageNumber(buttonOffset + 1);
                        }}
                    >
                        {buttonOffset + 1}
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            setPageNumber(buttonOffset + 2);
                        }}
                    >
                        {buttonOffset + 2}
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            setPageNumber(buttonOffset + 3);
                        }}
                    >
                        {buttonOffset + 3}
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            setPageNumber(buttonOffset + 4);
                        }}
                    >
                        {buttonOffset + 4}
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-3 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            buttonOffset = buttonOffset + 5;
                            setPageNumber(buttonOffset);
                        }}
                    >
                        <ChevronRightIcon className='h-3 w-3' />
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-3 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        onClick={() => {
                            buttonOffset = maxOffset;
                            setPageNumber(researchLength);
                        }}
                    >
                        <ChevronDoubleRightIcon className='h-3 w-3' />
                    </button>
                </li>
            </ul>
        </div>
    );
}
