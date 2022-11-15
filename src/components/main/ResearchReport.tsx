import React, { createContext } from "react";

import { PlusIcon } from "@heroicons/react/24/outline";
import ReportCard from "./ReportCard";
import Link from "next/link";
import useFirebase from "../../hooks/useFirebase";
import { ResearchReport } from "../../../typing";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "firebase/firestore";
import { UseQueryResult } from "react-query";

interface ReportContextProps {
    researchList: QueryDocumentSnapshot<ResearchReport>[] | undefined;
    collectionRef: CollectionReference<ResearchReport>;
    collectionQuery: UseQueryResult<
        QuerySnapshot<ResearchReport>,
        FirestoreError
    >;
    deleteDocument: (docID: string) => void;
}

export const ReportContext = createContext({} as ReportContextProps);

function ResearchReport() {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<ResearchReport>("researchReport", ["researchReport"]);
    const researchList = collectionQuery.data?.docs;

    const value = {
        researchList,
        collectionRef,
        collectionQuery,
        deleteDocument,
    };

    return (
        <ReportContext.Provider value={value}>
            <div className=' -mt-[5.5%] flex h-[250px]  w-[100%] flex-col items-center justify-center xs:h-[300px] md:h-[500px] lg:h-[650px] desktop:h-[800px]'>
                <div className=' relative flex  h-full w-4/5 flex-col gap-y-0 bg-white px-4 pt-1 pb-4 md:gap-y-8 md:px-6 md:pt-1.5 md:pb-7 lg:px-8 lg:pt-3 lg:pb-12 desktop:px-16 desktop:pt-6 desktop:pb-20'>
                    <h1 className='mb-2 flex h-[50px] items-center text-lg font-semibold xs:h-[60px] xs:text-xl md:h-[5%] md:text-2xl lg:text-3xl  desktop:text-4xl'>
                        <span className='text-PRIMARY_COLOR-600'>
                            최신 연구
                        </span>
                        &nbsp;&nbsp;보고서
                        <Link href='/data/paper'>
                            <div className='invisible absolute right-[6%] float-right flex cursor-pointer md:visible md:gap-x-2 md:text-base lg:gap-x-3 lg:text-lg desktop:gap-x-4 desktop:text-xl'>
                                자세히 보러 가기
                                <PlusIcon className='visible aspect-1/1 w-[18px] self-center rounded-full border border-PRIMARY_COLOR-500 p-1 xs:w-[20px] md:w-[22px] lg:w-[24px] desktop:w-[26px]' />
                            </div>
                        </Link>
                    </h1>
                    <div className='flex h-[200px] flex-1 flex-col justify-around  xs:h-[24opx] md:h-[400px] md:flex-row desktop:h-[640px] '>
                        <ReportCard />
                    </div>
                </div>
            </div>
        </ReportContext.Provider>
    );
}

export default ResearchReport;
