import React from "react";
import HorizontalRule from "./HorizontalRule";

interface Props {
    title: string;
}

function ClassificationTitle({ title }: Props) {
    return (
        <h1 id={title} className='h-full whitespace-nowrap border-b-2 border-b-PRIMARY_COLOR-300 pb-4 text-3xl font-semibold text-PRIMARY_COLOR-500'>
            {title}
        </h1>
    );
}

export default ClassificationTitle;
