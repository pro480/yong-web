import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import Image from "next/image"
function Index() {
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
            <div className = "pb-12">
                <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                        Center Vision
                </h1>
            </div>

            {/* 비전 이미지 */}
            <div className = "flex justify-center h-[400px] w-[1000px] ml-12 rounded-[70px] bg-gray-200 ">
                <p className = "flex items-center text-2xl font-bold">
                    비전 이미지 입니다
                </p>
            </div>

            {/* 비전 설명 1, 2 ,3  */}
            <div className ="flex justify-center py-10 space-x-[50px] text-xl font-semibold">
                <div className = "box-content h-[400px] w-[300px] rounded-[70px] bg-gray-300">
                    <p className = "grid place-items-center py-[180px]">
                        비전 설명 1
                    </p>
                </div>

                <div className = "box-content h-[400px] w-[300px] rounded-[70px] bg-gray-400">
                    <p className = "grid place-items-center py-[180px]">
                        비전 설명 2
                    </p>
                </div>

                <div className = "box-content h-[400px] w-[300px] rounded-[70px] bg-gray-500">
                    <p className = "grid place-items-center py-[180px]">
                        비전 설명 3
                    </p>
                </div>
            </div>

            {/* 주요 기능 제목 */}
            <div className = "pb-12">
                <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                        Main Function
                </h1>
            </div>

            {/* 주요 기능 이미지 */}
            <div className = "flex justify-center h-[400px] w-[1000px] ml-12 rounded-[70px] bg-gray-200 ">
                <p className = "flex items-center text-2xl font-bold">
                    주요 기능 이미지 입니다
                </p>
            </div>

            {/* 주요 기능 설명 */}
            <div className="flex-col space-y-5 justify-center ml-12 mt-12 text-xl font-semibold text-left">
                {/* 기능 이름 */}
                    {/* 기능 설명 */}
                <div className = "flex-col">
                    <span className = "border-b-black border-b-[3px]"> &nbsp; 기능 이름 1 &nbsp;</span>
                    <div className = "flex justify-center pt-5 h-[100px] border-b-gray border-b-[2px] rounded-lg">
                        기능 설명을 입력해주세요
                    </div>
                </div>

                <div className = "flex-col">
                    <span className = "border-b-black border-b-[3px]"> &nbsp; 기능 이름 2 &nbsp;</span>
                    <div className = "flex justify-center pt-5 h-[100px] border-b-gray border-b-[2px] rounded-lg">
                        기능 설명을 입력해주세요
                    </div>
                </div>

                <div className = "flex-col">
                    <span className = "border-b-black border-b-[3px]"> &nbsp; 기능 이름 3 &nbsp;</span>
                    <div className = "flex justify-center pt-5 h-[100px] border-b-gray border-b-[2px] rounded-lg">
                        기능 설명을 입력해주세요
                    </div>
                </div>

                <div className = "flex-col">
                    <span className = "border-b-black border-b-[3px]"> &nbsp; 기능 이름 4 &nbsp;</span>
                    <div className = "flex justify-center pt-5 h-[100px] border-b-gray border-b-[2px] rounded-lg">
                        기능 설명을 입력해주세요
                    </div>
                </div>
            </div>
        
        
        </div>

    );
}

export default Index;
