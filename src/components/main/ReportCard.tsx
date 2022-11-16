import React, { useContext } from "react";
import { ArrowDownTrayIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ResearchReport } from "../../../typing";

interface Props {
    report: ResearchReport;
    index: number;
}

export default function ReportCard({ report, index }: Props) {
    console.log(report);

    return (
        <div
            className={`hidden flex-col text-xs xs:text-sm lg:text-base ${
                index < 2 && "flex"
            } ${index < 3 && "md:flex"}
            2xl:flex`}
        >
            <div className='relative aspect-[1/1.414] w-full border bg-gray-300'>
                <Image src={report.imgUrl} layout='fill' />
            </div>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap text-center '>
                {report.title}
            </div>
            <div className='w-full text-end'>연구자 : {report.researcher}</div>
        </div>
    );
}
