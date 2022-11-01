import React from "react";

import dummyImage from "../../public/dummy.png";
import Image from "next/image";

function Vision() {
    return (
        <div>
            {/* 비전 이미지 */}
            <div className='relative aspect-[16/9] w-full'>
                <Image src={dummyImage} layout='fill' />
            </div>
        </div>
    );
}

export default Vision;
