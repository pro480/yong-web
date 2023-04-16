import React, { useContext } from "react";
import { GalleryCard } from "../../../typing";
import { GalleryContext } from "./GalleryMain";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

function GalleryAddButton() {
    const { setIsEditing, isEditing, setSelectedCard } =
        useContext(GalleryContext);

    return (
        <button
            className='hidden h-full w-16 items-center justify-center border bg-PRIMARY_COLOR-100 md:flex'
            onClick={() => {
                setIsEditing((prev) => !prev);
                isEditing ? setSelectedCard(null) : null;
            }}
        >
            {isEditing ? "취소" : "추가"}
        </button>
    );
}

function GalleryUpdateButton({
    data,
    docID,
}: {
    data: GalleryCard;
    docID: string;
}) {
    const { setIsEditing, setSelectedDocId, setSelectedCard } =
        useContext(GalleryContext);

    return (
        <button
            className='h-full'
            onClick={() => {
                setIsEditing(false);
                setSelectedCard({
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

function GalleryDeleteButton({ docID }: { docID: string }) {
    const { deleteDocument } = useContext(GalleryContext);
    return <button onClick={() => deleteDocument(docID)}>삭제</button>;
}

function GalleryCancelButton() {
    const { setIsEditing, setSelectedCard, setSelectedIndex } =
        useContext(GalleryContext);
    return (
        <button
            className='mr-5 w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1'
            onClick={() => {
                setIsEditing(false);
                setSelectedCard(null);
                setSelectedIndex(0);
            }}
        >
            취소
        </button>
    );
}

function GallaryPageButton() {
    const { pageNumber, setPageNumber, galleryList } =
        useContext(GalleryContext);
    const galleryLength = Math.floor(Number(galleryList?.length) / 9) + 1; // 한 페이지당 원하는 자료 수에 따라 달라지는 부분 /(원하는 자료 수)
    const maxOffset = Math.floor(galleryLength / 5) * 5 + 1;
    let buttonOffset = Math.floor((Number(pageNumber) - 1) / 5) * 5 + 1;

    return (
        <div className=' m-5 flex items-center justify-center pt-20'>
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
                {buttonOffset + 1 <= galleryLength && (
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
                )}
                {buttonOffset + 2 <= galleryLength && (
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
                )}
                {buttonOffset + 3 <= galleryLength && (
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
                )}
                {buttonOffset + 4 <= galleryLength && (
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
                )}
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
                            setPageNumber(galleryLength);
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
    GallaryPageButton,
    GalleryAddButton,
    GalleryUpdateButton,
    GalleryDeleteButton,
    GalleryCancelButton,
};
