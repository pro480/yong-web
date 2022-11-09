import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function QnaAnswer({
    answer,
    answerAt,
}: {
    answer: string;
    answerAt: string;
}) {
    const year = answerAt.slice(0, 4);
    const month = answerAt.slice(4, 6);
    const day = answerAt.slice(6, 8);
    return (
        <React.Fragment>
            <div className='flex h-[90px] w-full border-t border-gray-300 bg-gray-200'>
                <div className='flex  p-3'>
                    <ArrowLongRightIcon className='h-[30px] px-3 opacity-70' />
                    <div className='mx-2 h-[28px] w-[50px]  rounded-md bg-gray-500 text-center text-white'>
                        <span>답변</span>
                    </div>
                </div>
                <div className='flex w-full flex-col'>
                    <div className='flex justify-between'>
                        <div className='py-3 px-1'>{answer}</div>
                    </div>
                </div>
                <div className='flex w-[18%] flex-col'>
                    <div className='flex justify-between'>
                        <div className=' p-2 pr-5 text-sm text-gray-500'>
                            {`${year}년 ${month}월 ${day}일`}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
