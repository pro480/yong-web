import React from "react";
import { NewsTableAddButton } from "./NewsTableButton";
import { News, CenterNews, EventNews } from "../../../typing";
import useAuth from "../../hooks/useAuth";

function NewsTableHeader() {
    const { user } = useAuth();
    return (
        <thead>
            <tr className='h-12 bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                <th className='w-[5%] text-center'>NO</th>
                <th className='w-[45%] text-center'>제목</th>
                <th className='w-[15%] text-center'>작성자</th>
                <th className='w-[15%] pr-4 text-right'>등록일</th>
                <th className='relative w-[20%]'>
                    첨부파일
                    {user && <NewsTableAddButton />}
                </th>
            </tr>
        </thead>
    );
}

export default NewsTableHeader;
