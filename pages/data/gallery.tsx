import React, { createContext, Dispatch, useState } from "react";
import GalleryToggle from "../../src/components/gallery/GalleryToggle";
import GallerySearch from "../../src/components/gallery/GallerySearch";
import { GalleryPost } from "../../typing";
import GalleryCard from "../../src/components/gallery/GalleryCard";
import useAuth from "../../src/hooks/useAuth";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";
import { UseQueryResult } from "react-query";
import { GalleryAddButton } from "../../src/components/gallery/GalleryButton";


interface Props<T> {
    postList: QueryDocumentSnapshot<T>[] | undefined;
    collectionRef: CollectionReference<T>;
    collectionQuery: UseQueryResult<QuerySnapshot<T>, FirestoreError>;
    isBanner: boolean;
    deleteDocument: (docID: string) => void;
}

interface GalleryContextProps<T> {
    toggleOpen: boolean;
    setToggleOpen: Dispatch<React.SetStateAction<boolean>>;
    collectionRef: CollectionReference<T>;
    collectionQuery: UseQueryResult<QuerySnapshot<T>, FirestoreError>;
    selectedPost: T | null;
    setSelectedPost: Dispatch<React.SetStateAction<T | null>>;
    selectedDocId: string | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
    deleteDocument: (docID: string) => void;
}

export const GalleryContext = createContext<GalleryContextProps<GalleryPost>>(
    {} as GalleryContextProps<GalleryPost>
);

function Gallery<T extends GalleryPost>({
    postList,
}: Props<T>) {
    const { user } = useAuth();
    const [toggleOpen, setToggleOpen] = useState(false);
    const value ={
        toggleOpen,
        setToggleOpen
    }

    return (
        <GalleryContext.Provider value={value}>
            <main>
                <div className='flex justify-end space-x-5'>
                    {/* 게시물 추가 버튼 */}
                    {user && <GalleryAddButton
                        setToggleOpen='true'
                    />}
                    {/*검색창*/}
                    <GallerySearch />
                </div>
                {toggleOpen && <GalleryToggle />}
                {postList?.map((docSnapshot)=>{
                    const post = docSnapshot.data()
                    return(
                        <div>
                            <GalleryCard
                                isEditable={true}
                                post ={post}
                                documentId={docSnapshot.id}
                            />

                        </div>

                    )
                })}

                {/* 게시물 추가 창 토글 */}
            </main>

        </GalleryContext.Provider>
    );
}

export default Gallery;
