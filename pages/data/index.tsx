import {
    ChevronLeftIcon,
    DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    LinkIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Index() {
    type Thesis = {
        title: string;
        writer: string;
        createAt: string; // 논문이 출간 된 닐찌
        fileUrl: string;
        journal?: Journal[]; // journal 인용 목록, 없을 수도 있음
    }; // 미리보기, modal 로 구현

    type ResearchReport = {
        titleKO: string;
        titleEN: string;
        writer: string;
        coAuthor: string[];
        writersNum: number; // 연구 참여자 수
        pageNum: number;
        createAt: string; // 발간년도
        fileUrl: string;
        index: string; // 목차
        purpose: string; // 연구 목적
        content: string; // 연구 내용
        keyword: string[];
        benefit: string; // 기대 효과
        ifOpen: boolean; // 공개 여부
        startedAt: string;
        endedAt: string;
        whyNotOpen: string;
    }; //table, 상세페이지로 구현, https://www.kice.re.kr/resrchBoard/list.do?cate=1&m=030101&s=kice

    type Journal = {
        info: string;
        year: number;
    };

    const posts = [
        {
            title: "2022 빅데이터 관련 논문 1",
            writer: "이용상",
            createAt: "2022.09.21",
            content: "내용",
            webLink: "link.gg",
            number: 1,
        },
        {
            title: "2022 빅데이터 관련 논문 2",
            writer: "이용상",
            createAt: "2022.09.22",
            content: "내용",
            webLink: "link.gg",
            number: 2,
        },
        {
            title: "2022 빅데이터 관련 논문 3",
            writer: "이용상",
            createAt: "2022.09.23",
            content: "내용",
            webLink: "link.gg",
            number: 3,
        },
        {
            title: "2022 빅데이터 관련 논문 4",
            writer: "이용상",
            createAt: "2022.09.24",
            content: "내용",
            webLink: "link.gg",
            number: 4,
        },
        {
            title: "2022 빅데이터 관련 논문 5",
            writer: "이용상",
            createAt: "2022.09.25",
            content: "내용",
            webLink: "link.gg",
            number: 5,
        },
        {
            title: "2022 빅데이터 관련 논문 6",
            writer: "이용상",
            createAt: "2022.09.26",
            content: "내용",
            webLink: "link.gg",
            number: 6,
        },
        {
            title: "2022 빅데이터 관련 논문 7",
            writer: "이용상",
            createAt: "2022.09.27",
            content: "내용",
            webLink: "link.gg",
            number: 7,
        },
        {
            title: "2022 빅데이터 관련 논문 8",
            writer: "이용상",
            createAt: "2022.09.28",
            content: "내용",
            webLink: "link.gg",
            number: 8,
        },
        {
            title: "2022 빅데이터 관련 논문 9",
            writer: "이용상",
            createAt: "2022.09.29",
            content: "내용",
            webLink: "link.gg",
            number: 9,
        },
        {
            title: "2022 빅데이터 관련 논문 10",
            writer: "이용상",
            createAt: "2022.09.30",
            content: "내용",
            webLink: "link.gg",
            number: 10,
        },
    ];

    return (
        <div>
            <PageTitle
                title='논문 및 연구 보고서'
                description='논문 및 연구 보고서 페이지의 설명을 입력해주세요.'
                firstDepth='자료실'
                firstLink='/data'
                secondDepth='논문 및 연구 보고서'
                secondLink='/data'
            />
            <main>
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
                            <th className='py-3 text-center'>논문/연구 제목</th>
                            <th className='w-1/6 py-3 text-center'>저자</th>
                            <th className='w-1/6 py-3 text-center'>등록일</th>
                            <th className='w-1/6 py-3 text-center'>
                                논문/연구 링크
                            </th>
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
                                    {item.title}
                                </td>
                                <td className='text-center'>{item.writer}</td>
                                <td className='text-center'>{item.createAt}</td>
                                <td>
                                    <LinkIcon className='mx-auto h-6 w-6' />
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
                            className='m-1 block border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
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
                            className='m-1 border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='m-1 border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            3
                        </a>
                    </li>

                    <li>
                        <a
                            href='#'
                            className='m-1 border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='m-1 border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='m-1 block border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR-500 hover:bg-GRAY_COLOR-500 hover:text-PRIMARY_COLOR-500'
                        >
                            <ChevronDoubleRightIcon className='h-3 w-3' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Index;
