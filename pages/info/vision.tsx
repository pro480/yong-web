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
            <div className='flex h-96 w-full items-center justify-center bg-PRIMARY_COLOR-50 '>
                비전 이미지 입니다
            </div>
        </div>
    );
}

export default Vision;
