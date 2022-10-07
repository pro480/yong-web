import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Index() {
    return (
        <div>
            <PageTitle
                title='에듀 데이터 사이언스'
                description='전공 소개 페이지입니다.'
                firstDepth='전공 소개'
                firstLink='/major'
                secondDepth='에듀 데이터 사이언스'
                secondLink='/major/index'
            />
            <div className='w-[100%] py-12'>
                <div className='flex h-96 w-full items-center justify-center rounded-[50px] border bg-blue-100 p-5'>
                    <div className='text-2xl font-semibold'>
                        사진을 넣어 주세요
                    </div>
                </div>
            </div>

            <hr className='border-dashed border-gray-400' />
            <div className='py-20 text-center text-2xl font-bold'>
                에듀-데이터 사이언스에 대한 설명이 들어갑니다.
            </div>
            <hr className='border-dashed border-gray-400' />

            <div className='my-12 w-full flex-col border-2'>
                <div className='h-96 border-2 p-5'>
                    <p className='text-xl font-semibold underline underline-offset-4'>
                        첫번째 주제
                    </p>
                    <p className='mt-1 text-2xl font-normal'>
                        첫번째 주제에 대한 내용 설명입니다.
                    </p>
                </div>

                <div className='h-96 border-2 p-5'>
                    <p className='text-xl font-semibold underline underline-offset-4'>
                        두번째 내용
                    </p>
                    <p className='mt-1 text-2xl font-normal'>
                        두번째 내용에 대한 설명입니다.
                    </p>
                </div>
                <div className='h-96 border-2 p-5'>
                    <p className='text-xl font-semibold underline underline-offset-4'>
                        세번째 내용
                    </p>
                    <p className='mt-1 text-2xl font-normal'>
                        세번째 내용에 대한 설명입니다.
                    </p>
                </div>

                <div className='h-96 border-2 p-5'>
                    <p className='text-xl font-semibold underline underline-offset-4'>
                        네번째 내용
                    </p>
                    <p className='mt-1 text-2xl font-normal'>
                        네번째 내용에 대한 설명입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Index;
