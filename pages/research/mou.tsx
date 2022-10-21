import React from "react";
import PageTitle from "../../src/components/PageTitle";
import Image from "next/image";

function Mou() {
    // next.config.js에 MOU기관 리스트 URL 추가 작성했습니다.
    const mous = [
        {
            imgUrl: "https://ska.ksif.or.kr/assets/publish/img/common/logo.png",
            href: "https://ska.ksif.or.kr/cmn/main",
            title: "세종한국어평가(SKA)",
        },
        {
            imgUrl: "https://www.ksif.or.kr/site/ksif/kor/images/common/f_logo.png",
            href: "https://www.ksif.or.kr/intro.do",
            title: "세종학당재단",
        },
        {
            imgUrl: "https://www.ikefbooks.com/images/logo_ikef_transp.png",
            href: "https://www.ikefbooks.com/",
            title: "국제한국어교육재단",
        },
        {
            imgUrl: "https://sdf.seoul.kr/assets/theme/seouldigital/images/common/logo.png",
            href: "https://sdf.seoul.kr/index",
            title: "서울디지털재단",
        },
    ];

    return (
        <div>
            <PageTitle
                title='MOU 기관'
                description='MOU기관 페이지 설명을 입력해주세요'
                firstDepth='연구 및 사업'
                firstLink='/research'
                secondDepth='MOU 기관'
                secondLink='/research/mou'
            />
            <main className='grid grid-cols-1 items-center gap-y-16 gap-x-14 self-center md:grid-cols-2 xl:grid-cols-3'>
                {mous.map((mou, index) => (
                    <article
                        key={index}
                        className='mx-auto h-52 w-80 border hover:scale-110'
                    >
                        <div className='h-[80%] border px-4'>
                            <a
                                className='relative block h-full cursor-pointer'
                                href={mou.href}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Image
                                    src={mou.imgUrl}
                                    layout='fill'
                                    objectFit='contain'
                                    objectPosition='center'
                                    alt='로고'
                                    priority={true}
                                />
                            </a>
                        </div>
                        <div className='flex h-[20%] flex-col items-center justify-center gap-y-4 bg-black/5  py-3 px-2'>
                            <h1 className='text-lg font-semibold'>
                                {mou.title}
                            </h1>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    );
}

export default Mou;
