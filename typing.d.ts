export interface SubTitle {
    title: string;
    subMenu: { title: string; href: string }[];
    href: string;
}

export interface SubMap {
    title: string;
    description: string;
    subTitle: SubTitle[];
}

export interface SiteMap {
    info: SubMap;
    research: SubMap;
    major: SubMap;
    data: SubMap;
    notice: SubMap;
}

export interface Member {
    imageUrl: string; // 사진 주소
    name: string; // 이름
    history: string[]; // 약력
    email: string; // 개인 이메일
    department?: string; // 소속 (ex.인하대학교 교육학과 교수)
    team: MemberTeam; // 소속 조직
    major?: string; //전공
    division?: string; // 구분 (대학 or 연구 기관)
}
export type MemberTeam =
    | "센터장"
    | "연구협력 네트워크"
    | "연구 자문단"
    | "연구 윤리 자문단"
    | "데이터 분석팀";
