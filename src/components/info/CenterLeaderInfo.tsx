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
        <>
            {/* 협회이름 및 센터장 신상 정보 */}
            <div className=' flex aspect-[2/1] w-full flex-col justify-end gap-y-12 xs:relative'>
                <div className='absolute bottom-[55%] h-8 w-full xs:h-32 xs:w-1/2'>
                    {/*eba 로고*/}
                    <Image
                        src={logo_EN}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='bottom'
                        alt='로고'
                        priority={true}
                        className='invisible xs:visible'
                    />
                </div>

                <div className='flex h-72 items-end justify-center xs:h-[50%] '>
                    {/*사다리꼴의 직사각형 부분 및 내용 */}
                    <div className='flex h-20 w-full items-center bg-gradient-to-l from-PRIMARY_COLOR-500 to-PRIMARY_COLOR-400 pl-1 text-[2px] text-white xs:h-full xs:h-24 xs:w-3/5 xs:pl-3 xs:text-xs  md:pl-6 md:text-base lg:pl-9 lg:text-lg desktop:pl-12 desktop:text-xl'>
                        <ul className='flex flex-col  gap-y-[1px] xs:gap-y-1 md:gap-y-2 lg:gap-y-4 desktop:gap-y-6'>
                            <li className='flex xs:flex-col md:flex-row '>
                                <span className="md:w-42 mx-0.5 before:mr-2 before:content-['\2022'] md:mx-1 md:before:mr-3 lg:w-48 desktop:mx-4 desktop:w-60  ">
                                    {t(`centerLeaderInfo.centerLeader`)}
                                </span>
                                <span className=' md:ml- ml-3.5 lg:ml-0'>
                                    {t(`centerLeaderInfo.name`)}
                                </span>
                            </li>
                            <li className='flex xs:flex-col lg:flex-row'>
                                <span className="mx-0.5 before:mr-2 before:content-['\2022'] md:mx-1 md:w-40 lg:w-48 lg:before:mr-3 desktop:mx-4 desktop:w-60 ">
                                    {t(`centerLeaderInfo.affiliation`)}
                                </span>
                                <span className=' ml-3.5 md:ml-4 lg:ml-0'>
                                    {t(`centerLeaderInfo.affiliation_now`)}
                                </span>
                            </li>
                            <li className='flex xs:flex-col lg:flex-row'>
                                <span className="mx-0.5 before:mr-2 before:content-['\2022'] md:mx-1 md:w-40 lg:w-48 lg:before:mr-3 desktop:mx-4 desktop:w-60 ">
                                    E-mail
                                </span>
                                <a
                                    href='mailto:yong21c@gmail.com'
                                    className='ml-3.5 hover:underline hover:underline-offset-[1px] xs:hover:underline-offset-2 md:ml-4  md:hover:underline-offset-4 lg:ml-0'
                                >
                                    yong21c @ gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/*사다리꼴 내부 로고*/}
                    <div className='invisible absolute bottom-2 z-10 flex aspect-1/1 xs:visible xs:right-1/3 xs:h-1/3'>
                        <Image src={symbolImage} layout='fill' />
                    </div>
                    {/*사다리꼴의 삼각형부분*/}
                    <div className='invisible absolute bottom-0 right-[27.5%] flex aspect-[1/2] h-1/2 xs:visible'>
                        <Image src={triangle} layout='fill' />
                    </div>
                </div>

                {/*교수님이미지*/}
                <div className=' absolute right-28 top-36 h-full  w-1/3 xs:right-0'>
                    <Image
                        className='relative z-10'
                        src={centerLeaderImage}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='bottom'
                        alt='센터장'
                        priority={true}
                    />
                </div>
            </div>
        </>
    );
}

export default CenterLeaderInfo;
