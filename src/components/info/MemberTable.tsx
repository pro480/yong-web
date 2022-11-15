import React, {
    createContext,
    Dispatch,
    useLayoutEffect,
    useState,
} from "react";
import { ExternalMember, Organization } from "../../../typing";
import MemberTableToggle from "./MemberTableToggle";
import useFirebase from "../../hooks/useFirebase";
import MemberTableHeader from "./MemberTableHeader";
import MemberTableBody from "./MemberTableBody";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError, Query,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";

interface Props {
    organization: Organization;
}

interface MemberTableContextProps {
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    setSelectedMember: Dispatch<React.SetStateAction<ExternalMember | null>>;
    collectionQuery: UseQueryResult<
        QuerySnapshot<ExternalMember>,
        FirestoreError
    >;
    selectedMember: ExternalMember | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
    selectedDocId: string | null;
    collectionRef: CollectionReference<ExternalMember> | Query<ExternalMember>;
    deleteDocument: (docID: string) => void;
    selectedIndex: number;
    setSelectedIndex: Dispatch<React.SetStateAction<number>>;
}

export const MemberTableContext = createContext({} as MemberTableContextProps);

function MemberTable({ organization }: Props) {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<ExternalMember>("externalMembers", ["externalMembers"]);
    const [selectedMember, setSelectedMember] = useState<ExternalMember | null>(
        null
    );
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [memberList, setMemberList] = useState<
        QueryDocumentSnapshot<ExternalMember>[] | undefined
    >(collectionQuery.data?.docs);

    useLayoutEffect(() => {
        const newMemberList = collectionQuery.data?.docs.filter(
            (docSnapshot) => docSnapshot.data().organization === organization
        );
        setMemberList(newMemberList);
    }, [collectionQuery.isSuccess]);

    const value = {
        isEditing,
        setIsEditing,
        selectedMember,
        setSelectedMember,
        collectionQuery,
        collectionRef,
        deleteDocument,
        selectedDocId,
        setSelectedDocId,
        selectedIndex,
        setSelectedIndex,
    };

    if (collectionQuery.isLoading) {
        return <>로딩</>;
    }

    return (
        <MemberTableContext.Provider value={value}>
            <table className='w-full table-auto border-t border-t-black'>
                <MemberTableHeader organization={organization} />
                <MemberTableBody
                    organization={organization}
                    memberList={memberList}
                />
            </table>
            {isEditing && <MemberTableToggle organization={organization} />}
        </MemberTableContext.Provider>
    );
}

export default MemberTable;
