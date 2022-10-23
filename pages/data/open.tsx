import React from "react";

import PageTitle from "../../src/components/common/Layout/PageTitle";
import Image from "next/image";

function Open() {
    const opens = [
        {
            imgUrl: "https://www.nia.or.kr/img/nia_kor/ci_03.png",
            href: "https://www.nia.or.kr/site/nia_kor/main.do",
            title_KO: "NIA : 한국지능정보사회진흥원",
            description:
                "대한민국 국가기관의 정보화 추진과 관련된 정책을\n" +
                "개발, 정보문화 조성, 정보격차 해소 등을\n" +
                "지원하려는 목적으로 만들어진 대한민국\n" +
                "과학기술정보통신부 산하 위탁집행형 준정부기관",
        },
        {
            imgUrl: "https://www.nia.or.kr/img/nia_kor/ci_03.png",
            href: "https://www.nia.or.kr/site/nia_kor/main.do",
            title_KO: "NIA : 한국지능정보사회진흥원",
            description:
                "대한민국 국가기관의 정보화 추진과 관련된 정책을\n" +
                "개발, 정보문화 조성, 정보격차 해소 등을\n" +
                "지원하려는 목적으로 만들어진 대한민국\n" +
                "과학기술정보통신부 산하 위탁집행형 준정부기관",
        },
        {
            imgUrl: "https://www.nia.or.kr/img/nia_kor/ci_03.png",
            href: "https://www.nia.or.kr/site/nia_kor/main.do",
            title_KO: "NIA : 한국지능정보사회진흥원",
            description:
                "대한민국 국가기관의 정보화 추진과 관련된 정책을\n" +
                "개발, 정보문화 조성, 정보격차 해소 등을\n" +
                "지원하려는 목적으로 만들어진 대한민국\n" +
                "과학기술정보통신부 산하 위탁집행형 준정부기관",
        },
        {
            imgUrl: "https://www.nia.or.kr/img/nia_kor/ci_03.png",
            href: "https://www.nia.or.kr/site/nia_kor/main.do",
            title_KO: "NIA : 한국지능정보사회진흥원",
            description:
                "대한민국 국가기관의 정보화 추진과 관련된 정책을\n" +
                "개발, 정보문화 조성, 정보격차 해소 등을\n" +
                "지원하려는 목적으로 만들어진 대한민국\n" +
                "과학기술정보통신부 산하 위탁집행형 준정부기관",
        },
    ];

    return (
        <div>
            <PageTitle
                title='오픈 데이터'
                description='오픈 데이터 페이지의 설명을 입력해주세요.'
                firstDepth='자료실'
                firstLink='/data'
                secondDepth='오픈 데이터'
                secondLink='/data/open'
            />
            <main className='grid grid-cols-1 items-center gap-y-16 gap-x-14 self-center md:grid-cols-2 xl:grid-cols-3'>
                {opens.map((open, index) => (
                    <article
                        key={index}
                        className='mx-auto h-96 w-80 border hover:scale-110'
                    >
                        <div className='h-[40%] border px-4'>
                            <a
                                className='relative block h-full cursor-pointer'
                                href={open.href}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Image
                                    src={open.imgUrl}
                                    layout='fill'
                                    objectFit='contain'
                                    objectPosition='center'
                                    alt='로고'
                                    priority={true}
                                />
                            </a>
                        </div>
                        <div className='flex h-[60%] flex-col items-center justify-center gap-y-4 bg-PRIMARY_COLOR-500/30  py-3 px-2'>
                            <h1 className='text-lg font-semibold'>
                                {open.title_KO}
                            </h1>
                            <p className='text-sm'>{open.description}</p>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    );
}

export default Open;
