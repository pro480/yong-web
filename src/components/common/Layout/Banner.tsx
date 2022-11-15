import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {getSecondDepthTitle_EN} from "../../../utils/Utils";

function Banner() {

    const path = useRouter().pathname.split("/");
    const [a, firstDepth, secondDepth, thirdDepth] = path;


    return (
        <div className='relative mb-6 flex text-white'>
            {/*로고 투명도 조절*/}
            <div className='h-fit w-full bg-black/50'>
                {/*로고 사이즈*/}
                <div className='relative -z-10 flex h-48 md:h-60 lg:h-64 desktop:h-72'>
                    <Image
                        src={`/images/banner/${firstDepth}Banner.jpg`}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='로고'
                        priority={true}
                        quality={75}
                    />
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR-500 pb-3 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl'>
                {getSecondDepthTitle_EN(secondDepth)}
            </div>
        </div>
    );
}

export default Banner;
