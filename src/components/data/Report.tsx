import React, { createContext, Dispatch, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import useFirebase from "../../hooks/useFirebase";
import ReportItem from "./ReportItem";
import { Research } from "../../../typing";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "firebase/firestore";
import useAuth from "../../hooks/useAuth";
import { ReportAddButton } from "./ReportButtons";
import ReportToggle from "./ReportToggle";

interface ReportContextProps {
    researchList: QueryDocumentSnapshot<Research>[] | undefined;
    collectionRef: CollectionReference<Research>;
    collectionQuery: UseQueryResult<QuerySnapshot<Research>, FirestoreError>;
    deleteDocument: (docID: string) => void;
    isAdding: boolean;
    setIsAdding: Dispatch<React.SetStateAction<boolean>>;
}

export const ReportContext = createContext({} as ReportContextProps);

export default function Report() {
    // 참고 페이지: https://www.kice.re.kr/brochureBoard/list.do#goView
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<Research>("research", ["research"]);
    const researchList = collectionQuery.data?.docs;
    const { user } = useAuth();
    const [isAdding, setIsAdding] = useState(false);

    const value = {
        researchList,
        collectionRef,
        collectionQuery,
        deleteDocument,
        isAdding,
        setIsAdding,
    };

    return (
        <ReportContext.Provider value={value}>
            <main>
                {/* 검색 */}
                <div className='mt-5 flex h-9 items-center justify-end'>
                    <select className='h-full border pl-2 pr-7'>
                        <option>전체</option>
                        <option value='title '>제목</option>
                        <option value='content'>내용</option>
                    </select>

                    <input className='ml-6 h-full w-32 border' />
                    <MagnifyingGlassIcon className='h-full bg-PRIMARY_COLOR-500 p-1 text-white' />
                </div>

                {/* 전체 몇건 */}
                <h1 className='my-4'>
                    전체{" "}
                    <span className='ml-3 text-2xl font-bold text-PRIMARY_COLOR-500'>
                        {researchList?.length}
                    </span>{" "}
                    건
                </h1>
                {user && <ReportAddButton />}
                {isAdding ? <ReportToggle /> : null}

                {/* 게시물 */}
                <ReportItem />

                {/* 게시물 추가 버튼 */}
            </main>
        </ReportContext.Provider>
    );
}
