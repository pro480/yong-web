import React from "react";

interface Props {
    startedAt: number;
    endedAt: number;
    content: string;
}

function CenterLeaderHistory({ startedAt, endedAt, content }: Props) {
    return (
        <li className='flex'>
            <span className='w-fit'>
                {startedAt} ~ {endedAt}
            </span>
            <div className='before:content-[" "] mx-10 before:mt-2 before:block before:h-3 before:w-3 before:rounded-full before:border-2 before:border-PRIMARY_COLOR-500 after:mx-auto after:block after:h-9 after:w-0 after:border after:border-dashed after:border-PRIMARY_COLOR-50'></div>
            {content}
        </li>
    );
}

export default CenterLeaderHistory;
