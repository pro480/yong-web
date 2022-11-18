import React, { createContext, Dispatch, useState } from "react";
import { News, CenterNews, EventNews, Thesis } from "../../../typing";
import useFirebase from "../../hooks/useFirebase";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";

import ThesisTableHeader from "./ThesisTableHeader";
import ThesisToggle from "./ThesisToggle";
import { ThesisPageButton } from "./ThesisButton";
import ThesisTableBody from "./ThesisTableBody";

interface ThesisTableContextProps {
    collectionRef: CollectionReference<Thesis>;
    collectionQuery: UseQueryResult<QuerySnapshot<Thesis>, FirestoreError>;
    deleteDocument: (docID: string) => void;
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    selectedThesis: Thesis | null;
    setSelectedThesis: Dispatch<React.SetStateAction<Thesis | null>>;
    selectedDocId: string;
    setSelectedDocId: Dispatch<React.SetStateAction<string>>;
    thesisList: QueryDocumentSnapshot<Thesis>[] | undefined;
    pageNumber: number | null;
    setPageNumber: Dispatch<React.SetStateAction<number | null>>;
}

export const ThesisTableContext = createContext({} as ThesisTableContextProps);

export default function ThesisTable() {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<Thesis>("thesis", ["thesis"]);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedThesis, setSelectedThesis] = useState<Thesis | null>(null);
    const [selectedDocId, setSelectedDocId] = useState<string>("");

    const thesisList = collectionQuery.data?.docs;
    const [pageNumber, setPageNumber] = useState<number | null>(1);

    const value = {
        collectionRef,
        collectionQuery,
        deleteDocument,
        isEditing,
        setIsEditing,
        selectedThesis,
        setSelectedThesis,
        selectedDocId,
        setSelectedDocId,
        pageNumber,
        setPageNumber,
        thesisList,
    };

    return (
        <ThesisTableContext.Provider value={value}>
            <table className='w-full table-auto border-t border-t-black'>
                <ThesisTableHeader />
                <ThesisTableBody />
            </table>
            {isEditing && <ThesisToggle />}
            <ThesisPageButton />
        </ThesisTableContext.Provider>
    );
}
