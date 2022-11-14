import React, { createContext, Dispatch, useState } from "react";
import useFirebase from "../../src/hooks/useFirebase";
import { QNA } from "../../typing";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "firebase/firestore";
import SubmitForm from "../../src/components/notice/SubmitForm";
import QnaRow from "../../src/components/notice/QnaRow";
import { UseQueryResult } from "react-query";
import { QnaPageButton } from "../../src/components/notice/QnaButton";

interface QnaContextProps {
    qnaList: QueryDocumentSnapshot<QNA>[] | undefined;
    collectionRef: CollectionReference<QNA>;
    collectionQuery: UseQueryResult<QuerySnapshot<QNA>, FirestoreError>;
    deleteDocument: (docID: string) => void;
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    selectedQna: QNA | null;
    setSelectedQna: Dispatch<React.SetStateAction<QNA | null>>;
    pageNumber: number | null;
    setPageNumber: Dispatch<React.SetStateAction<number | null>>;
}

export const QnaContext = createContext({} as QnaContextProps);

function Qna() {
    const { collectionRef, collectionQuery, deleteDocument } = useFirebase<QNA>(
        "qna",
        ["qna"]
    );
    const qnaList = collectionQuery.data?.docs;
    const [isEditing, setIsEditing] = useState(false);
    const [selectedQna, setSelectedQna] = useState<QNA | null>(null);
    const [pageNumber, setPageNumber] = useState<number | null>(1);

    const value = {
        qnaList,
        collectionRef,
        collectionQuery,
        deleteDocument,
        isEditing,
        setIsEditing,
        selectedQna,
        setSelectedQna,
        pageNumber,
        setPageNumber,
    };

    return (
        <QnaContext.Provider value={value}>
            <div>
                {/*개수*/}
                <h1 className='mt-4 mb-10'>
                    {"전체 "}
                    <span className='ml-3 text-2xl font-bold text-PRIMARY_COLOR-500'>
                        {qnaList?.length}
                    </span>
                    {" 건"}
                </h1>
                {/*질문 리스트*/}
                <QnaRow />

                {/* 글쓰기 */}
                <SubmitForm />
            </div>

            {/*페이지 수*/}
            <QnaPageButton />
        </QnaContext.Provider>
    );
}

export default Qna;
