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
import { UNSUPPORTED_FEATURES } from "pdfjs-dist";
import unknown = UNSUPPORTED_FEATURES.unknown;
import MemberToggle from "../info/MemberToggle";
import useFirebase from "../../hooks/useFirebase";
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
            <div className='relative mt-5 mb-10 w-full'>
                <section
                    className={`flex w-full flex-wrap ${
                        isBig
                            ? ""
                            : "grid grid-cols-1 gap-y-6 gap-x-4 px-2 md:px-7 lg:grid-cols-2 xl:gap-x-10"
                    }
                    `}
                >
                    {memberList?.map((docSnapshot) => {
                        const member = docSnapshot.data();
                        return (
                            <div
                                key={docSnapshot.id}
                                className={`${
                                    isBig
                                        ? "h-fit w-full py-10"
                                        : "h-fit"
                                } h-80 p-2`}
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
