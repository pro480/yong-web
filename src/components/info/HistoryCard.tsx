import React from "react";
import HistoryPost from "./HistoryPost";

interface Props {
    year: number;
    contents: { month: number; history: string }[];
}

function HistoryCard({ year, contents }: Props) {
    return (
        <section className='my-8 flex-nowrap sm:flex '>
            <h1 className='my-8 pr-4 text-xl font-bold text-PRIMARY_COLOR-500 sm:my-0 sm:pl-10 sm:pr-16 sm:text-2xl lg:pr-32'>
                {year}
            </h1>
            <div>
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
