import React, {
    createContext,
    Dispatch,
    useLayoutEffect,
    useState,
} from "react";
import { Card, GalleryCard } from "../../../typing";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";
import useAuth from "../../hooks/useAuth";
import useFirebase from "../../hooks/useFirebase";
import { GalleryAddButton } from "./GalleryButton";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import GalleryToggle from "./GalleryToggle";
import GalleryCardGrid from "./GalleryCardGrid";

interface Props {
    card: Card;
}

interface GalleryContextProps {
    isEditing: boolean; //게시물 수정버튼 눌렀는 지 확인
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    collectionQuery: UseQueryResult<QuerySnapshot<GalleryCard>, FirestoreError>;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>; //게시물의 document ID
    selectedDocId: string | null;
    collectionRef: CollectionReference<GalleryCard>;
    deleteDocument: (docID: string) => void;
    selectedIndex: number;
    setSelectedIndex: Dispatch<React.SetStateAction<number>>;
    selectedCard: GalleryCard | null;
    setSelectedCard: Dispatch<React.SetStateAction<GalleryCard | null>>;
}

export const GalleryContext = createContext({} as GalleryContextProps);

function GalleryMain({ card }: Props) {
    const { user } = useAuth();
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<GalleryCard>("갤러리 데이터", ["갤러리 데이터"]);
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [galleryList, setGalleryList] = useState<
        QueryDocumentSnapshot<GalleryCard>[] | undefined
    >(collectionQuery.data?.docs);
    const [selectedCard, setSelectedCard] = useState<GalleryCard | null>(null);

    useLayoutEffect(() => {
        const newGalleryList = collectionQuery.data?.docs.filter(
            (docSnapshot) => docSnapshot.data().card === card
        );
        setGalleryList(newGalleryList);
    }, [collectionQuery.isSuccess]);

    const value = {
        isEditing,
        setIsEditing,
        collectionQuery,
        collectionRef,
        deleteDocument,
        selectedDocId,
        setSelectedDocId,
        selectedIndex,
        setSelectedIndex,
        selectedCard,
        setSelectedCard,
    };

    if (collectionQuery.isLoading) {
        return <>로딩</>;
    }

    return (
        <GalleryContext.Provider value={value}>
            <div className='flex w-full flex-col space-y-8'>
                {/* 헤더 (검색창 + 추가 버튼) */}
                <div className='relative mt-5 flex h-9 items-center justify-end space-x-5'>
                    {/*추가 버튼*/}
                    {user && <GalleryAddButton />}
                    {/* 검색 창 */}
                    <select className='h-full border pl-2 pr-7'>
                        <option>전체</option>
                        <option value='title '>제목</option>
                        <option value='content'>내용</option>
                    </select>
                    <input className='ml-6 h-full w-32 border' />
                    <MagnifyingGlassIcon className='h-full bg-black p-1 text-white' />
                </div>
                {isEditing && <GalleryToggle card={card} />}
                <div>
                    <GalleryCardGrid card={card} galleryList={galleryList} />
                </div>
            </div>
        </GalleryContext.Provider>
    );
}

export default GalleryMain;
