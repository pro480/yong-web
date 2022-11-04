import { atom } from "recoil";
import { SiteMap } from "../../typing";

export const siteMapState = atom<SiteMap>({
    key: "siteMapState",
    default: {
        info: {
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
                    title_EN: "Center Vision",
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
                    title_EN: "Center History",
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
                    title_EN: "Center Member",
                    description: "메뉴에 대한 설명을 써주세요",
                    subMenu: [],
                    href: "/info/member",
                },
            ],
        },

        research: {
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
        },

        major: {
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
                    title_EN: "Education Measurement",
                    description: "메뉴에 대한 설명을 써주세요",
                    subMenu: [],
                    href: "/major/measurement",
                },
                {
                    title_KO: "교육 평가",
                    title_EN: "Education Evaluation",
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
        },
        data: {
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
                    title_EN: "Open Data",
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
        },
        notice: {
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
                    title_EN: "Event News",
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
        },

        location: {
            title_KO: "오시는 길",
            title_EN: "Location",
            description: "",
            href: "/location",
            subMenu: []
        },
    },
});
