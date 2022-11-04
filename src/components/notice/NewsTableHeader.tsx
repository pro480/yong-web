import React from "react";
import { NewsTableAddButton } from "./NewsTableButton";
import { News, CenterNews, EventNews } from "../../../typing";
import useAuth from "../../hooks/useAuth";

interface Props<N> {
   news: News;
}

function NewsTableHeader<N extends CenterNews | EventNews>({ news }: Props<N>) {
    const { user } = useAuth();
    return (
        <thead>
            <tr className='bg-PRIMARY_COLOR-500/40 h-12 text-sm uppercase leading-normal text-gray-600'>
                <th className='w-[5%] text-center'>NO</th>
                <th className='w-[30%] text-center'>제목</th>
                <th className='w-[25%] text-center'>작성자</th>
                <th className='relative w-[30%] text-center'>
                    등록일
                    {user && <NewsTableAddButton />}
                </th>
            </tr>
        </thead>
    );
}

export default NewsTableHeader;
