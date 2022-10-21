import React from "react";

interface Props {
    content: string;
}

function CenterLeaderHistory({  content }: Props) {
    return (
        <li className='flex'>
            <div className='before:content-[" "] mx-10 before:mt-2 before:block before:h-3 before:w-3 before:rounded-full before:border-2 before:border-PRIMARY_COLOR-500 after:mx-auto after:block after:h-9 after:w-0 after:border after:border-dashed after:border-PRIMARY_COLOR-50'></div>
            {content}
        </li>
    );
}

export default CenterLeaderHistory;
