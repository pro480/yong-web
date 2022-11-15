import React, { useContext } from "react";
import { GalleryCard } from "../../../typing";
import { GalleryContext } from "./GalleryMain";

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

export {
    GalleryAddButton,
    GalleryUpdateButton,
    GalleryDeleteButton,
    GalleryCancelButton,
};
