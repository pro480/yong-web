
export function getFirstDepthTitle_KO(path:string){

    switch (path){
        case "info":
            return "센터소개"
        case "research":
            return "연구 및 사업"
        case "major":
            return "전공소개"
        case "data":
            return "자료실"
        case "notice":
            return "공지사항"
        case "location":
            return "오시는 길"
        default :
            return "목록에 없는 케이스입니다"
    }
}

export function getSecondDepthTitle_EN(path:string){
    switch (path){
        case "gallery":
            return "Gallery"
        case "open_data":
            return "Open Data"
        case "paper":
            return "Papers and Research Reports"
        case "study_material":
            return "Study Material"
        case "organization":
            return "Organization"
        case "center_history":
            return "Center History"
        case "center_info":
            return "Center Info"
        case "center_member":
            return "Center Member"
        case "center_vision":
            return "Center Vision"
        case "main_task":
            return "Main Task"
        case "alumni":
            return "Alumni Member"
        case "career":
            return "Career After Graduation"
        case "edu_evaluation":
            return "Education Evaluation"
        case "edu_measurement":
            return "Education Measurement"
        case "edudata_science":
            return "Edu-Data Science"
        case "center_news":
            return "Center News"
        case "event_news":
            return "Event News"
        case "qna":
            return "Q & A"
        case "recruit":
            return "Researcher Recruitment"
        case "business":
            return "Research & business"
        case "mou_list":
            return "MOU institution"
        case "location":
            return "Location"
        default:
            return "목록에 없는 케이스입니다"
    }
}

export function getSecondDepthTitle_KO(path:string){
    switch (path){
        case "gallery":
            return "갤러리"
        case "open_data":
            return "오픈 데이터"
        case "paper":
            return "논문 및 연구보고서"
        case "study_material":
            return "학습 자료"
        case "organization":
            return "조직도"
        case "center_history":
            return "센터 연혁"
        case "center_info":
            return "센터장 소개"
        case "center_member":
            return "센터 멤버"
        case "center_vision":
            return "센터 비전"
        case "main_task":
            return "주요 업무"
        case "alumni":
            return "동문"
        case "career":
            return "졸업 후 진로"
        case "edu_evaluation":
            return "교육 평가"
        case "edu_measurement":
            return "교육 측정"
        case "edudata_science":
            return "에듀데이터 사이언스"
        case "center_news":
            return "센터 소식"
        case "event_news":
            return "행사 소식"
        case "qna":
            return "Q & A"
        case "recruit":
            return "연구원 모집"
        case "business":
            return "연구 및 사업"
        case "mou_list":
            return "MOU 기관"
        case "location":
            return "오시는 길"
        default:
            return "목록에 없는 케이스입니다"
    }
}

export function getSecondDepthDescription_KO(path:string){
    switch (path){
        case "gallery":
            return "메뉴에 대한 설명을 입력해주세요"
        case "open_data":
            return "메뉴에 대한 설명을 입력해주세요"
        case "paper":
            return "메뉴에 대한 설명을 입력해주세요"
        case "study_material":
            return "메뉴에 대한 설명을 입력해주세요"
        case "organization":
            return "메뉴에 대한 설명을 입력해주세요"
        case "center_history":
            return "메뉴에 대한 설명을 입력해주세요"
        case "center_info":
            return "메뉴에 대한 설명을 입력해주세요"
        case "center_member":
            return "메뉴에 대한 설명을 입력해주세요"
        case "center_vision":
            return "메뉴에 대한 설명을 입력해주세요"
        case "main_task":
            return "메뉴에 대한 설명을 입력해주세요"
        case "alumni":
            return "메뉴에 대한 설명을 입력해주세요"
        case "career":
            return "메뉴에 대한 설명을 입력해주세요"
        case "edu_evaluation":
            return "메뉴에 대한 설명을 입력해주세요"
        case "edu_measurement":
            return "메뉴에 대한 설명을 입력해주세요"
        case "edudata_science":
            return "메뉴에 대한 설명을 입력해주세요"
        case "center_news":
            return "메뉴에 대한 설명을 입력해주세요"
        case "event_news":
            return "메뉴에 대한 설명을 입력해주세요"
        case "qna":
            return "메뉴에 대한 설명을 입력해주세요"
        case "recruit":
            return "메뉴에 대한 설명을 입력해주세요"
        case "business":
            return "메뉴에 대한 설명을 입력해주세요"
        case "mou_list":
            return "메뉴에 대한 설명을 입력해주세요"
        case "location":
            return "메뉴에 대한 설명을 입력해주세요"
        default:
            return "목록에 없는 케이스입니다"
    }
}

export function getThirdDepthTitle_KO(path:string){
    switch (path){
        case "engineer":
            return "센터 연구원"
        case "ethics":
            return "연구 윤리 자문단"
        case "network":
            return "연구협력 네트워크"
        case "org_chart":
            return "조직도"
        case "research":
           return "연구 자문단"
        default:
            return "목록에 없는 케이스입니다"
    }
}



export const info = {

    title_KO: "센터 소개",
    title_EN: "Center Info",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/info/center_info",
    subMenu: [
        {
            title_KO: "센터장 소개",
            title_EN: "CenterLeader",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/center_info",
        },
        {
            title_KO: "센터 비전",
            title_EN: "Center Career",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/center_vision",
        },
        {
            title_KO: "주요 수행 업무",
            title_EN: "Main Business",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/main_task",
        },
        {
            title_KO: "센터 조직",
            title_EN: "Center Organization",
            description: "메뉴에 대한 설명을 써주세요",
            href: "/info/organization/org_chart",
            subMenu: [
                {
                    title_KO: "조직도",
                    title_EN: "Organization Chart",
                    description: "메뉴에 대한 설명을 써주세요",
                    href: "/info/organization/org_chart",
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
        },
        {
            title_KO: "센터 연혁",
            title_EN: "Center History",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/center_history",
        },
        {
            title_KO: "센터 구성원",
            title_EN: "Center Member",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/info/center_member",
        },
    ],
}

export const research = {
    title_KO: "연구 및 사업",
    title_EN: "Research & Business",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/research/business",
    subMenu: [
        {
            title_KO: "연구 및 사업",
            title_EN: "Research & Business",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/research/business",
        },
        {
            title_KO: "MOU 기관",
            title_EN: "MOU",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/research/mou_list",
        },
    ],
}

export const major = {
    title_KO: "전공 소개",
    title_EN: "EduData Science",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/major/edudata_science",
    subMenu: [
        {
            title_KO: "에듀 데이터 사이언스",
            title_EN: "EduData Science",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/edudata_science",
        },
        {
            title_KO: "교육 측정",
            title_EN: "Education Edu_measurement",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/edu_measurement",
        },
        {
            title_KO: "교육 평가",
            title_EN: "Education Edu_evaluation",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/edu_evaluation",
        },
        {
            title_KO: "졸업 후 진로",
            title_EN: "After Graduation",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/major/career",
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

export const data = {
    title_KO: "자료실",
    title_EN: "Reference",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/data/paper",
    subMenu: [
        {
            title_KO: "논문 및 연구 보고서",
            title_EN: "Papers and Research Reports",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/data/paper",
        },
        {
            title_KO: "오픈 데이터",
            title_EN: "Open_data Data",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/data/open_data",
        },
        {
            title_KO: "학습 자료",
            title_EN: "Study Material",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/data/study_material",
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

export const notice = {
    title_KO: "공지사항",
    title_EN: "Notice",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/notice/center_news",
    subMenu: [
        {
            title_KO: "센터 소식",
            title_EN: "Center News",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/notice/center_news",
        },
        {
            title_KO: "행사 소식",
            title_EN: "Event_news News",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/notice/event_news",
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

export const location = {
    title_KO: "오시는 길",
    title_EN: "Location",
    description: "메뉴에 대한 설명을 써주세요",
    href: "/location/location",
    subMenu: [
        {
            title_KO: "센터 소식",
            title_EN: "Center News",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [],
            href: "/notice/center_news",
        },
        ]
}