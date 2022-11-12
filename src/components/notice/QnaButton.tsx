import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import React, { useContext } from "react";
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

export function QnaPageButton() {
    const { pageNumber, setPageNumber, qnaList } = useContext(QnaContext);
    const qnaLength = Math.floor(Number(qnaList?.length) / 10) + 1; // 요 부분 한 페이지에 표시되는 자료 갯수에 따라 달라지는 부분 /(원하는 자료 수)
    const maxOffset = Math.floor(qnaLength / 5) * 5 + 1;
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
                            setPageNumber(qnaLength);
                        }}
                    >
                        <ChevronDoubleRightIcon className='h-3 w-3' />
                    </button>
                </li>
            </ul>
        </div>
    );
}
