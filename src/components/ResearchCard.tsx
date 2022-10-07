import React from "react";
import { ForwardIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface Props {
    title: string;
    url: string;
    summary: string;
    center: string;
    startedAt: string;
    endedAt: string;
    completed: boolean;
}

function ResearchCard({
    title,
    url,
    summary,
    center,
    startedAt,
    endedAt,
    completed,
}: Props) {
    return (
        <div
            key={title}
            className='gap flex h-[250px] w-[1000px] cursor-pointer justify-start rounded-[20px] hover:scale-105 hover:bg-gray-200'
        >
            <div className='relative flex w-3/5 items-center justify-center rounded-[20px] bg-gray-300'>
                {url}
                <div className='absolute right-2 top-2'>
                    {completed ? <CheckCircleIcon className="h-6" />: <ForwardIcon className="h-6" />}
                </div>
            </div>
            <div className='w-2/7 indent-3/10 ml-10 flex flex-col '>
                <ul className='mt-[50px] text-xl font-semibold'>{title}</ul>
                <ul className='mt-5'>{summary} </ul>
                <div className='mt-10'>
                    <ul>수탁 기관 : {center}</ul>
                    <ul>
                        수행 기간 : {startedAt} ~ {endedAt}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResearchCard;
