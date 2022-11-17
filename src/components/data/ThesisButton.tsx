import { useContext } from "react";
import { Thesis } from "../../../typing";
import { ThesisContext } from "./ThesisMain";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

export function ThesisUpdateButton({
    data,
    docId,
}: {
    data: Thesis;
    docId: string;
}) {
    const { setIsEditing, setSelectedDocId, setSelectedThesis } =
        useContext(ThesisContext);

    return (
        <div
            className='my-1 h-[22px] w-[38px] cursor-pointer bg-gray-400 text-center text-sm text-white hover:bg-gray-600 xl:h-[30px] xl:w-[40px] xl:text-base'
            onClick={() => {
                setIsEditing(true);
                setSelectedDocId(docId);
                setSelectedThesis(data);
            }}
        >
            수정
        </div>
    );
}

export function ThesisDeleteButton({ docId }: { docId: string }) {
    const { deleteDocument } = useContext(ThesisContext);
    return (
        <div
            className='m-1 h-[22px] w-[38px] cursor-pointer bg-gray-400 text-center text-sm text-white hover:bg-gray-600 xl:h-[30px] xl:w-[40px] xl:text-base'
            onClick={() => {
                confirm("논문을 삭제하시겠습니까?")
                    ? deleteDocument(docId)
                    : null;
            }}
        >
            삭제
        </div>
    );
}

export function ThesisAddButton() {
    const { setIsEditing, isEditing, setSelectedDocId, setSelectedThesis } =
        useContext(ThesisContext);

    return (
        <button
            className='mx-3 my-3 h-[22px] w-[38px] cursor-pointer rounded-md bg-gray-400 text-center text-sm text-white hover:bg-gray-500 xl:h-[28px] xl:w-[50px] xl:text-base'
            onClick={() => {
                setIsEditing((prev) => !prev);
                setSelectedDocId("");
                setSelectedThesis(null);
            }}
        >
            {isEditing ? "취소" : "추가"}
        </button>
    );
}

export function ThesisPageButton() {
    const { pageNumber, setPageNumber, thesisList } = useContext(ThesisContext);
    const researchLength = Math.floor(Number(thesisList?.length) / 5) + 1; // 한 페이지당 원하는 자료 수에 따라 달라지는 부분 /(원하는 자료 수)
    const maxOffset = Math.floor(researchLength / 5) * 5 + 1;
    let buttonOffset = Math.floor((Number(pageNumber) - 1) / 5) * 5 + 1;

    return (
        <div className=' m-5 flex items-center justify-center pt-4'>
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
                        onClick={() => {
                            setPageNumber(buttonOffset);
                        }}
                    >
                        {pageNumber == buttonOffset ? (
                            <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-2 px-3 text-sm text-PRIMARY_COLOR-500'>
                                {buttonOffset}
                            </span>
                        ) : (
                            <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500'>
                                {buttonOffset}
                            </span>
                        )}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setPageNumber(buttonOffset + 1);
                        }}
                    >
                        {pageNumber == buttonOffset + 1 ? (
                            <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-2 px-3 text-sm text-PRIMARY_COLOR-500'>
                                {buttonOffset + 1}
                            </span>
                        ) : (
                            <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500'>
                                {buttonOffset + 1}
                            </span>
                        )}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setPageNumber(buttonOffset + 2);
                        }}
                    >
                        {pageNumber == buttonOffset + 2 ? (
                            <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-2 px-3 text-sm text-PRIMARY_COLOR-500'>
                                {buttonOffset + 2}
                            </span>
                        ) : (
                            <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500'>
                                {buttonOffset + 2}
                            </span>
                        )}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setPageNumber(buttonOffset + 3);
                        }}
                    >
                        {pageNumber == buttonOffset + 3 ? (
                            <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-2 px-3 text-sm text-PRIMARY_COLOR-500'>
                                {buttonOffset + 3}
                            </span>
                        ) : (
                            <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500'>
                                {buttonOffset + 3}
                            </span>
                        )}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setPageNumber(buttonOffset + 4);
                        }}
                    >
                        {pageNumber == buttonOffset + 4 ? (
                            <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-2 px-3 text-sm text-PRIMARY_COLOR-500'>
                                {buttonOffset + 4}
                            </span>
                        ) : (
                            <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500'>
                                {buttonOffset + 4}
                            </span>
                        )}
                    </button>
                </li>
                <li>
                    <button
                        className='m-1 border border-PRIMARY_COLOR-500 bg-white py-3 px-2 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
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
