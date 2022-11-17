import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo_text_KR from "../../../../public/images/logo/logo_text_KR.png";
import logo_symbol_text_KR from "../../../../public/images/logo/logo_symbol_text_KR.png";
import logo_inha_symbol_blue from "../../../../public/images/logo/logo_inha_symbol_blue.png";


function Footer() {
    return (
        <div className='flex w-full h-44 flex-col items-center bg-GRAY_COLOR-900 text-GRAY_COLOR-200  xl:flex-wrap xl:text-center'>
            {/*로고 사이즈*/}
            <div className='relative flex h-16 w-80 items-center justify-center sm:w-96 xl:hidden '>
                <Image
                    src={logo_text_KR}
                    objectFit='contain'
                    objectPosition='center'
                    alt='로고'
                />
            </div>

            {/*첫번쨰 줄*/}
            <div className='flex w-full border border-gray-500 xl:w-1/3 xl:border-b-1  xl:border-l-0 xl:border-r-0 xl:border-t-0'>
                <div className='flex flex-1 justify-center border-r border-gray-500 py-3  xl:border-r-0 xl:py-6'>
                    <Link href='/notice/recruit'>연구원 모집</Link>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                    <Link href='/location/location'>찾아오는 길</Link>
                </div>
                {/*로고*/}
            </div>
            {/*두번쨰 줄*/}
            <div className='flex justify-center flex-wrap gap-y-2 gap-x-14 py-4 text-sm font-medium text-white xl:w-full xl:gap-y-4'>
                <span>INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheno 22212, KOREA</span>
                <span>Tel: +82-32-860-7873</span>
                <span>Mail: yong21c@gmail.com</span>
                <div className='basis-full text-center text-GRAY_COLOR-300'>
                    Copyright(C) 2021 by INHA UNIVERSITY.ALL RIGHTS RESERVED
                </div>
            </div>
            <div className='absolute right-12 hidden h-44 w-28 items-center xl:flex'>
                <Image
                    src={logo_symbol_text_KR}
                    objectFit='contain'
                    objectPosition='center'
                    alt='로고'
                />
            </div>

            {/* 인하대학교 엠블럼 https://www.inha.ac.kr/kr/1829/subview.do */}
            <div className='absolute left-12 flex hidden h-44 w-32 items-center xl:flex'>
                <Image
                    src={logo_inha_symbol_blue}
                    objectFit='contain'
                    objectPosition='center'
                    alt='로고'
                />
            </div>
        </div>
    );
}

export default Footer;