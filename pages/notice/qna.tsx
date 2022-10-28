import React, { useState } from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import QnaRow from "../../src/components/notice/QnaRow";
import { collection } from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { db } from "../../firebase";
import Link from "next/link";
import useAuth from "../../src/hooks/useAuth";
import useFirebase from "../../src/hooks/useFirebase";
import { QNA } from "../../typing";
import SubmitForm from "../../src/components/notice/SubmitForm";

function Qna() {
    const { collectionRef, collectionQuery, deleteDocument } = useFirebase<QNA>(
        "qna",
        ["qna"]
    );
    const { user } = useAuth();
    // const qnaRef = collection(db, "qna");
    // const qnaQuery = useFirestoreQuery(["qna"], qnaRef);
    // const qnaSnapshot = qnaQuery.data;

    return (
        <div>
            <React.Fragment>
                <main>
                    {/*검색창*/}
                    <div className='mt-5 flex h-9 items-center justify-end'>
                        <select className='h-full border pl-2 pr-7'>
                            <option>전체</option>
                            <option value='title '>제목</option>
                            <option value='content'>내용</option>
                        </select>

                        <input className='ml-6 h-full w-32 border' />
                        <MagnifyingGlassIcon className='h-full bg-PRIMARY_COLOR-500 p-1 text-white' />
                    </div>
                    {/*개수*/}
                    <h1 className='my-4'>
                        {"전체 "}
                        <span className='ml-3 text-2xl font-bold text-PRIMARY_COLOR-500'>
                            {collectionQuery.data?.docs.length}
                        </span>
                        {" 건"}
                    </h1>
                    {/*테이블*/}
                    <table className='w-full table-auto border-t border-t-black'>
                        <thead>
                            <tr className='w-full bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                                <th className='w-32 py-3 text-center'>
                                    답변 유무
                                </th>
                                <th className='py-3 text-center'> 내용</th>

                                <th className='w-1/6 py-3 text-center'>
                                    등록일
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-sm font-light text-gray-600'>
                            {collectionQuery.data?.docs.map((items) => {
                                const memberItem = items.data();
                                return (
                                    <QnaRow
                                        key={items.id}
                                        doc={items.id}
                                        {...memberItem}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                    {/* 글쓰기 */}
                    <SubmitForm />
                    {/*글쓰기 버튼*/}
                </main>

                {/*페이지 수*/}
                <div className=' m-5 flex items-center justify-center'>
                    <ul className='inline-flex items-center -space-x-px '>
                        <li>
                            <a
                                href='#'
                                className='text-PRIMARY_FONT_COLOR m-1 block border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                            >
                                <ChevronDoubleLeftIcon className='h-3 w-3' />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#1'
                                aria-current='page'
                                className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                            >
                                1
                            </a>
                        </li>
                        {/* 
                        <li>
                            <a
                                href='#2'
                                className='text-PRIMARY_FONT_COLOR m-1 border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                            >
                                2
                            </a>
                        </li>
                        <li>
                            <a
                                href='#3'
                                className='text-PRIMARY_FONT_COLOR m-1 border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                            >
                                3
                            </a>
                        </li>

                        <li>
                            <a
                                href='#4'
                                className='text-PRIMARY_FONT_COLOR m-1 border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                            >
                                4
                            </a>
                        </li>
                        <li>
                            <a
                                href='#5'
                                className='text-PRIMARY_FONT_COLOR m-1 border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                            >
                                5
                            </a>
                        </li> */}
                        <li>
                            <a
                                href='#6'
                                className='text-PRIMARY_FONT_COLOR m-1 block border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                            >
                                <ChevronDoubleRightIcon className='h-3 w-3' />
                            </a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        </div>
    );
}

export default Qna;
