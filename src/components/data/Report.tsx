import React, { createContext, Dispatch, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import useFirebase from "../../hooks/useFirebase";
import ReportItem from "./ReportItem";
import { ResearchReport } from "../../../typing";
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
    researchList: QueryDocumentSnapshot<ResearchReport>[] | undefined;
    collectionRef: CollectionReference<ResearchReport>;
    collectionQuery: UseQueryResult<
        QuerySnapshot<ResearchReport>,
        FirestoreError
    >;
    deleteDocument: (docID: string) => void;
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    selectedResearch: ResearchReport | null;
    setSelectedResearch: Dispatch<React.SetStateAction<ResearchReport | null>>;
    selectedDocId: string | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
}

export const ReportContext = createContext({} as ReportContextProps);

export default function Report() {
    // 참고 페이지: https://www.kice.re.kr/brochureBoard/list.do#goView
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<ResearchReport>("researchReport", ["researchReport"]);
    const researchList = collectionQuery.data?.docs;
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedResearch, setSelectedResearch] =
        useState<ResearchReport | null>(null);
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

    const value = {
        researchList,
        collectionRef,
        collectionQuery,
        deleteDocument,
        isEditing,
        setIsEditing,
        selectedResearch,
        setSelectedResearch,
        selectedDocId,
        setSelectedDocId,
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
                {user &&
                    `연구 보고서 이미지는 1 : 1.41 정도 비율(A4용지 비율)의 이미지를 삽입하시는걸
                추천 드립니다.`}
                {/* 게시물 추가 버튼 */}
                {user && <ReportAddButton />}
                {isEditing ? <ReportToggle /> : null}
                {/* 게시물 */}
                <ReportItem />
            </main>
        </ReportContext.Provider>
    );
}
