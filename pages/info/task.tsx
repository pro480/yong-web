import React from "react";
import PageTitle from "../../src/components/PageTitle";
import Image from "next/image";

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
                <div className='relative h-52 w-52 p-5'>
                    <Image
                        src="https://bit.ly/3TgcItU"
                        alt="교육데이터 분석 이미지"
                        layout="fill"
                    />
                </div>
                <div className='ml-10'>내용을 입력해주세요</div>
            </div>
            <hr className='border-dashed border-gray-400' />
            <div className='flex h-full py-12'>
                <div className='relative h-52 w-52 border-8 p-5'>
                    <Image
                        src="https://bit.ly/3SoQ5lD"
                        alt="교육데이터 분석 이미지"
                        layout="fill"
                    />
                </div>
                <div className='ml-10'>내용을 입력해주세요</div>
            </div>
            <hr className='border-dashed border-gray-400' />
            <div className='flex h-full py-12'>
                <div className='relative h-52 w-52 border-8 p-5'>
                    <Image
                        src="https://bit.ly/2DHOHYB"
                        alt="교육데이터 분석 이미지"
                        layout="fill"
                    />
                </div>
                <div className='ml-10'>내용을 입력해주세요</div>
            </div>
        </div>
    );
}

export default Task;
