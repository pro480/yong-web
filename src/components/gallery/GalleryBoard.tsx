import React, { createContext, Dispatch, useState } from "react";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";


import useFirebase from "../../hooks/useFirebase";
import GalleryHeader from "./GalleryHeader";
import GalleryToggle from "./GalleryToggle";
import GalleryBody from "./GalleryBody";
import {GalleryPost} from "./GalleryCard";

interface GalleryBoardContextProps {
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    collectionQuery: UseQueryResult<QuerySnapshot<GalleryPost>, FirestoreError>;
    selectedDocId: string | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
    collectionRef: CollectionReference<GalleryPost>;
    deleteDocument: (docID: string) => void;
    toggleOpen: boolean;
    setToggleOpen: Dispatch<React.SetStateAction<boolean>>;

    selectedPost: GalleryPost | null;
    setSelectedPost: Dispatch<React.SetStateAction<GalleryPost | null>>;
}

export const GalleryBoardContext = createContext(
    {} as GalleryBoardContextProps
);

function GalleryBoard() {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<GalleryPost>("galleryPost", ["galleryPost"]);
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [postList, setPostList] = useState<
        QueryDocumentSnapshot<GalleryPost>[] | undefined
    >(collectionQuery.data?.docs);
    const [toggleOpen, setToggleOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<GalleryPost | null>(null);

    const value = {
        isEditing,
        setIsEditing,
        collectionRef,
        collectionQuery,
        deleteDocument,
        selectedDocId,
        setSelectedDocId,
        toggleOpen,
        setToggleOpen,
        selectedPost,
        setSelectedPost,
    };

    return (
        <GalleryBoardContext.Provider value={value}>
            <div>
                <main>
                    <GalleryHeader />
                    {toggleOpen && <GalleryToggle />}
                    <div>
                        <GalleryBody postList={postList} />
                    </div>
                </main>
            </div>
        </GalleryBoardContext.Provider>
    );
}

export default GalleryBoard;
