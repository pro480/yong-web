import React, { useContext } from "react";
import { StudyMaterialTableContext } from "./StudyMaterialTable";
import { StudyMaterial } from "../../../typing";

function MaterialTableAddButton() {
    const { setIsEditing, isEditing, setSelectedMaterial } = useContext(
        StudyMaterialTableContext
    );

    return (
        <button
            className='absolute right-3 top-1/2 hidden -translate-y-1/2 border p-1 md:flex'
            onClick={() => {
                setIsEditing((prev) => !prev);
                isEditing ? setSelectedMaterial(null) : null;
            }}
        >
            {isEditing ? "취소" : "추가"}
        </button>
    );
}

function MaterialTableUpdateButton({
    data,
    docID,
    index,
}: {
    data: StudyMaterial;
    docID: string;
    index: number;
}) {
    const {
        setIsEditing,
        setSelectedMaterial,
        setSelectedDocId,
        setSelectedIndex,
    } = useContext(StudyMaterialTableContext);

    return (
        <button
            className='border p-1'
            onClick={() => {
                setIsEditing(false);
                setSelectedMaterial({
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

function MaterialTableDeleteButton({ docID }: { docID: string }) {
    const { deleteDocument } = useContext(StudyMaterialTableContext);
    return <button onClick={() => deleteDocument(docID)}>삭제</button>;
}

function MaterialTableCancelButton() {
    const { setIsEditing, setSelectedMaterial, setSelectedIndex } = useContext(
        StudyMaterialTableContext
    );
    return (
        <button
            className='border p-1'
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

export {
    MaterialTableAddButton,
    MaterialTableUpdateButton,
    MaterialTableDeleteButton,
    MaterialTableCancelButton,
};
