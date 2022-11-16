import { useContext } from "react";
import { Thesis } from "../../../typing";
import { ThesisContext } from "./ThesisTable";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

export function ThesisTableUpdateButton({
    data,
    docId,
}: {
    data: Thesis;
    docId: string;
}) {
    const { setIsEditing, setSelectedDocId } = useContext(ThesisContext);

    return (
        <button
            className='mr-1 border border-gray-300 bg-white p-1'
            onClick={() => {
                setIsEditing(false);
                setSelectedDocId(docId);
                setIsEditing(true);
            }}
        >
            수정
        </button>
    );
}

export function ThesisTableDeleteButton({ docId }: { docId: string }) {
    const { deleteDocument } = useContext(ThesisContext);
    return (
        <button
            className='border border-gray-300 bg-white p-0.5'
            onClick={() => {
                confirm("삭제하시겠습니까?") ? deleteDocument(docId) : null;
            }}
        >
            삭제
        </button>
    );
}

export function ThesisTableAddButton() {
    const { setIsEditing, isEditing, setSelectedDocId } =
        useContext(ThesisContext);

    return (
        <button
            className='absolute right-3 top-1/2 hidden -translate-y-1/2 border bg-gray-100 p-1 lg:flex'
            onClick={() => {
                setIsEditing((prev) => !prev);
                setSelectedDocId("");
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
