import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

interface Props {
    title: string;
}

function NewsCard({ title }: Props) {
    return (
        <div className='flex w-[25%] flex-col rounded-tr-3xl rounded-bl-3xl border bg-GRAY_COLOR-200 px-10 pt-8 pb-10'>
            <div className='h-14 w-3/4 border-b-2 border-b-PRIMARY_COLOR-300 pb-2 text-2xl font-semibold'>
                {title}
            </div>
            <div className='my-8 flex-1'>이곳은 공지사항 본문내용입니다</div>
            <div className='flex w-full justify-end text-gray-500'>
                <ClockIcon className='h-6' />
                <div>2022-12-12</div>
            </div>
        </div>
    );
}

export default NewsCard;
