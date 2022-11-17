import React, {
    createContext,
    Dispatch,
    useLayoutEffect,
    useState,
} from "react";
import { Thesis } from "../../../typing";
import MaterialTableHeader from "./MaterialTableHeader";
import MaterialTableBody from "./MaterialTableBody";
import MaterialTableToggle from "./MaterialTableToggle";
import useFirebase from "../../hooks/useFirebase";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";
import useAuth from "../../hooks/useAuth";
import { ThesisPageButton, ThesisAddButton } from "./ThesisButton";
import ThesisToggle from "./ThesisToggle";
import ThesisItem from "./ThesisItem";

interface ThesisContextProps {
    thesisList: QueryDocumentSnapshot<Thesis>[] | undefined;
    collectionRef: CollectionReference<Thesis>;
    collectionQuery: UseQueryResult<QuerySnapshot<Thesis>, FirestoreError>;
    deleteDocument: (docID: string) => void;
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    selectedThesis: Thesis | null;
    setSelectedThesis: Dispatch<React.SetStateAction<Thesis | null>>;
    selectedDocId: string;
    setSelectedDocId: Dispatch<React.SetStateAction<string>>;
    pageNumber: number | null;
    setPageNumber: Dispatch<React.SetStateAction<number | null>>;
}

export const ThesisContext = createContext({} as ThesisContextProps);

export default function ThesisMain() {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<Thesis>("thesis", ["thesis"]);
    const thesisList = collectionQuery.data?.docs;
    const [isEditing, setIsEditing] = useState(false);
    const [selectedThesis, setSelectedThesis] = useState<Thesis | null>(null);
    const [selectedDocId, setSelectedDocId] = useState<string>("");
    const [pageNumber, setPageNumber] = useState<number | null>(1);
    const { user } = useAuth();

    const value = {
        thesisList,
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
    };

    return (
        <ThesisContext.Provider value={value}>
            {/* 전체 몇건 */}
            <h1 className='pb-5 pt-4 text-sm md:text-base'>
                전체{" "}
                <span className='ml-3 text-lg font-bold text-PRIMARY_COLOR-500 md:text-2xl'>
                    {thesisList?.length}
                </span>{" "}
                건
            </h1>
            {user && <ThesisAddButton />}
            {isEditing && <ThesisToggle />}

            <ThesisItem />

            <ThesisPageButton />
        </ThesisContext.Provider>
    );
}
