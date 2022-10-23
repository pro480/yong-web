import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { MemberTableContext } from "./MemberTable";
import { ExternalMember } from "../../../typing";

function MemberTableAddButton() {
    const { setIsEditing, isEditing, setSelectedMember } =
        useContext(MemberTableContext);

    return (
        <button
            className='absolute right-3 top-1/2 -translate-y-1/2 border p-1'
            onClick={() => {
                setIsEditing((prev) => !prev);
                isEditing ? setSelectedMember(null) : null;
            }}
        >
            {isEditing ? "취소" : "추가"}
        </button>
    );
}

function MemberTableUpdateButton({
    data,
    docID,
    index,
}: {
    data: ExternalMember;
    docID: string;
    index: number;
}) {
    const {
        setIsEditing,
        setSelectedMember,
        setSelectedDocId,
        setSelectedIndex,
    } = useContext(MemberTableContext);

    return (
        <button
            className='border p-1'
            onClick={() => {
                setIsEditing(false);
                setSelectedMember({
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

function MemberTableDeleteButton({ docID }: { docID: string }) {
    const { deleteDocument } = useContext(MemberTableContext);
    return <button onClick={() => deleteDocument(docID)}>삭제</button>;
}

function MemberTableCancelButton() {
    const { setIsEditing, setSelectedMember, setSelectedIndex } =
        useContext(MemberTableContext);
    return (
        <button
            className='border p-1'
            onClick={() => {
                setIsEditing(false);
                setSelectedMember(null);
                setSelectedIndex(0);
            }}
        >
            취소
        </button>
    );
}

export {
    MemberTableAddButton,
    MemberTableUpdateButton,
    MemberTableDeleteButton,
    MemberTableCancelButton,
};
