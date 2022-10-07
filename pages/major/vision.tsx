import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Vision() {
    return (
        <div>
            <PageTitle
                title='졸업 후 진로'
                description='졸업 후 진로에 대한 description'
                firstDepth='전공 소개'
                firstLink='/major'
                secondDepth='졸업 후 진로'
                secondLink='/major/vision'
            />

            {/* 비전 제목 */}
            <div className='pb-12'>
                <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                    Vision
                </h1>
            </div>

            {/* 비전 설명 1, 2 ,3  */}
            <div className='flex-col py-5 text-xl font-semibold'>
                <div className='my-7 h-[150px] flex-col rounded-[50px] border-r-8 border-b-8'>
                    <div className='mt-5 ml-5 text-2xl underline underline-offset-2'>
                        첫번째 진로
                    </div>
                    <div className='mt-5 ml-5'>
                        첫 번째 진로에 대한 설명이 들어갑니다.
                    </div>
                </div>
                <p className='h-full w-[8%] whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR pb-5 font-semibold text-PRIMARY_COLOR'></p>
            </div>
            <div className='flex-col py-5 text-xl font-semibold'>
                <div className='my-7 h-[150px] flex-col rounded-[50px] border-r-8 border-b-8'>
                    <div className='mt-5 ml-5 text-2xl underline underline-offset-2'>
                        두 번째 진로
                    </div>
                    <div className='mt-5 ml-5'>
                        두 번째 진로에 대한 설명이 들어갑니다.
                    </div>
                </div>
                <p className='h-full w-[8%] whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR pb-5 font-semibold text-PRIMARY_COLOR'></p>
            </div>
            <div className='flex-col py-5 text-xl font-semibold'>
                <div className='my-7 h-[150px] flex-col rounded-[50px] border-r-8 border-b-8'>
                    <div className='mt-5 ml-5 text-2xl underline underline-offset-2'>
                        세번째 진로
                    </div>
                    <div className='mt-5 ml-5'>
                        세 번째 진로에 대한 설명이 들어갑니다.
                    </div>
                </div>
                <p className='h-full w-[8%] whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR pb-5 font-semibold text-PRIMARY_COLOR'></p>
            </div>
            <div className='flex-col py-5 text-xl font-semibold'>
                <div className='my-7 h-[150px] flex-col rounded-[50px] border-r-8 border-b-8'>
                    <div className='mt-5 ml-5 text-2xl underline underline-offset-2'>
                        네번째 진로
                    </div>
                    <div className='mt-5 ml-5'>
                        네 번째 진로에 대한 설명이 들어갑니다.
                    </div>
                </div>
                <p className='h-full w-[8%] whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR pb-5 font-semibold text-PRIMARY_COLOR'></p>
            </div>
            <div className='flex-col py-5 text-xl font-semibold'>
                <div className='my-7 h-[150px] flex-col rounded-[50px] border-r-8 border-b-8'>
                    <div className='mt-5 ml-5 text-2xl underline underline-offset-2'>
                        다섯 번째 진로
                    </div>
                    <div className='mt-5 ml-5'>
                        다섯 번째 진로에 대한 설명이 들어갑니다.
                    </div>
                </div>
                <p className='h-full w-[8%] whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR pb-5 font-semibold text-PRIMARY_COLOR'></p>
            </div>
            <div className='flex-col py-5 text-xl font-semibold'>
                <div className='my-7 h-[150px] flex-col rounded-[50px] border-r-8 border-b-8'>
                    <div className='mt-5 ml-5 text-2xl underline underline-offset-2'>
                        여섯번째 진로
                    </div>
                    <div className='mt-5 ml-5'>
                        여섯 번째 진로에 대한 설명이 들어갑니다.
                    </div>
                </div>
                <p className='h-full w-[8%] whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR pb-5 font-semibold text-PRIMARY_COLOR'></p>
            </div>
            <div className='flex-col py-5 text-xl font-semibold'>
                <div className='my-7 h-[150px] flex-col rounded-[50px] border-r-8 border-b-8'>
                    <div className='mt-5 ml-5 text-2xl underline underline-offset-2'>
                        일곱 번째 진로
                    </div>
                    <div className='mt-5 ml-5'>
                        일곱 번째 진로에 대한 설명이 들어갑니다.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;
