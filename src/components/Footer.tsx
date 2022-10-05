import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <div className='w-full bg-FOOTER_COLOR  text-gray-600/90 '>
            {/*아래는 FooterContainer*/}
            <div
                className='m-auto xl:w-[1300px]'
                // className='h-full w-[1500px]'
            >
                {/*첫번쨰 줄*/}
                <div
                    className='flex flex-col-reverse border-gray-500 xl:flex-row xl:justify-between'
                    // className='flex h-16 w-full items-center justify-between text-sm'
                >
                    <div
                        className='flex h-full flex-wrap border-t border-b border-gray-500 text-sm sm:flex-nowrap sm:py-2 xl:w-[700px] xl:border-t-0 xl:border-dashed '
                        // className='flex h-full items-center gap-x-24 border-b border-dashed border-b-gray-700'
                    >
                        <div className='w-1/2 border-b  border-r border-gray-500  py-2 text-center sm:border-none'>
                            개인정보 처리 방침
                        </div>
                        <div className='w-1/2 border-b border-gray-500 py-2 text-center sm:border-none'>
                            저작권 보호 정책
                        </div>
                        <div className='w-1/2 border-r border-gray-500 py-2 text-center sm:border-none'>
                            연구원 모집
                        </div>
                        <div className='w-1/2  border-gray-500 py-2 text-center sm:border-none'>
                            찾아오는 길
                        </div>
                    </div>
                    {/*로고*/}
                    <div
                        className='flex h-[53px] w-full items-center justify-center gap-x-4 border-gray-600 xl:w-fit xl:border xl:py-2 xl:px-7'
                        // className='flex h-full items-center gap-x-4 border border-gray-700 px-3'
                    >
                        {/*로고 사이즈*/}
                        <div className='relative block h-6 w-20'>
                            <Image
                                src='/logo.png'
                                layout='fill'
                                objectFit='contain'
                                objectPosition='center'
                                className='bg-white'
                                // className='flex cursor-pointer bg-white'
                                alt='로고'
                            />
                        </div>
                        <div
                            // className='items-center'
                            className='font-semibold text-FOOTER_FONT_COLOR'
                        >
                            교육 빅데이터 응용 연구 센터
                        </div>
                    </div>
                </div>
                {/*두번쨰 줄*/}
                <div
                    className='flex flex-col flex-wrap gap-y-2 gap-x-14 py-4 px-2 text-sm font-medium text-white xl:mt-4 xl:flex-row'
                    // className='mt-8 flex w-full gap-x-8 text-white'
                >
                    <span>
                        INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheno
                        22212, KOREA
                    </span>
                    <span>Tel: +82-32-860-7114</span>
                    <span>Fax: +82-32-863-1333</span>
                    <span>Mail: yong21c@inha.ac.kr</span>
                    <div
                        className='basis-full text-FOOTER_FONT_COLOR'
                        // className='mt-2'
                    >
                        Copyright(C) 2021 by INHA UNIVERSITY.ALL RIGHTS RESERVED
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
