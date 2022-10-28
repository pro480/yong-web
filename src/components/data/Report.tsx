import React from "react";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import ThesisRow from "./ThesisRow";
import useFirebase from "../../hooks/useFirebase";
import { Thesis } from "../../../typing";

export default function Report() {
    const {
        collectionRef: researchRef,
        collectionQuery: researchQuery,
        deleteDocument: researchDelete,
    } = useFirebase<Thesis>("research", ["research"]);

    return (
        <React.Fragment>
            <main>
                {/* 전체 몇건 */}
                <div className='mt-5 flex h-9 items-center justify-end'>
                    <select className='h-full border pl-2 pr-7'>
                        <option>전체</option>
                        <option value='title '>제목</option>
                        <option value='content'>내용</option>
                    </select>

                    <input className='ml-6 h-full w-32 border' />
                    <MagnifyingGlassIcon className='h-full bg-PRIMARY_COLOR-500 p-1 text-white' />
                </div>
                <h1 className='my-4'>
                    전체{" "}
                    <span className='ml-3 text-2xl font-bold text-PRIMARY_COLOR-500'></span>{" "}
                    건
                </h1>

                {/*테이블*/}
                <table className='w-full table-auto border-t border-t-black'>
                    <thead>
                        <tr className='w-full bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                            <th className='w-32 py-3 text-center'>번호</th>
                            <th className='py-3 text-center'>논문/연구 제목</th>
                            <th className='w-1/6 py-3 text-center'>저자</th>
                            <th className='w-1/6 py-3 text-center'>등록일</th>
                            <th className='w-1/6 py-3 text-center'>
                                논문/연구 링크
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-sm font-light text-gray-600'>
                        {/* researchQuery.data?.docs.map((items) => {
                                const memberItem = items.data();
                                return (
                                    <ResearchRow
                                        key={items.id}
                                        doc={items.id}
                                        {...memberItem}
                                    />
                                );
                            } */}
                    </tbody>
                </table>
            </main>
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
                            href='#'
                            aria-current='page'
                            className='m-1 border border-PRIMARY_COLOR-500 bg-white py-2 px-3 text-sm text-PRIMARY_COLOR-500 hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            1
                        </a>
                    </li>

                    <li>
                        <a
                            href='#'
                            className='text-PRIMARY_FONT_COLOR m-1 border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='text-PRIMARY_FONT_COLOR m-1 border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            3
                        </a>
                    </li>

                    <li>
                        <a
                            href='#'
                            className='text-PRIMARY_FONT_COLOR m-1 border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='text-PRIMARY_FONT_COLOR m-1 border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='text-PRIMARY_FONT_COLOR m-1 block border border-black bg-white py-2 px-3 text-sm hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            <ChevronDoubleRightIcon className='h-3 w-3' />
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
