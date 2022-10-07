import {
    ChevronLeftIcon,
    DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    LinkIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Index() {
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
                {/*검색 필드*/}
                <form className='flex flex-col gap-y-7 border-t border-t-black bg-PRIMARY_COLOR/40 py-6'>
                    <div className='flex h-9 items-center'>
                        <div className='mx-6 w-16 text-lg font-light'>검색</div>
                        <select className='h-full border pl-2 pr-16'>
                            <option value='title '>제목</option>
                            <option value='content'>내용</option>
                            <option value='writer '>저자</option>
                        </select>

                        <input className='ml-6 h-full w-1/2 border' />
                    </div>
                    <div className='relative flex h-9 w-full items-center'>
                        <div className='mx-6 w-16 text-lg font-light'>
                            등록일
                        </div>
                        <div className='flex h-full w-96 items-center justify-between'>
                            <input className='h-full border' />-
                            <input className='h-full border' />
                        </div>
                        <div className='ml-5 text-sm font-light text-gray-500'>
                            날짜 입력 예시 : 20221007
                        </div>
                        <button
                            type='submit'
                            className='absolute right-12 h-full bg-amber-400 px-16 font-semibold'
                        >
                            검색
                        </button>
                    </div>
                </form>
                <h1 className='my-4'>
                    전체{" "}
                    <span className='ml-3 text-2xl font-bold text-PRIMARY_COLOR'>
                        {posts.length}
                    </span>{" "}
                    건
                </h1>
                {/*아래는 공지사항 테이블*/}
                <table className='w-full table-auto border-t border-t-black'>
                    <thead>
                        <tr className='w-full bg-PRIMARY_COLOR/40 text-sm uppercase leading-normal text-gray-600'>
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
                            className='m-1 block border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR'
                        >
                            <ChevronDoubleLeftIcon className='h-3 w-3' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            aria-current='page'
                            className='m-1 border border-PRIMARY_COLOR bg-white py-2 px-3 text-sm text-PRIMARY_COLOR hover:border-PRIMARY_COLOR hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR'
                        >
                            1
                        </a>
                    </li>

                    <li>
                        <a
                            href='#'
                            className='m-1 border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR'
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='m-1 border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR'
                        >
                            3
                        </a>
                    </li>

                    <li>
                        <a
                            href='#'
                            className='m-1 border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR'
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='m-1 border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR'
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='m-1 block border border-black bg-white py-2 px-3 text-sm text-PRIMARY_FONT_COLOR hover:border-PRIMARY_COLOR hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR'
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
