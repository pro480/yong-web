import React from "react";
import HistoryPost from "./HistoryPost";

interface Props {
    year: number;
    contents: { month: number; history: string }[];
}

function HistoryCard({ year, contents }: Props) {
    return (
        <section className='my-6 flex-nowrap lg:flex xl:pl-8'>
            <h1 className='my-8 pr-4 text-xl font-bold text-PRIMARY_COLOR-500 sm:text-2xl lg:my-0 lg:mr-5'>
                {year}
            </h1>
            <div className='lg:flex-1'>
                {contents.map((content, index) => (
                    <HistoryPost
                        key={index}
                        month={content.month}
                        history={content.history}
                    />
                ))}
            </div>
        </section>
    );
}

export default HistoryCard;
