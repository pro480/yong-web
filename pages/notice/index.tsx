import React from "react";
import PageTitle from "../../src/components/PageTitle";
import {
    InformationCircleIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

function Index() {
    const posts = [
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 1",
            content: "내용 1",
            writer: "이용상",
            createAt: "2022.10.05",
            number: 1,
            category: "공지사항",
            priority: false,
        },
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 2",
            content: "내용 2",
            writer: "이용상",
            createAt: "2021.10.06",
            number: 2,
            category: "공지사항",
            priority: false,
        },
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 3",
            content: "내용 3",
            writer: "이용상",
            createAt: "2020.10.07",
            number: 3,
            category: "공지사항",
            priority: false,
        },
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 4",
            content: "내용 4",
            writer: "이용상",
            createAt: "2020.10.07",
            number: 4,
            category: "공지사항",
            priority: true,
        },
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 5",
            content: "내용 5",
            writer: "이용상",
            createAt: "2020.10.07",
            number: 5,
            category: "공지사항",
            priority: false,
        },
    ];

    return (
        <div>
            <PageTitle
                title='센터 소식'
                description='센터 소식 페이지에 대한 설명을 입력해주세요.'
                firstDepth='공지사항'
                firstLink='/notice'
            />
            <main>
                {/*카테고리 탭*/}
                <div className='flex'>
                    <a className='w-24 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        전체
                    </a>
                    <a className='w-48 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        공지사항
                    </a>
                    <a className='w-48 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        보도자료
                    </a>
                    <a className='w-52 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        지원자 모집
                    </a>
                    <a className='w-48 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        상시 안내
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
                    <MagnifyingGlassIcon className='h-full bg-black p-1 text-white' />
                </div>
                {/**/}
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
                        <tr className='bg-PRIMARY_COLOR/40 text-sm uppercase leading-normal text-gray-600'>
                            <th className='w-16 py-3 text-center'>번호</th>
                            <th className='w-32 py-3 text-center'>분류</th>
                            <th className='py-3 text-center'>제목</th>
                            <th className='w-1/6 py-3 text-center'>작성자</th>
                            <th className='w-1/6 py-3 text-center'>등록일</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm font-light text-gray-600'>
                        {posts
                            .filter((item) => item.priority)
                            .map((item) => (
                                <tr
                                    key={item.number}
                                    className='relative border-b border-gray-200 hover:bg-gray-100'
                                >
                                    <td className=''>
                                        <InformationCircleIcon className='h-9 mx-auto items-center text-PRIMARY_COLOR' />
                                    </td>
                                    <td className='py-4 text-center'>
                                        {item.category}
                                    </td>

                                    <td className='px-12 text-left'>
                                        {item.title}
                                    </td>
                                    <td className='text-center'>
                                        {item.writer}
                                    </td>
                                    <td className='text-center'>
                                        {item.createAt}
                                    </td>
                                </tr>
                            ))}
                        {posts.reverse().map((item) => (
                            <tr
                                key={item.number}
                                className='border-b border-gray-200 hover:bg-gray-100'
                            >
                                <td className='py-4 text-center'>
                                    {item.number}
                                </td>
                                <td className='py-4 text-center'>
                                    {item.category}
                                </td>

                                <td className='px-12 text-left'>
                                    {item.title}
                                </td>
                                <td className='text-center'>{item.writer}</td>
                                <td className='text-center'>{item.createAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default Index;
