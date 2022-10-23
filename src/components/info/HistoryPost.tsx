import React from "react";

interface Props {
    month: number;
    history: string;
}

function HistoryPost({ month, history }: Props) {
    return (
        <div className='mb-8 flex h-fit'>
            <div className='mr-5 flex text-lg font-semibold text-gray-700 text-PRIMARY_COLOR-500 '>
                <span className='w-10'>{month}월</span>
                <div className='history_division'></div>
            </div>
            <div className='md:w-88 w-48 lg:w-96 xl:w-[650px]'>{history}</div>
        </div>
    );
}

export default HistoryPost;
