import React from "react";
import Image from "next/image";
import PageTitle from "../../src/components/PageTitle";

function Index() {

    return (
        <div>
            <div>
                <PageTitle
                    title='센터장 소개'
                    description=" 센터장 소개 페이지에 대한 설명을 입력해주세요 "
                    firstDepth="센터 소개"
                    firstLink="/info"
                    secondDepth="센터장 소개"
                    secondLink="/info"
                />

                {/* 센터장 사진 */}
                <div className='flex justify-center items-center space-x-20'>
                    <Image
                            src='https://bit.ly/3rDncHH'
                            width={300}
                            height={350}
                            alt='센터장 사진'
                    />

                    {/* 약력 */}
                    <div className="flex-col text-xl px-[80px] space-y-[30px] ">
                        <p className="flex justify-start px-4 py-3 space-x-[120px] border-black border-b-[3px]">
                            <p className = "py-2">직책</p>
                            <p className="text-3xl">이름</p>
                        </p>
                        <div className = "flex-col text-lg space-y-2 items-center">
                            
                            <ul>2000 ~ 2011 &nbsp; UC Berkeley BEAR 센터 PostDoc</ul>
                            <ul>2000 ~ 2011 &nbsp; 한국교육과정평가원 실장</ul>
                            <ul>2000 ~ 2011 &nbsp; 한국교육평가학회 이사</ul>
                            <ul>2000 ~ 2011 &nbsp; 국회미래연구원 연구원</ul>
                            <ul>2000 ~ 2011 &nbsp; 영남대학교 교육학과 조교수</ul>
                            <ul>2000 ~ 2011 &nbsp; 개인정보보호법학회 이사</ul>
                            <ul>2000 ~ 2011 &nbsp; 인하대학교 교육학과 교수</ul>
                        </div>
                    </div>
                </div>

                {/* 인사말 */}
                <div className="h-10 mt-10 text-2xl font-bold border-black border-b-[2px]">
                    센터장 인삿말
                </div>

                <div className="flex mt-10">
                    <p className ="h-10 text-3xl font-bold"> 
                        &quot;Test&quot;, 센터장 인사말입니다. 인사말을 작성해주세요
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Index;
