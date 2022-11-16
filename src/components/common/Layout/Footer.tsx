import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo_text_KR from "../../../../public/images/logo/logo_text_KR.png";
import logo_symbol_text_KR from "../../../../public/images/logo/logo_symbol_text_KR.png";

function Footer() {
    return (
        <div className='flex w-full flex-col items-center bg-GRAY_COLOR-900 text-GRAY_COLOR-200 xl:flex-row xl:flex-wrap xl:justify-between xl:px-20 '>
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
            <div className='xl:border-b-1 flex w-full border border-gray-500 xl:w-1/3 xl:border-l-0 xl:border-r-0 xl:border-t-0'>
                <div className='flex flex-1 justify-center border-r border-gray-500 py-3  xl:border-r-0 xl:py-6'>
                    <Link href='/notice/recruit'>연구원 모집</Link>
                </div>
                <div className='flex flex-1 items-center justify-center'>
                    <Link href='/location/location'>찾아오는 길</Link>
                </div>
                {/*로고*/}
            </div>
            {/*두번쨰 줄*/}
            <div className='flex max-w-5xl flex-wrap gap-y-2 gap-x-14 py-4 px-2 text-sm font-medium text-white xl:w-full xl:gap-y-4 xl:py-6 2xl:max-w-7xl 2xl:gap-y-8 2xl:py-10'>
                <span>
                    INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheno 22212,
                    KOREA
                </span>
                <span>Tel: +82-32-860-7114</span>
                <span>Fax: +82-32-863-1333</span>
                <span>Mail: yong21c@inha.ac.kr</span>
                <div className='basis-full text-GRAY_COLOR-300'>
                    Copyright(C) 2021 by INHA UNIVERSITY.ALL RIGHTS RESERVED
                </div>
            </div>
            <div className='absolute right-24 flex hidden h-16 w-32 items-center justify-center xl:flex  '>
                <Image
                    src={logo_symbol_text_KR}
                    objectFit='contain'
                    objectPosition='center'
                    alt='로고'
                />
            </div>
        </div>
    );
}

export default Footer;
