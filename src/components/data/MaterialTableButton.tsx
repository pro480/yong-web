import React, { useContext } from "react";
import { MaterialTableContext } from "./MaterialTable";
import { StudyMaterial, PaperMaterial } from "../../../typing";

function MaterialTableAddButton() {
    const { setIsEditing, isEditing, setSelectedMaterial } =
        useContext(MaterialTableContext);


    return (
        <button
            className='absolute right-3 top-1/2 hidden lg:flex -translate-y-1/2 border p-1 bg-gray-100'
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
    index,
}: {
    data: M;
    docID: string;
    index: number;
}) {
    const {
        setIsEditing,
        setSelectedMaterial,
        setSelectedDocId,
        setSelectedIndex,
    } = useContext(MaterialTableContext);

    return (
        <button
            className='border p-1 bg-white'
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
    const { deleteDocument } = useContext(MaterialTableContext);
    return (
        <button 
            className="border p-0.5 bg-white"
            onClick={() => deleteDocument(docID)}>
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

export {
    MaterialTableAddButton,
    MaterialTableUpdateButton,
    MaterialTableDeleteButton,
    MaterialTableCancelButton,
};
