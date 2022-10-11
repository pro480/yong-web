import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <div className='h-fit w-full bg-GRAY_COLOR-900 text-GRAY_COLOR-200 xl:h-56 '>
            {/*아래는 FooterContainer*/}
            <div className='m-auto xl:w-[1300px]'>
                {/*첫번쨰 줄*/}
                <div className='flex flex-col-reverse border-gray-500 xl:h-16 xl:flex-row xl:justify-between'>
                    <div className='flex h-full flex-wrap border-t border-b border-gray-500 text-sm sm:flex-nowrap sm:py-2 xl:w-[700px] xl:border-t-0 xl:border-dashed'>
                        <div className='w-1/2 border-b  items-center flex justify-center border-r border-gray-500  py-2 text-center sm:border-none'>
                            개인정보 처리 방침
                        </div>
                        <div className='w-1/2 border-b items-center flex justify-center border-gray-500 py-2 text-center sm:border-none'>
                            저작권 보호 정책
                        </div>
                        <div className='w-1/2 border-r items-center flex justify-center border-gray-500 py-2 text-center sm:border-none'>
                            연구원 모집
                        </div>
                        <div className='w-1/2 items-center flex justify-center  border-gray-500 py-2 text-center sm:border-none'>
                            찾아오는 길
                        </div>
                    </div>
                    {/*로고*/}
                    <div className='flex h-16 w-full items-center justify-center gap-x-4 border-gray-600 xl:h-full xl:w-fit xl:border xl:py-2 xl:px-7'>
                        {/*로고 사이즈*/}
                        <div className='relative block h-full w-32'>
                            <Image
                                src='/images/logo.png'
                                layout='fill'
                                objectFit='contain'
                                objectPosition='center'
                                alt='로고'
                            />
                        </div>
                        <div className='font-semibold text-GRAY_COLOR-300'>
                            교육 빅데이터 응용 연구 센터
                        </div>
                    </div>
                </div>
                {/*두번쨰 줄*/}
                <div className='flex flex-wrap gap-y-2 gap-x-14 py-4 px-2 text-sm font-medium text-white xl:mt-4 xl:flex-row xl:gap-y-6'>
                    <span className='w-full'>
                        INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheno
                        22212, KOREA
                    </span>
                    <span>Tel: +82-32-860-7114</span>
                    <span>Fax: +82-32-863-1333</span>
                    <span>Mail: yong21c@inha.ac.kr</span>
                    <div className='basis-full text-GRAY_COLOR-300'>
                        Copyright(C) 2021 by INHA UNIVERSITY.ALL RIGHTS RESERVED
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
