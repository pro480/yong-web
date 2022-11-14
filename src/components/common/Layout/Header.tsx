import React, { memo } from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import useAuth from "../../../hooks/useAuth";
import { ImGithub } from "react-icons/im";
import logo_EN from "../../../../public/images/logo/logo_EN.png";

function Header() {
    const { user, logout } = useAuth();

    const info = {
        title_KO: "센터 소개",
            title_EN: "Center Info",
            description: "메뉴에 대한 설명을 써주세요",
            href: "/info",
            subMenu: [
            {
                title_KO: "센터장 소개",
                title_EN: "CenterLeader",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/info",
            },
            {
                title_KO: "센터 비전",
                title_EN: "Center Career",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/info/vision",
            },
            {
                title_KO: "주요 수행 업무",
                title_EN: "Main Business",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/info/task",
            },
            {
                title_KO: "센터 연혁",
                title_EN: "Center Center_history",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/info/history",
            },
            {
                title_KO: "센터 조직(조직도)",
                title_EN: "Center Organization",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [
                    {
                        title_KO: "조직도",
                        title_EN: "Organization Chart",
                        description: "메뉴에 대한 설명을 써주세요",
                        href: "/info/organization",
                    },
                    {
                        title_KO: "연구협력 네트워크",
                        title_EN: "Research Collaboration Network",
                        description: "메뉴에 대한 설명을 써주세요",
                        href: "/info/organization/network",
                    },
                    {
                        title_KO: "연구 자문단",
                        title_EN: "Research Advisory Group",
                        description: "메뉴에 대한 설명을 써주세요",
                        href: "/info/organization/research",
                    },
                    {
                        title_KO: "연구 윤리 자문단",
                        title_EN: "Research Ethics Advisory Group",
                        description: "메뉴에 대한 설명을 써주세요",
                        href: "/info/organization/ethics",
                    },
                    {
                        title_KO: "센터 연구원",
                        title_EN: "Center Research Engineer",
                        description: "메뉴에 대한 설명을 써주세요",
                        href: "/info/organization/engineer",
                    },
                ],
                href: "/info/organization",
            },
            {
                title_KO: "센터 구성원",
                title_EN: "Center Center_member",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/info/member",
            },
        ],
    }

    const research = {
        title_KO: "연구 및 사업",
            title_EN: "Research And Business",
            description: "메뉴에 대한 설명을 써주세요",
            href: "/research",
            subMenu: [
            {
                title_KO: "연구 및 사업",
                title_EN: "Research And Business",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/research",
            },
            {
                title_KO: "MOU 기관",
                title_EN: "MOU",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/research/mou",
            },
        ],
    }

    const major = {
        title_KO: "전공 소개",
            title_EN: "EduData Science",
            description: "메뉴에 대한 설명을 써주세요",
            href: "/major",
            subMenu: [
            {
                title_KO: "에듀 데이터 사이언스",
                title_EN: "EduData Science",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/major",
            },
            {
                title_KO: "교육 측정",
                title_EN: "Education Edu_measurement",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/major/measurement",
            },
            {
                title_KO: "교육 평가",
                title_EN: "Education Edu_evaluation",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/major/evaluation",
            },
            {
                title_KO: "졸업 후 진로",
                title_EN: "After Graduation",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/major/vision",
            },
            {
                title_KO: "동문",
                title_EN: "Alumni",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/major/alumni",
            },
        ],
    }

    const data = {
        title_KO: "자료실",
            title_EN: "Reference",
            description: "메뉴에 대한 설명을 써주세요",
            href: "/data",
            subMenu: [
            {
                title_KO: "논문 및 연구 보고서",
                title_EN: "Papers and Research Reports",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/data",
            },
            {
                title_KO: "오픈 데이터",
                title_EN: "Open_data Data",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/data/open",
            },
            {
                title_KO: "학습 자료",
                title_EN: "Study Material",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/data/study",
            },
            {
                title_KO: "갤러리",
                title_EN: "Gallery",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/data/gallery",
            },
        ],
    }

    const notice = {
        title_KO: "공지사항",
            title_EN: "Notice",
            description: "메뉴에 대한 설명을 써주세요",
            href: "/notice",
            subMenu: [
            {
                title_KO: "센터 소식",
                title_EN: "Center News",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/notice",
            },
            {
                title_KO: "행사 소식",
                title_EN: "Event_news News",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/notice/event",
            },
            {
                title_KO: "Q&A",
                title_EN: "Q&A",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/notice/qna",
            },
            {
                title_KO: "연구원 모집",
                title_EN: "Researcher Recruitment",
                description: "메뉴에 대한 설명을 써주세요",
                subMenu: [],
                href: "/notice/recruit",
            },
        ],
    }

    return (
        <header className='border-b px-2 xl:h-[200px] xl:px-2 desktop:h-[100px]'>
            {/*아래는 전체 컨테이너*/}
            <div className='flex flex-col-reverse justify-center md:h-[100px] md:flex-row md:items-center md:justify-between'>
                <Link href='/'>
                    {/* 아래는 로고 컨테이너*/}
                    <div className='h-20 border-t p-3 md:h-full md:w-96 md:border-none desktop:w-[500px]'>
                        {/*아래는 로고 사이즈*/}
                        <div className='relative block h-full cursor-pointer'>
                            <Image
                                src={logo_EN}
                                layout='fill'
                                objectFit='contain'
                                objectPosition='center'
                                alt='로고'
                                priority={true}
                            />
                        </div>
                    </div>
                </Link>
                {/*아래는 GNB Wrap*/}
                <div className='flex flex-col-reverse xl:flex-row-reverse desktop:w-full desktop:flex-row desktop:items-center desktop:justify-between'>
                    {/* 헤더메뉴 Container*/}
                    <nav className='absolute top-[100px] left-0 hidden h-[100px] justify-around border-t xl:flex xl:w-full desktop:static desktop:px-12'>
                        <HeaderMenu subMap={info} />
                        <HeaderMenu subMap={research} />
                        <HeaderMenu subMap={major} />
                        <HeaderMenu subMap={data} />
                        <HeaderMenu subMap={notice} />
                    </nav>
                    {/*기타 메뉴 리스트*/}
                    <div className='text-PRIMARY_FONT_COLOR flex h-12 items-center px-3 desktop:w-[500px] desktop:justify-between'>
                        <a
                            target='_blank'
                            href='https://github.com/pro480/yong-web'
                            rel='noopener noreferrer'
                            className='mr-5'
                        >
                            {/*noopener noreferred은 보안 위협을 피하기 위함*/}
                            <ImGithub size='24' />
                        </a>
                        <button className='fonts mr-5 '>영문(EN)</button>

                        {user ? (
                            <button
                                onClick={logout}
                                className='mr-5 hidden md:flex'
                            >
                                Logout
                            </button>
                        ) : (
                            <Link href='/adminLogin'>
                                <a className='mr-5 hidden md:flex'>ADMIN</a>
                            </Link>
                        )}
                        <Bars3CenterLeftIcon className='ml-auto h-8 desktop:ml-0' />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
