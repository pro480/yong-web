import {
    ChevronLeftIcon,
    DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";

function Study() {
    type StudyData = {
        category: StudyCategory;
        title: string;
        writer: string;
        createAt: string;
        fileUrl: string;
        content: string;
    };

    type StudyCategory = "에듀데이터사이언스/인공지능" | "교육 측정/평가";

    const posts = [
        {
            title_KO: "2022 빅데이터 학습자료 1",
            writer: "이용상",
            createAt: "2022.09.21",
            content: "내용",
            fileLink: "link.gg",
            number: 1,
        },
        {
            title_KO: "2022 빅데이터 학습자료 2",
            writer: "이용상",
            createAt: "2022.09.22",
            content: "내용",
            fileLink: "link.gg",
            number: 2,
        },
        {
            title_KO: "2022 빅데이터 학습자료 3",
            writer: "이용상",
            createAt: "2022.09.23",
            content: "내용",
            fileLink: "link.gg",
            number: 3,
        },
        {
            title_KO: "2022 빅데이터 학습자료 4",
            writer: "이용상",
            createAt: "2022.09.24",
            content: "내용",
            fileLink: "link.gg",
            number: 4,
        },
        {
            title_KO: "2022 빅데이터 학습자료 5",
            writer: "이용상",
            createAt: "2022.09.25",
            content: "내용",
            fileLink: "link.gg",
            number: 5,
        },
        {
            title_KO: "2022 빅데이터 학습자료 6",
            writer: "이용상",
            createAt: "2022.09.26",
            content: "내용",
            fileLink: "link.gg",
            number: 6,
        },
        {
            title_KO: "2022 빅데이터 학습자료 7",
            writer: "이용상",
            createAt: "2022.09.27",
            content: "내용",
            fileLink: "link.gg",
            number: 7,
        },
        {
            title_KO: "2022 빅데이터 학습자료 8",
            writer: "이용상",
            createAt: "2022.09.28",
            content: "내용",
            fileLink: "link.gg",
            number: 8,
        },
        {
            title_KO: "2022 빅데이터 학습자료 9",
            writer: "이용상",
            createAt: "2022.09.29",
            content: "내용",
            fileLink: "link.gg",
            number: 9,
        },
        {
            title_KO: "2022 빅데이터 학습자료 10",
            writer: "이용상",
            createAt: "2022.09.30",
            content: "내용",
            fileLink: "link.gg",
            number: 10,
        },
    ];

    return (
        <div>
            <main>
                {/*카테고리*/}
                <div className='flex'>
                    <a className='w-24 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        전체
                    </a>
                    <a className='w-48 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        수업 1
                    </a>
                    <a className='w-48 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        수업 2
                    </a>
                    <a className='w-52 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        수업 3
                    </a>

                    <span className='w-full border-b'></span>
                </div>
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

                <h1 className='my-4'>
                    전체{" "}
                    <span className='ml-3 text-2xl font-bold text-PRIMARY_COLOR-500'>
                        {posts.length}
                    </span>{" "}
                    건
                </h1>
                {/*테이블*/}
                <table className='w-full table-auto border-t border-t-black'>
                    <thead>
                        <tr className='w-full bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                            <th className='w-32 py-3 text-center'>번호</th>
                            <th className='py-3 text-center'>제목</th>
                            <th className='w-1/6 py-3 text-center'>작성자</th>
                            <th className='w-1/6 py-3 text-center'>등록일</th>
                            <th className='w-1/6 py-3 text-center'>첨부파일</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm font-light text-gray-600'>
                        {posts.reverse().map((item) => (
                            <tr
                                key={item.number}
                                className='border-b border-gray-200 hover:bg-gray-100'
                            >
                                <td className='py-4 text-center'>
                                    {item.number}
                                </td>
                                <td className='px-12 text-left'>
                                    {item.title_KO}
                                </td>
                                <td className='text-center'>{item.writer}</td>
                                <td className='text-center'>{item.createAt}</td>
                                <td>
                                    <DocumentArrowDownIcon className='mx-auto h-8 w-8' />
                                </td>
                            </tr>
                        ))}
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
        </div>
    );
}

export default Study;
