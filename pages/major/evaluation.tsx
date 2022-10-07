import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Evaluation() {
    return (
        <div>
            <PageTitle
                title='교육 평가'
                description='교육 평가에 대한 설명란입니다.'
                firstDepth='전공 소개'
                firstLink='/major'
                secondDepth='교육 평가'
                secondLink='/major/evaluation'
            />

            <div className='bg-gray-300 py-20 text-center text-2xl font-bold'>
                <div></div>
                <div>교육 평가 설명란입니다.</div>
            </div>
            <hr className='mt-10 border-dashed border-gray-400' />

            <div className='my-12 w-full flex-col'>
                <div className='h-full w-full '>
                    <div className='mt-3  h-96 p-5'>
                        <p className='text-2xl font-semibold underline underline-offset-4'>
                            평가1
                        </p>
                        <p className='mt-3 text-xl font-normal'>
                            첫번째 케이스에 대한 평가 text
                        </p>
                    </div>
                    <hr className='border-dashed border-gray-400' />
                    <div className='mt-10  h-96 p-5'>
                        <p className='text-2xl font-semibold underline underline-offset-4'>
                            평가2
                        </p>
                        <p className='mt-3 text-xl font-normal'>
                            두번째 케이스에 대한 평가 text
                        </p>
                    </div>
                    <hr className='border-dashed border-gray-400' />
                    <div className='mt-10 h-96 p-5'>
                        <p className='text-2xl font-semibold underline underline-offset-4'>
                            평가3
                        </p>
                        <p className='mt-3 text-xl font-normal'>
                            세번째 케이스에 대한 평가 text
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Evaluation;
