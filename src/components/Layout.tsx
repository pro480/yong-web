import React, { memo, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

interface Props {
    children: ReactNode;
}

function Layout({ children }: Props) {
    const siteMap = {
        info: {
            title: "센터 소개",
            description: "메뉴에 대한 설명을 써주세요",
            subTitle: [
                {
                    title: "센터장 소개",
                    subMenu: [],
                    href: "/info",
                },
                {
                    title: "센터 비전",
                    subMenu: [
                        { title: "센터 비전", href: "/info/vision" },
                        { title: "설립 목적", href: "/info/vision/purpose" },
                        {
                            title: "중장기 발전 목표",
                            href: "/info/vision/goals",
                        },
                    ],
                    href: "/info/vision",
                },
                {
                    title: "주요 수행 업무",
                    subMenu: [],
                    href: "/info/task",
                },
                {
                    title: "센터 연혁",
                    subMenu: [],
                    href: "/info/history",
                },
                {
                    title: "센터 조직(조직도)",
                    subMenu: [
                        {
                            title: "조직도",
                            href: "/info/organization",
                        },
                        {
                            title: "연구협력 네트워크",
                            href: "/info/organization/network",
                        },
                        {
                            title: "연구 자문단",
                            href: "/info/organization/research",
                        },
                        {
                            title: "연구 윤리 자문단",
                            href: "/info/organization/ethics",
                        },
                        {
                            title: "데이터 분석팀",
                            href: "/info/organization/analytics",
                        },
                    ],
                    href: "/info/organization",
                },
                {
                    title: "센터 구성원",
                    subMenu: [],
                    href: "/info/member",
                },
            ],
        },

        research: {
            title: "연구 및 사업",
            description: "메뉴에 대한 설명을 써주세요",
            subTitle: [
                {
                    title: "연구 및 사업",
                    subMenu: [],
                    href: "/research",
                },
                {
                    title: "MOU 기관",
                    subMenu: [],
                    href: "/research/mou",
                },
            ],
        },

        major: {
            title: "전공 소개",
            description: "메뉴에 대한 설명을 써주세요",
            subTitle: [
                {
                    title: "에듀 데이터 사이언스",
                    subMenu: [],
                    href: "/major",
                },
                {
                    title: "교육 측정",
                    subMenu: [],
                    href: "/major/measurement",
                },
                {
                    title: "교육 평가",
                    subMenu: [],
                    href: "/major/evaluation",
                },
                {
                    title: "졸업 후 진로",
                    subMenu: [],
                    href: "/major/vision",
                },
                {
                    title: "동문",
                    subMenu: [],
                    href: "/major/alumni",
                },
            ],
        },
        data: {
            title: "자료실",
            description: "메뉴에 대한 설명을 써주세요",
            subTitle: [
                {
                    title: "논문 및 연구 보고서",
                    subMenu: [],
                    href: "/data",
                },
                {
                    title: "오픈 데이터",
                    subMenu: [],
                    href: "/data/open",
                },
                {
                    title: "학습 자료",
                    subMenu: [],
                    href: "/data/study",
                },
                {
                    title: "갤러리",
                    subMenu: [],
                    href: "/data/gallery",
                },
            ],
        },
        notice: {
            title: "공지사항",
            description: "메뉴에 대한 설명을 써주세요",
            subTitle: [
                {
                    title: "센터 소식",
                    subMenu: [],
                    href: "/notice",
                },
                {
                    title: "FAQ",
                    subMenu: [],
                    href: "/notice/faq",
                },
                {
                    title: "Q&A",
                    subMenu: [],
                    href: "/notice/qna",
                },
                {
                    title: "연구원 모집",
                    subMenu: [],
                    href: "/notice/recruit",
                },
            ],
        },
    };

    const router = useRouter();
    const SIDEBAR_HIDDEN = ["/", "/adminLogin"];

    console.log(siteMap);

    return SIDEBAR_HIDDEN.includes(router.pathname) ? (
        <div>
            <Header siteMap={siteMap} />
            {children}
            <Footer />
        </div>
    ) : (
        <div className='h-full w-full'>
            <Header siteMap={siteMap} />
            <main className='m-auto flex max-w-[1536px] flex-col 2xl:flex-row 2xl:items-start'>
                <Sidebar siteMap={siteMap} />
                <div className='w-full p-20'>{children}</div>
            </main>
            <Footer />
        </div>
    );
}

export default memo(Layout);
