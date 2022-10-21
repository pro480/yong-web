import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
    title: string;
    image: StaticImageData;
}

function MajorBanner({ title, image }: Props) {
    return (
        <div className='relative mb-10 flex text-white'>
            {/*로고 투명도 조절*/}
            <div className="bg-black/20">
                {/*로고 사이즈*/}
                <div className='relative -z-10 flex w-full h-full'>
                    <Image
                        width=''
                        height=''
                        src={image}
                        objectFit='cover'
                        alt='로고'
                        priority={true}
                        quality={100}
                    />
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-5xl font-bold'>
                {title}
            </div>
        </div>
    );
}

export default MajorBanner;