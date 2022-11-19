import React, { createContext, Dispatch, useState } from "react";
import NameCard from "../info/NameCard";
import useAuth from "../../hooks/useAuth";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";
import { UseQueryResult } from "react-query";
import { GraduateMember, InternalMember, Team } from "../../../typing";

import MemberToggle from "../info/MemberToggle";
import { MemberAddButton } from "../info/MemberButton";

interface Props<T> {
    memberList: QueryDocumentSnapshot<T>[] | undefined;
    collectionRef: CollectionReference<T>;
    collectionQuery: UseQueryResult<QuerySnapshot<T>, FirestoreError>;
    isBig: boolean;
    deleteDocument: (docID: string) => void;
    team: Team;
}

interface MemberListContextProps<T> {
    modalOpen: boolean;
    setModalOpen: Dispatch<React.SetStateAction<boolean>>;
    selectedMember: T | null;
    collectionRef: CollectionReference<T>;
    collectionQuery: UseQueryResult<QuerySnapshot<T>, FirestoreError>;
    selectedDocId: string | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
    setSelectedMember: Dispatch<React.SetStateAction<T | null>>;
    deleteDocument: (docID: string) => void;
}

export const MemberListContext = createContext<
    MemberListContextProps<InternalMember | GraduateMember>
>({} as MemberListContextProps<InternalMember | GraduateMember>);

function MemberList<T extends InternalMember | GraduateMember>({
    memberList,
    collectionRef,
    collectionQuery,
    isBig,
    team,
    deleteDocument,
}: Props<T>) {
    const { user } = useAuth();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<
        InternalMember | GraduateMember | null
    >(null);
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

    const value = {
        modalOpen,
        setModalOpen,
        selectedMember,
        collectionRef,
        collectionQuery,
        selectedDocId,
        setSelectedMember,
        setSelectedDocId,
        deleteDocument,
    };

    return (
        <MemberListContext.Provider value={value}>
            {user && <MemberAddButton />}
            <div className='mt-5 mb-10 w-full'>
                <section
                    className={`xs:w-full ${
                        isBig
                            ? ""
                            : "grid grid-cols-2 gap-y-6 gap-x-12 px-2 sm:gap-x-2"
                    }
                    `}
                >
                    {memberList?.map((docSnapshot) => {
                        const member = docSnapshot.data();
                        return (
                            <div
                                key={docSnapshot.id}
                                className={` h-fit xs:p-2 ${isBig ? "" : ""}`}
                            >
                                <NameCard
                                    isEditable={true}
                                    isBig={isBig}
                                    member={member}
                                    documentID={docSnapshot.id}
                                />
                            </div>
                        );
                    })}
                </section>
                {modalOpen && <MemberToggle team={team} />}
            </div>
        </MemberListContext.Provider>
    );
}

export default MemberList;
