import React, { createContext } from "react";

import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    NewspaperIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";
import ReportCard from "./ReportCard";
import Link from "next/link";
import { limit, orderBy, query } from "firebase/firestore";
import { collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { ResearchReport } from "../../../typing";

function ResearchReport() {
    const collectionRef = query(
        collection(db, "researchReport"),
        limit(4),
        orderBy("createdAt", "desc")
    );

    const collectionQuery = useFirestoreQuery(["mainReport"], collectionRef);

    return (
        <div className='-mt-12 flex w-full flex-col items-center justify-center xs:-mt-16 xl:-mt-32'>
            <div className='relative flex h-full w-4/5 flex-col gap-y-4 bg-white px-4 py-3 md:gap-y-6 md:px-9 md:pt-9 xl:gap-y-8 xl:px-12 xl:py-10'>
                <h1 className='flex h-[20%] items-center justify-between text-sm font-semibold xs:text-base sm:text-lg md:text-2xl xl:text-3xl '>
                    <div className='flex gap-x-1 xl:gap-x-3'>
                        <span className='text-PRIMARY_COLOR-600'>
                            최신 연구
                        </span>
                        보고서
                    </div>

                    <Link href='/data/paper'>
                        <div className='flex cursor-pointer gap-x-1 text-xs hover:scale-105 xs:text-sm xl:gap-x-4 xl:text-lg'>
                            자세히 보러 가기
                            <PlusIcon className='h-4 self-center rounded-full  border border-PRIMARY_COLOR-500 p-0.5 xl:h-6 xl:p-1' />
                        </div>
                    </Link>
                </h1>
                <div className='grid h-fit grid-cols-2 justify-between gap-x-8 px-3 md:grid-cols-3 xl:gap-x-16 xl:px-6 2xl:grid-cols-4 2xl:px-10'>
                    {collectionQuery.data?.docs.map((snapshot, index) => {
                        const data = snapshot.data() as ResearchReport;

                        return (
                            <ReportCard
                                key={snapshot.id}
                                report={data}
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ResearchReport;
