import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Mou() {
    const mouList = [
        {
            logo: "기관 1 로고",
            title: "기관 1",
            date: "2022-10-10",
            content: "협력 내용 1",
            href: "https://www.inha.ac.kr/",
        },
        {
            logo: "기관 2 로고",
            title: "기관 2",
            date: "2022-10-10",
            content: "협력 내용 2",
            href: "https://www.inha.ac.kr/",
        },
        {
            logo: "기관 3 로고",
            title: "기관 3",
            date: "2022-10-10",
            content: "협력 내용 3",
            href: "https://www.inha.ac.kr/",
        },
        {
            logo: "기관 4 로고",
            title: "기관 4",
            date: "2022-10-10",
            content: "협력 내용 4",
            href: "https://www.inha.ac.kr/",
        },
    ];

    return (
        <div>
            <PageTitle
                title='MOU 기관'
                description='MOU기관 페이지 설명을 입력해주세요'
                firstDepth='연구 및 사업'
                firstLink='/research'
                secondDepth='MOU 기관'
                secondLink='/research/mou'
            />
            <table className='w-full min-w-max table-auto border-t border-t-black'>
                <thead>
                    <tr className='bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                        <th className='w-2/5 py-3 px-6 text-left'>MOU 기관</th>
                        <th className='w-2/5 py-3 px-6 text-center'>
                            협력 내용
                        </th>
                        <th className='w-1/5 py-3 px-6 text-center'>체결일</th>
                    </tr>
                </thead>
                <tbody className='text-sm font-light text-gray-600'>
                    {mouList.map((mou, index) => (
                        <tr
                            className='border-b border-gray-200 hover:bg-gray-100'
                            key={index}
                        >
                            {/*<a*/}

                            {/*>*/}
                            <td className='flex items-center whitespace-nowrap py-3 px-6 text-left'>
                                <a
                                    href={mou.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex'
                                >
                                    <div className='flex h-16 w-52 items-center justify-center bg-gray-300'>
                                        {mou.logo}
                                    </div>
                                    <div className='flex items-center pl-8'>
                                        {mou.title}
                                    </div>
                                </a>
                            </td>
                            {/*</a>*/}
                            <td className='py-3 px-6 text-left'>
                                {mou.content}
                            </td>
                            <td className='py-3 px-6 text-center'>
                                {mou.date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Mou;
