import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import dummyImage from "../../public/dummy.png";
import Image from "next/image";

function Vision() {
    return (
        <div>


            {/* 비전 이미지 */}
            <div className='relative h-[500px] w-full'>
                <Image src={dummyImage} layout='fill' />
            </div>
        </div>
    );
}

export default Vision;
