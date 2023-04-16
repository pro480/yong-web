import React from "react";

interface Props {
    month: number;
    history: string;
}

function HistoryPost({ month, history }: Props) {
    return (
        <div className='mb-4 flex h-fit lg:flex-1'>
            <div className='flex text-sm font-semibold text-gray-700 text-PRIMARY_COLOR-500 xs:text-base sm:text-lg '>
                <span className='w-8 xs:w-10 text-center'>{month}월</span>
                <div className='history_division'></div>
            </div>
            <div className='md:w-88 w-48 flex-1 text-xs xs:text-sm sm:text-base lg:w-96 xl:w-[650px]'>
                {history}
            </div>
        </div>
    );
}

export default HistoryPost;
