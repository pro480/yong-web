import React, { useContext } from "react";
import {
    GraduateMember,
    InternalMember,
} from "../../../typing";
import { MemberListContext } from "../common/MemberList";

function MemberAddButton() {
    const { modalOpen, setModalOpen } = useContext(MemberListContext);

    return (
        <button
            className='w-16 border bg-PRIMARY_COLOR-100 text-white'
            onClick={() => setModalOpen((prev) => !prev)}
        >
            {modalOpen ? "취소" : "추가"}
        </button>
    );
}

function MemberUpdateButton<T extends InternalMember | GraduateMember>({
    member,
    documentID,
}: {
    member: T;
    documentID: string | null;
}) {
    const { setSelectedMember, setSelectedDocId, setModalOpen } =
        useContext(MemberListContext);

    return (
        <button
            className='rounded-sm border bg-SUB_COLOR-400'
            onClick={() => {
                setSelectedMember(member);
                setSelectedDocId(documentID);
                setModalOpen(true);
            }}
        >
            수정
        </button>
    );
}

function MemberDeleteButton({ documentID }: { documentID: string }) {
    const { deleteDocument } = useContext(MemberListContext);
    return (
        <button
            className='rounded-sm border'
            onClick={() => deleteDocument(documentID)}
        >
            삭제
        </button>
    );
}

function MemberCancelButton() {
    const { setModalOpen, setSelectedMember } = useContext(MemberListContext);
    return (
        <button
            onClick={() => {
                setModalOpen(false);
                setSelectedMember(null);
            }}
            className='w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1'
        >
            취소
        </button>
    );
}

export {
    MemberAddButton,
    MemberUpdateButton,
    MemberDeleteButton,
    MemberCancelButton,
};
