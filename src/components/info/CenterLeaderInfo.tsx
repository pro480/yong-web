import React from "react";
import Image from "next/image";
import symbolImage from "../../../public/images/logo/symbol_outline.png";
import logo_EN from "../../../public/images/logo/logo_EN.png";
import centerLeaderImage from "../../../public/images/centerLeader.png";
import triangle from "../../../public/images/triangle.png";
import { useTranslation } from "next-i18next";

function CenterLeaderInfo() {
    const { t } = useTranslation();
    return (
        <div className='flex flex-col gap-y-3 sm:relative sm:h-96 sm:justify-end md:h-[420px] lg:h-[600px]'>
            {/*교수님이미지*/}
            <div className='relative flex justify-center sm:absolute sm:right-0 sm:z-20 sm:max-h-full sm:w-[40%] md:w-[35%] lg:w-1/2'>
                <Image
                    src={centerLeaderImage}
                    objectPosition='bottom'
                    objectFit='contain'
                    alt='센터장'
                    className='z-10'
                    priority={true}
                />
            </div>
            <div className='sm:relative sm:w-1/2'>
                {/*eba 로고*/}
                <Image src={logo_EN} alt='로고' priority={true} />
            </div>

            <div className='flex'>
                <div className='relative flex flex-1 bg-PRIMARY_COLOR-500'>
                    {/*사다리꼴의 직사각형 부분 및 내용 */}
                    <ul className='flex flex-col  justify-around py-3 px-2 text-xs text-white xs:px-4 xs:text-sm sm:py-5 md:px-6 md:text-base xl:px-9'>
                        <li className='flex'>
                            <div className='w-20 xs:w-24 xl:w-32'>
                                {t(`centerLeaderInfo.centerLeader`)}
                            </div>
                            <div className='whitespace-nowrap'>
                                {t(`centerLeaderInfo.name`)}
                            </div>
                        </li>
                        <li className='flex'>
                            <div className='w-20 xs:w-24 xl:w-32'>
                                {t(`centerLeaderInfo.affiliation`)}
                            </div>
                            <div className='whitespace-nowrap'>
                                {t(`centerLeaderInfo.affiliation_now`)}
                            </div>
                        </li>
                        <li className='flex'>
                            <div className='w-20 xs:w-24 xl:w-32'>E-mail</div>
                            <a
                                className='whitespace-nowrap'
                                href='mailto:yong21c@gmail.com'
                            >
                                yong21c @ gmail.com
                            </a>
                        </li>
                    </ul>

                    {/*사다리꼴 내부 로고*/}
                    <div className='absolute -right-3 bottom-0 z-10 w-16 xs:-right-6 xs:w-20 sm:-right-5 sm:hidden md:-right-8 md:flex md:w-28 lg:right-0 lg:bottom-2 lg:w-44 xl:right-8'>
                        <Image
                            className=''
                            objectFit='contain'
                            src={symbolImage}
                        />
                    </div>
                </div>
                {/*사다리꼴의 삼각형부분*/}
                <div className=' lg:border-r-[150px relative border-b-[80px] border-r-[50px] border-b-PRIMARY_COLOR-500 border-r-transparent xs:border-b-[100px] xs:border-r-[80px] sm:mr-[25%] sm:border-b-[150px] sm:border-r-[170px] lg:mr-[30%] lg:border-b-[200px]'></div>
            </div>
        </div>
    );
}

export default CenterLeaderInfo;

// before:content-['\2022']
