import React, {
    createContext,
    Dispatch,
    useLayoutEffect,
    useState,
} from "react";
import { News, CenterNews, EventNews } from "../../../typing";
import NewsTableHeader from "./NewsTableHeader";
import NewsTableBody from "./NewsTableBody";
import NewsTableToggle from "./NewsTableToggle";
import useFirebase from "../../hooks/useFirebase";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";

interface Props<N> {
    news: News;
}

interface NewsTableContextProps<N> {
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    selectedNews: N | null;
    collectionRef: CollectionReference<N>;
    collectionQuery: UseQueryResult<QuerySnapshot<N>, FirestoreError>;
    selectedDocId: string | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
    setSelectedNews: Dispatch<React.SetStateAction<N | null>>;
    deleteDocument: (docID: string) => void;
    selectedIndex: number;
    setSelectedIndex: Dispatch<React.SetStateAction<number>>;
}

export const NewsTableContext = createContext<
    NewsTableContextProps<CenterNews | EventNews>
>({} as NewsTableContextProps<CenterNews | EventNews>);

function NewsTable<N extends CenterNews | EventNews>({ news }: Props<N>) {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<CenterNews | EventNews>(news, [news]);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedNews, setSelectedNews] = useState<
        CenterNews | EventNews | null
    >(null);
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [newsList, setNewsList] = useState<
        QueryDocumentSnapshot<CenterNews | EventNews>[] | undefined
    >(collectionQuery.data?.docs);

    useLayoutEffect(() => {
        const newnewsList = collectionQuery.data?.docs.filter(
            (docSnapshot) => docSnapshot.data().news = news
        );
        setNewsList(newnewsList);
    }, [collectionQuery.isSuccess]);

    const value = {
        isEditing,
        setIsEditing,
        selectedNews,
        collectionRef,
        collectionQuery,
        selectedDocId,
        setSelectedNews,
        setSelectedDocId,
        deleteDocument,
        selectedIndex,
        setSelectedIndex,
    };

    return (
        <NewsTableContext.Provider value={value}>
            <table className='w-full table-auto border-t border-t-black'>
                <NewsTableHeader news={news} />
                <NewsTableBody
                    news={news}
                    newsList={newsList}
                />
            </table>
            {isEditing && <NewsTableToggle news={news} />}
        </NewsTableContext.Provider>
    );
}

export default NewsTable;