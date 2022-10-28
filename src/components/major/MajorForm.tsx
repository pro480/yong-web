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
            <div className=' h-44 xs:h-[250px] md:h-80 lg:h-96 xl:h-[450px] desktop:h-[450px]'>
                <div className='relative flex h-32 items-center justify-center bg-gray-300 xs:h-[180px] md:h-56 lg:h-64 xl:h-72 desktop:h-72'>
                    <Image src={image} layout='fill' />
                    <div
                        className='absolute 
                     -bottom-6 left-8 flex h-12 w-[120px] flex-col items-center justify-center gap-y-1 bg-PRIMARY_COLOR-500 xs:-bottom-8 xs:left-10 xs:h-16 xs:w-[160px] xs:gap-y-2 md:-bottom-12 md:left-16 md:h-24 md:w-[280px] md:gap-y-4 lg:-bottom-16 lg:left-20 lg:h-32 lg:w-[360px] lg:gap-y-6 xl:-bottom-[80px] desktop:-bottom-[80px] desktop:left-32 desktop:h-[160px] desktop:w-[500px] desktop:gap-y-8'
                    >
                        <h1 className=' lg:test-xl text-[5px]   font-semibold text-white xs:text-sm md:text-lg xl:text-2xl desktop:text-2xl'>
                            {bannertitle}
                        </h1>
                        <p className='text-[3px] text-white xs:text-[10px] md:text-[12px] lg:text-sm desktop:text-base xl:desktop:text-base'>
                            {bannercontex}
                        </p>
                    </div>
                </div>
            </div>
            {/*내용*/}
            <main className='flex flex-col'>
                {/*소개*/}
                <div className='flex h-16 border-[0.5px] xs:h-24 xs:border-[1px] md:h-36 md:border-2 lg:h-44 lg:border-[3px] desktop:h-52 desktop:border-4'>
                    <DocumentDuplicateIcon className='mx-2 my-1 w-4 self-start rounded-full bg-gray-100 xs:mx-4 xs:my-1 xs:w-8 md:mx-7 md:my-2 md:w-16 lg:mx-10 lg:my-3 lg:w-20 desktop:mx-12 desktop:my-4 desktop:w-28' />
                    <div className='py-1 xs:py-2 md:py-4 lg:py-5 desktop:py-6'>
                        <h1 className='mb-1 text-[10px] font-bold xs:mb-2 xs:text-base md:mb-3 md:text-xl lg:mb-4 lg:text-2xl desktop:mb-5 desktop:text-3xl'>
                            소개
                        </h1>
                        <p className='text-[5px] xs:text-[8px] md:text-[12px] lg:text-[14px] desktop:text-base'>
                            {introcontex}
                        </p>
                    </div>
                </div>
                {/*전망*/}
                <div className='lg-mt-4 mt-1 flex h-16 border-[0.5px] xs:mt-2 xs:h-24 xs:border-[1px] md:mt-3 md:h-36 md:border-2 lg:h-44 lg:border-[3px] desktop:mt-5 desktop:h-52 desktop:border-4'>
                    <DocumentDuplicateIcon className='mx-2 my-1 w-4 self-start rounded-full bg-gray-100 xs:mx-4 xs:my-1 xs:w-8 md:mx-7 md:my-2 md:w-16 lg:mx-10 lg:my-3 lg:w-20 desktop:mx-12 desktop:my-4 desktop:w-28' />
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
