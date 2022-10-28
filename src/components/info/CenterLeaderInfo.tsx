import React from "react";
import Image from "next/image";
import symbolImage from "../../../public/images/logo/symbol_outline.png";
import logoImage from "../../../public/images/logo/logo_mini_nobg.png";
import centerLeaderImage from "../../../public/images/centerLeader.png";

function CenterLeaderInfo() {
    return (
        <>
            {/* 협회이름 및 센터장 신상 정보 */}
            <div className='relative flex h-[500px] flex-col justify-end'>
                {/* 센터장 이미지 */}
                <div className='flex'>
                    <div className='flex h-[250px] w-3/5 items-center bg-gradient-to-l from-PRIMARY_COLOR-500 to-PRIMARY_COLOR-400 pl-12 text-xl text-white'>
                        <ul className='flex flex-col gap-y-6'>
                            <li className='before: flex'>
                                <span className="mx-4 w-60  before:mr-3  before:content-['\2022']">
                                    교육빅데이터 센터장
                                </span>
                                이용상(Yongsang Lee)
                            </li>
                            <li className='flex'>
                                <span className="mx-4 w-60 before:mr-3  before:content-['\2022']">
                                    소속 및 직함
                                </span>
                                인하대학교 교육학과 교수
                            </li>
                            <li className='flex'>
                                <span className="mx-4 w-60 before:mr-3  before:content-['\2022']">
                                    E-mail
                                </span>
                                <a
                                    href='mailto:yong21c@gmail.com'
                                    className='hover:underline hover:underline-offset-4'
                                >
                                    yong21c@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='absolute bottom-2 right-1/3 z-10 mx-auto flex h-48 w-48 '>
                        <Image src={symbolImage} layout='fill' />
                    </div>
                    <div className=' relative border-b-[250px] border-r-[200px] border-b-PRIMARY_COLOR-500 border-r-transparent '></div>
                </div>
                <div className='absolute top-16 z-50 h-52 w-[700px] '>
                    <Image
                        className=''
                        src={logoImage}
                        layout='fill'
                        objectFit='contain'
                        alt='로고'
                        priority={true}
                    />
                </div>
                <div className='absolute right-0 h-full w-96'>
                    <Image
                        className='z-50'
                        src={centerLeaderImage}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='right'
                        alt='센터장'
                        priority={true}
                    />
                </div>
            </div>
        </>
    );
}

export default CenterLeaderInfo;
