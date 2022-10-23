import React from "react";
import {ClockIcon} from "@heroicons/react/24/outline";

function MainForum() {
    return (
        <div className='flex h-[700px] w-screen items-center border'>
            <div className='left-0 flex h-full w-full gap-x-8 p-20'>
                <div className='flex h-full w-[75%] items-center justify-center bg-gray-500'>
                    이곳은 포럼 사진이 들어가는 공간입니다
                </div>
                <div className='relative h-full w-[40%] border border-[#0096f5]'>
                    <div className='flex h-full flex-col gap-y-10 px-20 py-14'>
                        <div className='border-b-2 border-b-[#0096f5] pb-5 text-2xl font-semibold'>
                            2022년 제 1회 학습 포럼
                        </div>
                        <div className='font-bold'>Article Title</div>
                        <div className='h-full'>
                            이곳은 포럼의 본문 내용이 들어가는 공간입니다.
                        </div>
                        <div className='flex w-full justify-end text-gray-500'>
                            <ClockIcon className='h-6'/>
                            <div>2022-12-12</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainForum;
