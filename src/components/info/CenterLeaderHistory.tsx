import React from "react";

interface Props {
    content: string;
}

function CenterLeaderHistory({  content }: Props) {
    return (
        <li className='flex'>
            <div className='history_division'></div>
            {content}
        </li>
    );
}

export default CenterLeaderHistory;
