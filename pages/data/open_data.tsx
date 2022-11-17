import React from "react";
import Kict from "../../public/images/opendatalogo/Kict.png"
import BIGKinds from "../../public/images/opendatalogo/BIGKinds.png"
import GDD from "../../public/images/opendatalogo/GDD.png"

import Image from "next/image";

function Open_data() {
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
            imgUrl: "https://www.keris.or.kr/images/web/main/layout/logo.png",
            href: "https://www.keris.or.kr/main/main.do",
            title_KO: "KERIS : 한국교육학술정보원",
            description:
                "유치원부터 초•중•고•대학에 이르기까지\n" +
                "혁신, 자율, 동행, 윤리라는 핵심가치 아래\n" +
                "교육과 학술연구 분야의 정보화 사업을\n" +
                "수행하는 교육부 소관 공공기관 ",
        },
        {
            imgUrl: BIGKinds,
            href: "https://www.bigkinds.or.kr/",
            title_KO: "BIGKinds : 뉴스 빅데이터 분석 서비스",
            description:
                "국내 54개의 언론사 보도내용들을 모두 데이터화하여\n" +
                "수집 및 저장 서비스뿐 아니라 데이터분석 또한 제공하는\n" +
                "한국언론진흥재단 산하 뉴스빅데이터 분석 사업체",
        },
        {
            imgUrl: "https://kess.kedi.re.kr/themes/cesi2013/static/images/common/logo.gif",
            href: "https://kess.kedi.re.kr/index",
            title_KO: "KESS : 국가교육통계센터",
            description:
                "국무총리 산하 정부출연 연구기관인\n" +
                "한국교육개발원 소속 국가 교육통계사업 수행을 \n" +
                "전담하는 기관 홈페이지",
        },
        {
            imgUrl: Kict,
            href: "https://kbig.kr/portal/",
            title_KO: "K-ICT 빅데이터센터",
            description:
                "빅데이터 인프라 및 교육 창업 공간을 제공하고\n" +
                "빅데이터 산업 생태계 확산을 위한\n" +
                "다양한 기업 지원 프로그램을 운영하는\n" +
                "한국지능정보사회진흥원 산하 빅데이터 지원센터",
        },
        {
            imgUrl: GDD,
            href: "https://data.gg.go.kr/portal/mainPage.do",
            title_KO: "경기데이터드림 ",
            description:
                "경기도가 보유한 공공데이터를 체계화하고\n" +
                "적극적으로 민간에 개방하고 도민과의 공유를 통해\n" +
                "민의 활용촉진과 개발자 맞춤형서비스를 제공을 위해 구축된\n" +
                "공공데이터 개방 포털",
        },
    ];

    return (
        <div>
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

export default Open_data;
