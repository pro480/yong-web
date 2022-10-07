import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import Image from "next/image";

function Purpose() {
    return (
        <div>
            <PageTitle
                title='설립 목적'
                description='설립 목적 페이지의 설명을 입력해주세요.//
                따옴표 이미지 출처 : https://www.pngall.com/quotation-symbol-png // 
                설립목적 및 비전 참고 페이지 : https://sj.pass.or.kr/menu.es?mid=a10102000000'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 비전'
                secondLink='/info/vision'
                thirdDepth='설립 목적'
                thirdLink='/info/vision/purpose'
            />

            {/* 설립 목적 내용 */}
            <div>
                <div className='ml-[80px] flex h-[400px] w-[1000px] justify-center rounded-[70px] bg-gray-200 '>
                    <p className='flex items-center text-2xl font-bold'>
                        설립 목적 이미지 입니다
                    </p>
                </div>

                {/* 설립 목적 헤드라인 */}
                <div className='ml-12 flex items-center justify-center py-20 text-2xl font-bold'>
                    <Image
                        src='https://bit.ly/3ykuLqA'
                        alt='큰 따옴표 아이콘'
                        width={40}
                        height={30}
                        className=''
                    />
                    <p className='ml-5 mr-5'>설립 목적 헤드라인입니다</p>

                    <Image
                        src='https://bit.ly/3ykuLqA'
                        alt='큰 따옴표 아이콘'
                        width={40}
                        height={30}
                        className='rotate-180'
                    />
                </div>

            </div>  
            {/* 설립 목적 설명 */}
            <div className="ml-5 grid grid-cols-2 gap-6 place-content-around">
                <span className="flex justify-center items-center h-[150px] border-[5px] rounded-[70px]">설명 1</span>
                <span className="flex justify-center items-center h-[150px] border-[5px] rounded-[70px]">설명 2</span>
                <span className="flex justify-center items-center h-[150px] border-[5px] rounded-[70px]">설명 3</span>
                <span className="flex justify-center items-center h-[150px] border-[5px] rounded-[70px]">설명 4</span>
            </div>
        </div>
    );
}

export default Purpose;
