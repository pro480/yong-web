import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Mou() {
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
            <table className='w-full min-w-max table-auto'>
                <thead>
                    <tr className='bg-PRIMARY_COLOR/40 text-sm uppercase leading-normal text-gray-600'>
                        <th className='w-2/5 py-3 px-6 text-left'>MOU 기관</th>
                        <th className='w-1/5 py-3 px-6 text-center'>체결일</th>
                        <th className='w-2/5 py-3 px-6 text-center'>
                            협력 내용
                        </th>
                    </tr>
                </thead>
                <tbody className='text-sm font-light text-gray-600'>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='flex items-center whitespace-nowrap py-3 px-6 text-left'>
                            <div className='flex h-16 w-52 items-center justify-center bg-gray-300'>
                                기관 로고
                            </div>
                            <div className='pl-8'>기관 1</div>
                        </td>
                        <td className='py-3 px-6 text-center'>체결일 1</td>
                        <td className='py-3 px-6 text-center'>협력 내용 1</td>
                    </tr>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='flex items-center whitespace-nowrap py-3 px-6 text-left'>
                            <div className='flex h-16 w-52 items-center justify-center bg-gray-300'>
                                기관 로고
                            </div>
                            <div className='pl-8'>기관 2</div>
                        </td>
                        <td className='py-3 px-6 text-center'>체결일 2</td>
                        <td className='py-3 px-6 text-center'>협력 내용 2</td>
                    </tr>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='flex items-center whitespace-nowrap py-3 px-6 text-left'>
                            <div className='flex h-16 w-52 items-center justify-center bg-gray-300'>
                                기관 로고
                            </div>
                            <div className='pl-8'>기관 3</div>
                        </td>
                        <td className='py-3 px-6 text-center'>체결일 3</td>
                        <td className='py-3 px-6 text-center'>협력 내용 3</td>
                    </tr>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='flex items-center whitespace-nowrap py-3 px-6 text-left'>
                            <div className='flex h-16 w-52 items-center justify-center bg-gray-300'>
                                기관 로고
                            </div>
                            <div className='pl-8'>기관 4</div>
                        </td>
                        <td className='py-3 px-6 text-center'>체결일 4</td>
                        <td className='py-3 px-6 text-center'>협력 내용 4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Mou;
