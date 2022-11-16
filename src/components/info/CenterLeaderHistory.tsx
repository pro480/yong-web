import React from "react";

interface Props {
    content: string;
}

function CenterLeaderHistory({ content }: Props) {
    return (
        <li className='my-4 flex xs:my-auto'>
            <div className=' history_division absolute left-10 xs:left-0 xs:relative xs:w-auto '></div>
            <div className=' ml-8 xs:ml-0'>{content}</div>
        </li>
    );
}

export default CenterLeaderHistory;
