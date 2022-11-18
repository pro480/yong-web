import React from "react";

import visionImage from "../../public/images/visionImage.png";
import Image from "next/image";

function Center_vision() {
    return (
            <div className='relative -top-10 aspect-[1/1.414] w-full'>
                <Image src={visionImage}  />
            </div>
    );
}

export default Center_vision;
