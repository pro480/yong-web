import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function QnaAnswer({ answer }: { answer: string }) {
    return (
        <React.Fragment>
            <div className='flex h-[80px] w-full border-t border-gray-300'>
                <div className='flex  p-3'>
                    <ArrowLongRightIcon className='h-[30px] px-3 opacity-70' />
                    <div className='mx-3 h-[28px] w-[50px]  rounded-md bg-gray-500 text-center text-white'>
                        <span>답변</span>
                    </div>
                </div>
                <div className='flex w-full flex-col'>
                    <div className='flex justify-between'>
                        <div className='p-3 opacity-90'>{answer}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
