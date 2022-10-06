import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import Image from "next/image"
function Index() {
    return (
        <div>
            <PageTitle
                title='센터 비전'
                description='센터 비전 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 비전'
                secondLink='/info/vision'
            />

            {/* 비전 이미지 */}
            <div className = "flex justify-center">
                <Image
                    src='https://bit.ly/3MfbAnQ'
                    width={800}
                    height={350}
                    alt='센터 비전 이미지'
                    className=""
                />
                <p className = "flex absolute h-[150px] items-center justify-start text-2xl font-bold">
                    비전 및 기능 예시 이미지 입니다
                </p>
            </div>

            {/* 비전 설명 1, 2 ,3  */}
            <div className ="flex justify-center py-10 space-x-[50px] text-xl font-semibold">
                <div className = "box-content h-[400px] w-[280px] rounded-[70px] bg-[#7EB92C]">
                    <p className = "grid place-items-center py-[180px]">
                        비전 * 기능 내용 1
                    </p>
                </div>

                <div className = "box-content h-[400px] w-[280px] rounded-[70px] bg-[#21B0A3]">
                    <p className = "grid place-items-center py-[180px]">
                        비전 * 기능 내용 2
                    </p>
                </div>

                <div className = "box-content h-[400px] w-[280px] rounded-[70px] bg-[#1D9EC0]">
                    <p className = "grid place-items-center py-[180px]">
                        비전 * 기능 내용 3
                    </p>
                </div>

            </div>
        </div>

    );
}

export default Index;
