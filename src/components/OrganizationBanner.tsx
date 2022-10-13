import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
    title: string;
    description: string;
    image: StaticImageData;
}

function OrganizationBanner({ title, description, image }: Props) {
    return (
        <div className='relative mb-10 flex text-white'>
            {/*로고 투명도 조절*/}
            <div className='h-80 w-full bg-black/20'>
                {/*로고 사이즈*/}
                <div className='relative -z-10 flex h-80'>
                    <Image
                        src={image}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='로고'
                        priority={true}
                    />
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-5xl font-bold'>
                {title}
            </div>
            <div className='absolute bottom-1/4 left-1/2 -translate-x-1/2 transform font-bold'>
                {description}
            </div>
        </div>
    );
}

export default OrganizationBanner;
