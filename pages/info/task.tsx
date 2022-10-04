import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Task() {
    return (
        <div>
            <PageTitle
                title='주요 수행 업무'
                description='주요 수행 업무 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='주요 수행 업무'
                secondLink='/info/task'
            />
            <div className='flex w-full py-12'>
                <div className='h-44 w-44 border border-8 p-5'>
                    <p className='text-lg font-semibold underline underline-offset-4'>
                        NO 1
                    </p>
                    <p className='mt-1 text-2xl font-semibold'>업무 1</p>
                </div>
                <div className='ml-10'>내용을 입력해주세요</div>
            </div>
            <hr className='border-dashed border-gray-400' />
            <div className='flex h-full py-12'>
                <div className='h-44 w-44 border border-8 p-5'>
                    <p className='text-lg font-semibold underline underline-offset-4'>
                        NO 2
                    </p>
                    <p className='mt-1 text-2xl font-semibold'>업무 2</p>
                </div>
                <div className='ml-10'>내용을 입력해주세요</div>
            </div>
            <hr className='border-dashed border-gray-400' />
            <div className='flex h-full py-12'>
                <div className='h-44 w-44 border border-8 p-5'>
                    <p className='text-lg font-semibold underline underline-offset-4'>
                        NO 3
                    </p>
                    <p className='mt-1 text-2xl font-semibold'>업무 3</p>
                </div>
                <div className='ml-10'>내용을 입력해주세요</div>
            </div>
        </div>
    );
}

export default Task;
