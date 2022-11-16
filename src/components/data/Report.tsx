import React, { createContext, Dispatch, useState } from "react";
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
import { ReportAddButton, ReportPageButton } from "./ReportButtons";
import ReportToggle from "./ReportToggle";
import {Query} from "@firebase/firestore";

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
    pageNumber: number | null;
    setPageNumber: Dispatch<React.SetStateAction<number | null>>;
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
    const [pageNumber, setPageNumber] = useState<number | null>(1);

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
        pageNumber,
        setPageNumber,
    };

    return (
        <ReportContext.Provider value={value}>
            <main>
                {/* 전체 몇건 */}
                {/* <h1 className='pb-5 pt-14'>
                    전체{" "}
                    <span className='ml-3 text-2xl font-bold text-PRIMARY_COLOR-500'>
                        {researchList?.length}
                    </span>{" "}
                    건
                </h1> */}
                {user &&
                    `연구 보고서 이미지는 1 : 1.41 정도 비율(A4용지 비율)의 이미지를 삽입하시는걸
                추천 드립니다.`}
                {/* 게시물 추가 버튼 */}
                {user && <ReportAddButton />}
                {isEditing ? <ReportToggle /> : null}
                {/* 게시물 */}
                <ReportItem />
                <ReportPageButton />
            </main>
        </ReportContext.Provider>
    );
}
