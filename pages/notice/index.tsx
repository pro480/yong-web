import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Index() {
    const posts = [
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 1",
            content: "내용 1",
            writer: "이용상",
            createAt: "2022.10.05",
            number: 1,
        },
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 2",
            content: "내용 2",
            writer: "이용상",
            createAt: "2021.10.06",
            number: 2,
        },
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 3",
            content: "내용 3",
            writer: "이용상",
            createAt: "2020.10.07",
            number: 3,
        },
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 4",
            content: "내용 4",
            writer: "이용상",
            createAt: "2020.10.07",
            number: 4,
        },
        {
            title: "2022 교육 빅테이터 응용 정보센터 소식 5",
            content: "내용 5",
            writer: "이용상",
            createAt: "2020.10.07",
            number: 5,
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
                {/*검색 필드*/}
                <form className='flex flex-col gap-y-7 border-t border-t-black bg-PRIMARY_COLOR/40 py-6'>
                    <div className='flex h-9 items-center'>
                        <div className='mx-6 w-16 text-lg font-light'>검색</div>
                        <select className='h-full border pl-2 pr-16'>
                            <option value='title '>제목</option>
                            <option value='content'>내용</option>
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
                        <tr className='bg-PRIMARY_COLOR/40 text-sm uppercase leading-normal text-gray-600'>
                            <th className='w-32 py-3 text-center'>번호</th>
                            <th className='py-3 text-center'>제목</th>
                            <th className='w-1/6 py-3 text-center'>작성자</th>
                            <th className='w-1/6 py-3 text-center'>등록일</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default Index;
