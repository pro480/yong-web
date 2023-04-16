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
    const qnaLength = Math.floor(Number(qnaList?.length) / 10) + 1; // <-- 요 부분 한 페이지에 표시되는 자료 갯수에 따라 달라지는 부분 /(원하는 자료 수)
    const maxOffset = Math.floor(qnaLength / 5) * 5 + 1;
    let buttonOffset = Math.floor((Number(pageNumber) - 1) / 5) * 5 + 1;

    return (
        <div className=' m-5 flex items-center justify-center'>
            <ul className='inline-flex items-center -space-x-px '>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3'
                        onClick={() => {
                            setPageNumber(1);
                        }}
                    >
                        <ChevronDoubleLeftIcon className='h-3 w-3' />
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3'
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
                        onClick={() => {
                            setPageNumber(buttonOffset);
                        }}
                    >
                        {pageNumber == buttonOffset ? (
                            <span className='m-1 border border-PRIMARY_COLOR-500 bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                {buttonOffset}
                            </span>
                        ) : (
                            <span className='m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                {buttonOffset}
                            </span>
                        )}
                    </button>
                </li>
                {buttonOffset + 1 <= qnaLength && (
                    <li>
                        <button
                            onClick={() => {
                                setPageNumber(buttonOffset + 1);
                            }}
                        >
                            {pageNumber == buttonOffset + 1 ? (
                                <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 1}
                                </span>
                            ) : (
                                <span className='m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 1}
                                </span>
                            )}
                        </button>
                    </li>
                )}
                {buttonOffset + 2 <= qnaLength && (
                    <li>
                        <button
                            onClick={() => {
                                setPageNumber(buttonOffset + 2);
                            }}
                        >
                            {pageNumber == buttonOffset + 2 ? (
                                <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 2}
                                </span>
                            ) : (
                                <span className='m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 2}
                                </span>
                            )}
                        </button>
                    </li>
                )}
                {buttonOffset + 3 <= qnaLength && (
                    <li>
                        <button
                            onClick={() => {
                                setPageNumber(buttonOffset + 3);
                            }}
                        >
                            {pageNumber == buttonOffset + 3 ? (
                                <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 3}
                                </span>
                            ) : (
                                <span className='m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 3}
                                </span>
                            )}
                        </button>
                    </li>
                )}
                {buttonOffset + 4 <= qnaLength && (
                    <li>
                        <button
                            onClick={() => {
                                setPageNumber(buttonOffset + 4);
                            }}
                        >
                            {pageNumber == buttonOffset + 4 ? (
                                <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 px-2 py-1 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 4}
                                </span>
                            ) : (
                                <span className='m-1 border border-PRIMARY_COLOR-500 bg-white px-2 py-1 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 4}
                                </span>
                            )}
                        </button>
                    </li>
                )}
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3'
                        onClick={() => {
                            buttonOffset < maxOffset
                                ? (buttonOffset = buttonOffset + 5)
                                : (buttonOffset = maxOffset);
                            setPageNumber(buttonOffset);
                        }}
                    >
                        <ChevronRightIcon className='h-3 w-3' />
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500 md:py-3'
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
