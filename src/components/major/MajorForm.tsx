import React from "react";
import Image, { StaticImageData } from "next/image";
import {
    DocumentDuplicateIcon,
    PresentationChartBarIcon,
    PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

interface Props {
    bannertitle: string;
    bannercontex: string;
    image: StaticImageData;
    introcontex: string;
    prospectcontex: string;
}

function MajorForm({
    bannertitle,
    bannercontex,
    image,
    introcontex,
    prospectcontex,
}: Props) {
    return (
        <div>
            {/*배너*/}
            <div className=' aspect-[5/2] w-[100%] '>
                <div className='relative flex h-2/3 items-center justify-center  '>
                    {/*배너사진*/}
                    <Image src={image} layout='fill' />
                    {/*배너글상자*/}
                    <div
                        className='absolute 
                        -bottom-1/4 left-[10%] flex aspect-[4/1] h-1/2 flex-col items-center justify-center gap-y-1 bg-PRIMARY_COLOR-500  xs:gap-y-2   md:gap-y-4   lg:gap-y-6  desktop:gap-y-8'
                    >
                        <h1 className='text-[5px]   font-semibold text-white xs:text-sm md:text-lg lg:text-xl desktop:text-2xl'>
                            {bannertitle}
                        </h1>
                        <p className='hidden text-white xs:flex xs:text-[10px] md:text-[12px] lg:text-sm xl:desktop:text-base desktop:text-base'>
                            {bannercontex}
                        </p>
                    </div>
                </div>
            </div>
            {/*내용*/}
            <main className='flex flex-col'>
                {/*소개*/}
                <div className='flex h-16 border-[0.5px] xs:h-24 xs:border-[1px] md:h-36 md:border-2 lg:h-44 lg:border-[3px] desktop:h-52 desktop:border-4'>
                    <DocumentDuplicateIcon className='invisible mx-2 my-1 w-4 self-start rounded-full bg-gray-100 xs:visible xs:mx-4 xs:my-1 xs:w-8 md:mx-7 md:my-2 md:w-16 lg:mx-10 lg:my-3 lg:w-20 desktop:mx-12 desktop:my-4 desktop:w-28' />
                    <div className='py-1 xs:py-2 md:py-4 lg:py-5 desktop:py-6'>
                        <h1 className='mb-1 text-[10px] font-bold xs:mb-2 xs:text-base md:mb-3 md:text-xl lg:mb-4 lg:text-2xl desktop:mb-5 desktop:text-3xl'>
                            소개
                        </h1>
                        <p className='text-[5px] xs:text-[10px] md:text-[12px] lg:text-[14px] desktop:text-base'>
                            {introcontex}
                        </p>
                    </div>
                </div>
                {/*전망*/}
                <div className='lg-mt-4 mt-1 flex h-16 border-[0.5px] xs:mt-2 xs:h-24 xs:border-[1px] md:mt-3 md:h-36 md:border-2 lg:h-44 lg:border-[3px] desktop:mt-5 desktop:h-52 desktop:border-4'>
                    <DocumentDuplicateIcon className='invisible mx-2 my-1 w-4 self-start rounded-full bg-gray-100 xs:visible xs:mx-4 xs:my-1 xs:w-8 md:mx-7 md:my-2 md:w-16 lg:mx-10 lg:my-3 lg:w-20 desktop:mx-12 desktop:my-4 desktop:w-28' />
                    <div className='py-1 xs:py-2 md:py-4 lg:py-5 desktop:py-6'>
                        <h1 className='mb-1 text-[10px] font-bold xs:mb-2 xs:text-base md:mb-3 md:text-xl lg:mb-4 lg:text-2xl desktop:mb-5 desktop:text-3xl'>
                            전망
                        </h1>
                        <p className='text-[5px] xs:text-[8px] md:text-[12px] lg:text-[14px] desktop:text-base'>
                            {prospectcontex}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MajorForm;
