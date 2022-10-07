import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Measurement() {
    return (
        <div>
            <PageTitle
                title='교육 측정'
                description='교육 측정에 대한 설명란입니다.'
                firstDepth='전공 소개'
                firstLink='/major'
                secondDepth='교육 측정'
                secondLink='/major/measurement'
            />

            <div className='bg-gray-300 py-20 text-center text-2xl font-bold'>
                <div></div>
                <div>교육 측정 설명란입니다.</div>
            </div>
            <hr className='mt-10 border-dashed border-gray-400' />

            <div className='my-12 w-full flex-col'>
                <div className='h-full w-full '>
                    <div className='mt-3  h-96 p-5'>
                        <p className='text-2xl font-semibold underline underline-offset-4'>
                            1st Case
                        </p>
                        <p className='mt-3 text-xl font-normal'>
                            선형 회귀로 측정
                        </p>
                    </div>
                    <hr className='border-dashed border-gray-400' />
                    <div className='mt-10  h-96 p-5'>
                        <p className='text-2xl font-semibold underline underline-offset-4'>
                            2nd Case
                        </p>
                        <p className='mt-3 text-xl font-normal'>분류로 측정</p>
                    </div>
                    <hr className='border-dashed border-gray-400' />
                    <div className='mt-10 h-96 p-5'>
                        <p className='text-2xl font-semibold underline underline-offset-4'>
                            3rd Case
                        </p>
                        <p className='mt-3 text-xl font-normal'>
                            강화학습으로 측정
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Measurement;
