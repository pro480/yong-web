import React, { useContext } from "react";
import { NewsTableContext } from "./NewsTable";
import { CenterNews, EventNews } from "../../../typing";

function NewsTableAddButton() {
    const { setIsEditing, isEditing, setSelectedNews } =
        useContext(NewsTableContext);

    return (
        <button
            className='absolute hidden md:flex right-3 top-1/2 -translate-y-1/2 border p-1'
            onClick={() => {
                setIsEditing((prev) => !prev);
                isEditing ? setSelectedNews(null) : null;
            }}
        >
            {isEditing ? "취소" : "추가"}
        </button>
    );
}

function NewsTableUpdateButton<N extends CenterNews | EventNews>({
    data,
    docID,
    index,
}: {
    data: N;
    docID: string;
    index: number;
}) {
    const {
        setIsEditing,
        setSelectedNews,
        setSelectedDocId,
        setSelectedIndex,
    } = useContext(NewsTableContext);

    return (
        <button
            className='border p-1'
            onClick={() => {
                setIsEditing(false);
                setSelectedNews({
                    ...data,
                });
                setSelectedDocId(docID);
                setIsEditing(true);
                setSelectedIndex(index);
            }}
        >
            수정
        </button>
    );
}

function NewsTableDeleteButton({ docID }: { docID: string }) {
    const { deleteDocument } = useContext(NewsTableContext);
    return <button onClick={() => deleteDocument(docID)}>삭제</button>;
}

function NewsTableCancelButton() {
    const { setIsEditing, setSelectedNews, setSelectedIndex } =
        useContext(NewsTableContext);
    return (
        <button
            className='border p-1'
            onClick={() => {
                setIsEditing(false);
                setSelectedNews(null);
                setSelectedIndex(0);
            }}
        >
            취소
        </button>
    );
}

export {
    NewsTableAddButton,
    NewsTableUpdateButton,
    NewsTableDeleteButton,
    NewsTableCancelButton,
};
