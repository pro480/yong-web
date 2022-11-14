import React from "react";

import visionImage from "../../public/images/visionImage.png";
import Image from "next/image";

function Center_vision() {
    return (
        <div>
            {/* 비전 이미지 */}
            <div className='relative aspect-[1/1.414] w-[100%] -top-10'>
                <Image src={visionImage} layout='fill' />
            </div>
        </div>
    );
}

export default Center_vision;
