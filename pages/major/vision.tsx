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
                <div className='my-10 box-content flex h-[400px] rounded-[70px] border-r-8 border-b-8'>
                    <div className='box-content w-1/3 rounded-[60px] bg-gray-200'>
                        <div className='grid place-items-center py-[180px]'>
                            진로 이미지 1
                        </div>
                    </div>

                    <div className='relative flex'>
                        <div className='mt-10 ml-10 underline underline-offset-2'>
                            첫번째 진로
                        </div>
                        <div className='flex items-center'>
                            첫 번째 진로에 대한 설명이 들어갑니다.
                        </div>
                    </div>
                </div>
                <div className='my-10 box-content flex h-[400px] rounded-[70px] border-r-8 border-b-8 border-gray-300'>
                    <div className='box-content w-1/3 rounded-[60px] bg-gray-300'>
                        <div className='grid place-items-center py-[180px]'>
                            진로 이미지 2
                        </div>
                    </div>

                    <div className='relative flex'>
                        <div className='mt-10 ml-10 underline underline-offset-2'>
                            두번째 진로
                        </div>
                        <div className='flex items-center'>
                            두 번째 진로에 대한 설명이 들어갑니다
                        </div>
                    </div>
                </div>
                <div className='my-10 box-content flex h-[400px] rounded-[70px] border-r-8 border-b-8 border-gray-400'>
                    <div className='box-content w-1/3 rounded-[60px] bg-gray-400'>
                        <div className='grid place-items-center py-[180px]'>
                            진로 이미지 3
                        </div>
                    </div>

                    <div className='relative flex'>
                        <div className='mt-10 ml-10 underline underline-offset-2'>
                            세 번째 진로
                        </div>
                        <div className='flex items-center'>
                            세 번째 진로에 대한 설명이 들어갑니다
                        </div>
                    </div>
                </div>
                <div className='my-10 box-content flex h-[400px] rounded-[70px] border-r-8 border-b-8 border-gray-500'>
                    <div className='box-content w-1/3 rounded-[60px] bg-gray-500'>
                        <div className='grid place-items-center py-[180px]'>
                            진로 이미지 4
                        </div>
                    </div>

                    <div className='relative flex'>
                        <div className='mt-10 ml-10 underline underline-offset-2'>
                            네번째 진로
                        </div>
                        <div className='flex items-center'>
                            네 번째 진로에 대한 설명이 들어갑니다
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;
