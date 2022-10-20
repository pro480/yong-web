import React from "react";
import PageTitle from "../../src/components/PageTitle";
import Image from "next/image";
function Vision() {
    return (
        <div>
            <PageTitle
                title='센터 비전'
                description='센터 비전 페이지의 설명을 입력해주세요.
                비전 참고 사이트 : https://www.samchully.co.kr/company/info/philosophy.do?p=2'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 비전'
                secondLink='/info/vision'
            />

            {/* 비전 제목 */}
            <div className='pb-12'>
                <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR-500 pb-2 text-2xl font-semibold text-PRIMARY_COLOR-500'>
                    Center Vision
                </h1>
            </div>

            {/* 비전 이미지 */}
            <div className='ml-12 flex h-[400px] w-[1000px] justify-center rounded-[70px] bg-gray-200 '>
                <p className='flex items-center text-2xl font-bold'>
                    비전 이미지 입니다
                </p>
            </div>

            {/* 비전 설명 1, 2 ,3  */}
            <div className='flex justify-center space-x-[50px] py-10 text-xl font-semibold'>
                <div className='box-content h-[400px] w-[300px] rounded-[70px] bg-gray-300'>
                    <p className='grid place-items-center py-[180px]'>
                        비전 설명 1
                    </p>
                </div>

                <div className='box-content h-[400px] w-[300px] rounded-[70px] bg-gray-400'>
                    <p className='grid place-items-center py-[180px]'>
                        비전 설명 2
                    </p>
                </div>

                <div className='box-content h-[400px] w-[300px] rounded-[70px] bg-gray-500'>
                    <p className='grid place-items-center py-[180px]'>
                        비전 설명 3
                    </p>
                </div>
            </div>

            {/* 주요 기능 제목 */}
            <div className='pb-12'>
                <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR-500 pb-2 text-2xl font-semibold text-PRIMARY_COLOR-500'>
                    Main Function
                </h1>
            </div>

            {/* 주요 기능 이미지 */}
            <div className='ml-12 flex h-[400px] w-[1000px] justify-center rounded-[70px] bg-gray-200 '>
                <p className='flex items-center text-2xl font-bold'>
                    주요 기능 이미지 입니다
                </p>
            </div>

            {/* 주요 기능 설명 */}
            <div className='ml-12 mt-12 flex-col justify-center space-y-5 text-left text-xl font-semibold'>
                {/* 기능 이름 */}
                {/* 기능 설명 */}
                <div className='flex-col'>
                    <span className='border-b-[3px] border-b-black'>
                        {" "}
                        &nbsp; 기능 이름 1 &nbsp;
                    </span>
                    <div className='border-b-gray flex h-[100px] justify-center rounded-lg border-b-[2px] pt-5'>
                        기능 설명을 입력해주세요
                    </div>
                </div>

                <div className='flex-col'>
                    <span className='border-b-[3px] border-b-black'>
                        {" "}
                        &nbsp; 기능 이름 2 &nbsp;
                    </span>
                    <div className='border-b-gray flex h-[100px] justify-center rounded-lg border-b-[2px] pt-5'>
                        기능 설명을 입력해주세요
                    </div>
                </div>

                <div className='flex-col'>
                    <span className='border-b-[3px] border-b-black'>
                        {" "}
                        &nbsp; 기능 이름 3 &nbsp;
                    </span>
                    <div className='border-b-gray flex h-[100px] justify-center rounded-lg border-b-[2px] pt-5'>
                        기능 설명을 입력해주세요
                    </div>
                </div>

                <div className='flex-col'>
                    <span className='border-b-[3px] border-b-black'>
                        {" "}
                        &nbsp; 기능 이름 4 &nbsp;
                    </span>
                    <div className='border-b-gray flex h-[100px] justify-center rounded-lg border-b-[2px] pt-5'>
                        기능 설명을 입력해주세요
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;
