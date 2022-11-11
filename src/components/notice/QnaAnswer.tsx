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
            <div className='flex w-full border-t border-gray-300 bg-gray-200 pt-2 pb-2'>
                <div className='flex p-3'>
                    <ArrowLongRightIcon className='h-[16px] opacity-70 lg:h-[30px] lg:px-3' />
                    <div className='w-[1px] rounded-md bg-gray-500 text-center text-[1px] text-white opacity-0 sm:ml-2 sm:h-[20px] sm:w-[29px] sm:text-[11px] sm:opacity-100 md:h-[23px] md:w-[37px] md:text-sm xl:mx-2 xl:h-[28px] xl:w-[50px] xl:text-base'>
                        <span>답변</span>
                    </div>
                </div>
                <div className='flex w-full flex-col text-[13px] md:text-sm lg:text-base'>
                    <div className='flex justify-between'>
                        <div className='py-3 lg:px-1'>{answer}</div>
                    </div>
                </div>
                <div className='flex w-[50%] flex-col sm:w-[36%] lg:w-[24%] xl:w-[18%]'>
                    <div className='flex justify-between'>
                        <div className=' p-2 pr-5 text-[10px] text-gray-500 sm:text-[12px] lg:text-sm'>
                            {`${year}년 ${month}월 ${day}일`}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
