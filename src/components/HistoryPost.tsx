import React from 'react';

interface Props {
    month: string;
    content: string;
}

function HistoryPost({month, content}:Props) {
    return (
        <div className='mb-8 flex h-fit items-center'>
            <div className='flex mr-5 text-lg font-semibold text-gray-700 text-PRIMARY_COLOR-500 '>
                <span>{month}</span>
                <div className='before:content-[" "] mx-10 before:mt-2 before:block before:h-3 before:w-3 before:rounded-full before:border-2 before:border-PRIMARY_COLOR-500 after:mx-auto after:block after:h-9 after:w-0 after:border after:border-dashed after:border-PRIMARY_COLOR-50'></div>
            </div>
            {content}
        </div>
    );
}

export default HistoryPost;