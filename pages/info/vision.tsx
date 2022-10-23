import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import dummyImage from "../../public/dummy.png";
import Image from "next/image";

function Vision() {
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
            <div className='relative h-[500px] w-full'>
                <Image src={dummyImage} layout='fill' />
            </div>
        </div>
    );
}

export default Vision;
