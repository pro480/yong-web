import React from "react";

import visionImage from "../../public/images/visionImage.png";
import Image from "next/image";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Center_vision() {
    return (
            <div className='relative -top-10 aspect-[1/1.414] w-full'>
                <HeadMeta title={"EBA | 센터 비전"} description={"EBA센터 비전"}/>
                <Image src={visionImage}  />
            </div>
    );
}

export default Center_vision;
