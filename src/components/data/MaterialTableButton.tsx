import React, { useContext } from "react";
import { MaterialTableContext } from "./MaterialTable";
import { StudyMaterial, PaperMaterial } from "../../../typing";

function MaterialTableAddButton() {
<<<<<<< HEAD:src/components/data/MaterialTableButton.tsx
    const { setIsEditing, isEditing, setSelectedMaterial } =
        useContext(MaterialTableContext);
=======
    const { setIsEditing, isEditing, setSelectedMaterial } = useContext(
        StudyMaterialTableContext
    );
>>>>>>> main:src/components/data/StudyMaterialTableButton.tsx

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
    const { deleteDocument } = useContext(MaterialTableContext);
    return <button onClick={() => deleteDocument(docID)}>삭제</button>;
}

function MaterialTableCancelButton() {
<<<<<<< HEAD:src/components/data/MaterialTableButton.tsx
    const { setIsEditing, setSelectedMaterial, setSelectedIndex } =
        useContext(MaterialTableContext);
=======
    const { setIsEditing, setSelectedMaterial, setSelectedIndex } = useContext(
        StudyMaterialTableContext
    );
>>>>>>> main:src/components/data/StudyMaterialTableButton.tsx
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
