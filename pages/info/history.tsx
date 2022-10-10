import React from "react";
import PageTitle from "../../src/components/PageTitle";

function History() {
    return (
        <div>
            <PageTitle
                title='센터 연혁'
                description='센터 연혁 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 연혁'
                secondLink='/info/history'
            />
            <div className='flex h-[200px] items-center justify-center bg-gray-300'>
                연구소의 이미지를 넣어주세요
            </div>
            <section className='my-12 flex border-b'>
                <h1 className='pl-10 pr-32 text-2xl font-bold'>2022</h1>
                <div>
                    <div className='mb-8 flex h-fit items-center'>
                        <div className='mr-5 text-lg font-semibold text-gray-700'>
                            03월
                        </div>
                        연혁을 입력해주세요.
                    </div>
                    <div className='mb-8 flex h-fit items-center'>
                        <div className='mr-5 text-lg font-semibold text-gray-700'>
                            06월
                        </div>
                        연혁을 입력해주세요.
                    </div>
                </div>
            </section>
            <section className='my-12 flex border-b'>
                <h1 className='pl-10 pr-32 text-2xl font-bold'>2021</h1>
                <div>
                    <div className='mb-8 flex h-fit items-center'>
                        <div className='mr-5 text-lg font-semibold text-gray-700'>
                            03월
                        </div>
                        연혁을 입력해주세요.
                    </div>
                    <div className='mb-8 flex h-fit items-center'>
                        <div className='mr-5 text-lg font-semibold text-gray-700'>
                            06월
                        </div>
                        연혁을 입력해주세요.
                    </div>
                </div>
            </section>
            <section className='my-12 flex border-b'>
                <h1 className='pl-10 pr-32 text-2xl font-bold'>2020</h1>
                <div>
                    <div className='mb-8 flex h-fit items-center'>
                        <div className='mr-5 text-lg font-semibold text-gray-700'>
                            03월
                        </div>
                        연혁을 입력해주세요.
                    </div>
                    <div className='mb-8 flex h-fit items-center'>
                        <div className='mr-5 text-lg font-semibold text-gray-700'>
                            06월
                        </div>
                        연혁을 입력해주세요.
                    </div>
                </div>
            </section>
        </div>
    );
}

export default History;
