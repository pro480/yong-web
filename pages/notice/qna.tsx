import React, { useState } from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    DocumentTextIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import QnaRow from "../../src/components/notice/QnaRow";
import useFirebase from "../../src/hooks/useFirebase";
import { QNA } from "../../typing";
import Link from "next/link";
import Search from "../../src/components/common/Search";
import moment from "moment/moment";
import QnaTableHeader from "../../src/components/notice/QnaTableHeader";

function Qna() {
    const { collectionRef, collectionQuery } = useFirebase<QNA>("qna", ["qna"]);

    return (
        <div>
            <main>
                {/*검색창*/}
                <Search />
                {/*개수*/}
                <h1 className='my-4'>
                    {"전체 "}
                    <span className='ml-3 text-2xl font-bold text-PRIMARY_COLOR-500'>
                        {collectionQuery.data?.size}
                    </span>
                    {" 건"}
                </h1>
                {/*테이블*/}
                <table className='w-full table-auto border-t border-t-black'>
                    <QnaTableHeader />
                    <tbody className='text-sm font-light text-gray-600'>
                        {collectionQuery.data?.docs.map((snapshot) => {
                            const qna = snapshot.data();
                            return <QnaRow key={snapshot.id} qna={qna} />;
                        })}
                    </tbody>
                </table>
            </main>
            {/*글쓰기 버튼*/}
            <button className='float-right my-3 mr-5 rounded bg-PRIMARY_COLOR-300 py-2 px-4 font-bold text-white hover:bg-PRIMARY_COLOR-500'>
                글쓰기
            </button>
            {/*페이지 수*/}
            {/*<div className=' m-5 flex items-center justify-center'>*/}
            {/*    <ul className='inline-flex items-center -space-x-px '>*/}
            {/*        <li>*/}
            {/*            <a*/}
            {/*                href='pages/notice/qna/qna#qna.tsx'*/}
            {/*                className='text-PRIMARY_FONT_COLOR m-1 block border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'*/}
            {/*            >*/}
            {/*                <ChevronDoubleLeftIcon className='h-3 w-3' />*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a*/}
            {/*                href='pages/notice/qna/qna.tsx'*/}
            {/*                aria-current='page'*/}
            {/*                className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'*/}
            {/*            >*/}
            {/*                1*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a*/}
            {/*                href='pages/notice/qna/qna.tsx'*/}
            {/*                className='text-PRIMARY_FONT_COLOR m-1 block border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'*/}
            {/*            >*/}
            {/*                <ChevronDoubleRightIcon className='h-3 w-3' />*/}
            {/*            </a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
}

export default Qna;
