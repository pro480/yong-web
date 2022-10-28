import React from "react";
import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { NewspaperIcon, PlusIcon } from "@heroicons/react/24/outline";
import ReportCard from "./ReportCard";
import Link from "next/link";

function ResearchReport() {
    return (
        <div className='-mt-32 flex h-[700px] w-full flex-col items-center justify-center'>
            <div className='relative z-50 flex h-full w-4/5 flex-col bg-white px-20 pt-6 pb-24'>
                <h1 className='flex h-[20%] items-center text-4xl font-semibold '>
                    <span className='text-PRIMARY_COLOR-600'>최신 연구</span>
                    &nbsp;&nbsp;보고서
                    <Link href='/data'>
                        <div className='absolute right-20 float-right flex gap-x-4 text-xl'>
                            자세히 보러 가기
                            <PlusIcon className='h-6 w-6 self-center rounded-full border border-PRIMARY_COLOR-500 p-1' />
                        </div>
                    </Link>
                </h1>
                <div className='flex flex-1 justify-between'>
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />
                </div>
            </div>
        </div>
    );
}

export default ResearchReport;
