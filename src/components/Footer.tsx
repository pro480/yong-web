import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <div className='flex h-60 w-full items-center justify-center bg-FOOTER_COLOR text-SUBFONT_COLOR'>
            {/*아래는 FooterContainer*/}
            <div className='h-full w-[1500px]'>
                {/*첫번쨰 줄*/}
                <div className='flex h-16 w-full items-center justify-between text-sm'>
                    <div className='flex h-full items-center gap-x-24 border-b border-dashed border-b-gray-700'>
                        <div>개인정보 처리 방침</div>
                        <div>저작권 보호 정책</div>
                        <div>연구원 모집</div>
                        <div>찾아오는 길</div>
                    </div>
                    {/*로고*/}
                    <div className='flex h-full items-center gap-x-4 border border-gray-700 px-3'>
                        <div className='relative h-6 w-20 '>
                            <Image
                                src='/logo.png'
                                layout='fill'
                                objectFit='contain'
                                className='flex cursor-pointer bg-white'
                                alt='로고'
                            />
                        </div>
                        <div className='items-center'>
                            교육 빅데이터 응용 연구 센터
                        </div>
                    </div>
                </div>
                {/*두번쨰 줄*/}
                <div className='mt-8 flex w-full gap-x-8 text-white'>
                    <div>
                        INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheno
                        22212, KOREA
                    </div>
                    <div>Tel: +82-32-860-7114</div>
                    <div>Fax: +82-32-863-1333</div>
                    <div>Mail: yong21c@inha.ac.kr</div>
                </div>
                {/*세번쨰 줄*/}
                <div className='mt-2'>
                    Copyright(C) 2021 by INHA UNIVERSITY.ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    );
}

export default Footer;
