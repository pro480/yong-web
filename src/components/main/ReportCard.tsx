import React, { useContext } from "react";
import { ArrowDownTrayIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ResearchReport } from "../../../typing";
import Link from "next/link";

interface Props {
    report: ResearchReport;
    index: number;
}

export default function ReportCard({ report, index }: Props) {
    console.log(report);

    return (
        <div
            className={`flex flex-col gap-y-1 text-xs xs:text-sm lg:text-base${
                index > 2 && "hidden"
            } ${index < 3 && "md:flex"}
            2xl:flex`}
        >
            <div className='relative aspect-[1/1.414] w-full  cursor-pointer border bg-gray-300 shadow-lg hover:scale-105'>
                <Link href='/data/paper?tab=report'>
                    <Image src={report.imgUrl} layout='fill' />
                </Link>
            </div>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap text-center '>
                {report.title}
            </div>
            <div className='w-full text-end'>연구자 : {report.researcher}</div>
        </div>
    );
}
