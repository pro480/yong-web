import React from "react";

import dummyImage from "../../public/dummy.png";
import Image from "next/image";

function Vision() {
    return (
        <div>
            {/* 비전 이미지 */}
            <div className='relative aspect-[8/5] w-[100%]'>
                <Image src={dummyImage} layout='fill' />
            </div>
        </div>
    );
}

export default Vision;
