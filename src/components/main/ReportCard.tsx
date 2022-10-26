import React from "react";
import { NewspaperIcon } from "@heroicons/react/24/outline";

function ReportCard() {
    return (
        <div className='flex w-[30%] border p-5'>
            <div className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-500'>
                <NewspaperIcon className='h-full p-2' />
            </div>
            <div className='relative ml-4 h-[300px]'>
                <div className='py-2 text-2xl font-bold'>보고서 제목</div>
                <p className='mt-5'>이곳에는 보고서의 요약이 들어갑니다</p>
                <div className='absolute bottom-0 right-5 text-sm'>
                    연구자 : 이용상, 이용상
                </div>
            </div>
        </div>
    );
}

export default ReportCard;
