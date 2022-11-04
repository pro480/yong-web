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

interface QnaContextProps {
    qnaList: QueryDocumentSnapshot<QNA>[] | undefined;
    collectionRef: CollectionReference<QNA>;
    collectionQuery: UseQueryResult<QuerySnapshot<QNA>, FirestoreError>;
    deleteDocument: (docID: string) => void;
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    selectedQna: QNA | null;
    setSelectedQna: Dispatch<React.SetStateAction<QNA | null>>;
}

export const QnaContext = createContext({} as QnaContextProps);

function Qna() {
    const { collectionRef, collectionQuery, deleteDocument } = useFirebase<QNA>(
        "qna",
        ["qna"]
    );
    const qnaList = collectionQuery.data?.docs;
    //const asc = qnaList?.sort((a, b) => a.data().createAt - b.data().createAt);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedQna, setSelectedQna] = useState<QNA | null>(null);

    const value = {
        qnaList,
        collectionRef,
        collectionQuery,
        deleteDocument,
        isEditing,
        setIsEditing,
        selectedQna,
        setSelectedQna,
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
            {/* <div className=' m-5 flex items-center justify-center'>
                <ul className='inline-flex items-center -space-x-px '>
                    <li>
                        <a
                            href='#'
                            className='text-PRIMARY_FONT_COLOR m-1 block border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            <ChevronDoubleLeftIcon className='h-3 w-3' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='#1'
                            aria-current='page'
                            className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href='#6'
                            className='text-PRIMARY_FONT_COLOR m-1 block border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            <ChevronDoubleRightIcon className='h-3 w-3' />
                        </a>
                    </li>
                </ul>
            </div> */}
        </QnaContext.Provider>
    );
}

export default Qna;
