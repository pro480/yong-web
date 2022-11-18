import React, { useContext } from "react";
import { MaterialTableContext } from "./MaterialTable";
import { StudyMaterial, PaperMaterial } from "../../../typing";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

function MaterialTableAddButton() {
    const { setIsEditing, isEditing, setSelectedMaterial } =
        useContext(MaterialTableContext);

    return (
        <button
            className='absolute right-3 top-1/2 hidden -translate-y-1/2 border bg-gray-100 p-1 lg:flex'
            onClick={() => {
                setIsEditing((prev) => !prev);
                isEditing ? setSelectedMaterial(null) : null;
            }}
        >
            {isEditing ? "취소" : "추가"}
        </button>
    );
}

function MaterialTableUpdateButton<M extends StudyMaterial | PaperMaterial>({
    data,
    docID,
}: {
    data: M;
    docID: string;
}) {
    const { setIsEditing, setSelectedMaterial, setSelectedDocId } =
        useContext(MaterialTableContext);

    return (
        <button
            className='border bg-white p-1'
            onClick={() => {
                setIsEditing(false);
                setSelectedMaterial({
                    ...data,
                });
                setSelectedDocId(docID);
                setIsEditing(true);
            }}
        >
            수정
        </button>
    );
}

function MaterialTableDeleteButton({ docID }: { docID: string }) {
    const { deleteDocument } = useContext(MaterialTableContext);
    return (
        <button
            className='border bg-white p-0.5'
            onClick={() => {
                confirm("삭제하시겠습니까?") ? deleteDocument(docID) : null;
            }}
        >
            삭제
        </button>
    );
}

function MaterialTableCancelButton() {
    const { setIsEditing, setSelectedMaterial, setSelectedIndex } =
        useContext(MaterialTableContext);

    return (
        <button
            className='border p-0.5'
            onClick={() => {
                setIsEditing(false);
                setSelectedMaterial(null);
                setSelectedIndex(0);
            }}
        >
            취소
        </button>
    );
}

function MaterialPageButton() {
    const { pageNumber, setPageNumber, materialList } =
        useContext(MaterialTableContext);
    const researchLength = Math.floor(Number(materialList?.length) / 10) + 1; // 한 페이지당 원하는 자료 수에 따라 달라지는 부분 /(원하는 자료 수)
    const maxOffset = Math.floor(researchLength / 5) * 5 + 1;
    let buttonOffset = Math.floor((Number(pageNumber) - 1) / 5) * 5 + 1;

    return (
        <div className=' m-5 flex items-center justify-center pt-4'>
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
                            <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                {buttonOffset}
                            </span>
                        ) : (
                            <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                {buttonOffset}
                            </span>
                        )}
                    </button>
                </li>
                {buttonOffset + 1 <= researchLength && (
                    <li>
                        <button
                            onClick={() => {
                                setPageNumber(buttonOffset + 1);
                            }}
                        >
                            {pageNumber == buttonOffset + 1 ? (
                                <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 1}
                                </span>
                            ) : (
                                <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 1}
                                </span>
                            )}
                        </button>
                    </li>
                )}
                {buttonOffset + 2 <= researchLength && (
                    <li>
                        <button
                            onClick={() => {
                                setPageNumber(buttonOffset + 2);
                            }}
                        >
                            {pageNumber == buttonOffset + 2 ? (
                                <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 2}
                                </span>
                            ) : (
                                <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 2}
                                </span>
                            )}
                        </button>
                    </li>
                )}
                {buttonOffset + 3 <= researchLength && (
                    <li>
                        <button
                            onClick={() => {
                                setPageNumber(buttonOffset + 3);
                            }}
                        >
                            {pageNumber == buttonOffset + 3 ? (
                                <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 3}
                                </span>
                            ) : (
                                <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 3}
                                </span>
                            )}
                        </button>
                    </li>
                )}
                {buttonOffset + 4 <= researchLength && (
                    <li>
                        <button
                            onClick={() => {
                                setPageNumber(buttonOffset + 4);
                            }}
                        >
                            {pageNumber == buttonOffset + 4 ? (
                                <span className='m-1 border border-PRIMARY_COLOR-500  bg-GRAY_COLOR-500 py-1 px-2 text-sm text-PRIMARY_COLOR-500 md:py-2 md:px-3'>
                                    {buttonOffset + 4}
                                </span>
                            ) : (
                                <span className='m-1 border border-PRIMARY_COLOR-500 bg-white py-1 px-2 text-sm text-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 md:py-2 md:px-3'>
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

export {
    MaterialPageButton,
    MaterialTableAddButton,
    MaterialTableUpdateButton,
    MaterialTableDeleteButton,
    MaterialTableCancelButton,
};
