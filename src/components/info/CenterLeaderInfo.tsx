import React from "react";
import Image from "next/image";
import symbolImage from "../../../public/images/logo/symbol_outline.png";
import logoImage from "../../../public/images/logo/logo_mini_nobg.png";
import centerLeaderImage from "../../../public/images/centerLeader.png";

function CenterLeaderInfo() {
    return (
        <>
            {/* 협회이름 및 센터장 신상 정보 */}
            <div className='relative flex aspect-[2/1] w-full flex-col justify-end'>
                <div className=''>
                    <div className='relative h-2/5'></div>
                    <div className='relative z-50 aspect-[4/1] h-3/5 '>
                        {/*eba 로고*/}
                        <Image
                            className=''
                            src={logoImage}
                            layout='fill'
                            objectFit='contain'
                            alt='로고'
                            priority={true}
                        />
                    </div>
                </div>

                <div className='flex'>
                    {/*사다리꼴의 직사각형 부분 및 내용 */}
                    <div className='flex h-full w-3/5 items-center bg-gradient-to-l from-PRIMARY_COLOR-500 to-PRIMARY_COLOR-400 pl-1 text-[2px] text-white xs:pl-3 xs:text-xs  md:pl-6 md:text-base lg:pl-9 lg:text-lg desktop:pl-12 desktop:text-xl'>
                        <ul className='flex flex-col  gap-y-[1px] xs:gap-y-1 md:gap-y-2 lg:gap-y-4 desktop:gap-y-6'>
                            <li className='flex flex-col md:flex-row '>
                                <span className="md:w-42 mx-0.5 before:mr-2 before:content-['\2022'] md:mx-1 md:before:mr-3 lg:w-48 desktop:mx-4 desktop:w-60  ">
                                    교육빅데이터 센터장
                                </span>
                                <span className=' md:ml- ml-3.5 lg:ml-0'>
                                    이용상(Yongsang Lee)
                                </span>
                            </li>
                            <li className='flex flex-col lg:flex-row'>
                                <span className="mx-0.5 before:mr-2 before:content-['\2022'] md:mx-1 md:w-40 lg:w-48 lg:before:mr-3 desktop:mx-4 desktop:w-60 ">
                                    소속 및 직함
                                </span>
                                <span className=' ml-3.5 md:ml-4 lg:ml-0'>
                                    인하대학교 교육학과 교수
                                </span>
                            </li>
                            <li className='flex flex-col lg:flex-row'>
                                <span className="mx-0.5 before:mr-2 before:content-['\2022'] md:mx-1 md:w-40 lg:w-48 lg:before:mr-3 desktop:mx-4 desktop:w-60 ">
                                    E-mail
                                </span>
                                <a
                                    href='mailto:yong21c@gmail.com'
                                    className='ml-3.5 hover:underline hover:underline-offset-[1px] xs:hover:underline-offset-2 md:ml-4  md:hover:underline-offset-4 lg:ml-0'
                                >
                                    yong21c@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/*사다리꼴 내부 로고*/}
                    <div className='absolute bottom-2 z-10 flex aspect-1/1 xs:right-1/3 xs:w-1/6'>
                        <Image src={symbolImage} layout='fill' />
                    </div>

                    {/*사다리꼴의 삼각형부분*/}
                    <div className=' relative border-b-[90px] border-r-[72px] border-b-PRIMARY_COLOR-500 border-r-transparent  xs:border-b-[110px] xs:border-r-[88px]  md:border-b-[180px] md:border-r-[144px] lg:border-b-[230px] lg:border-r-[184px] desktop:border-b-[250px] desktop:border-r-[200px] '></div>
                </div>

                {/*교수님이미지*/}
                <div className=' absolute right-0  h-full w-1/3'>
                    <Image
                        className='relative z-50'
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
