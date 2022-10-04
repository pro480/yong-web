import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";

function Banner() {
    return (
        <div className='flex h-[700px] w-screen items-center justify-center border '>
            <ChevronLeftIcon className='absolute left-0 h-20'/>
            <div className='flex h-full w-full items-center justify-center bg-gray-300'>
                배너 이미지를 넣어주세요
            </div>
            <div className='absolute right-60'>
                <div className='text-2xl font-semibold'>
                    배너 제목을 넣어주세요
                </div>
                <div className='py-4 text-xl'>-------------------</div>
                <div>
                    이곳은 배너 설명란 입니다 <br/> 배너 설명을 넣어주세요
                </div>
                <button className='mt-3 rounded-md border bg-black px-3 py-1 text-white'>
                    Learn More
                </button>
            </div>
            <ChevronRightIcon className='absolute right-0 h-20'/>
        </div>
    );
}

export default Banner;
