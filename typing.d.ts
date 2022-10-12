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
    imageUrl: string;
    name: string;
    history: string[];
    email: string;
    team: MemberTeam;
    major?: string;
    division?: string;
}
export type MemberTeam =
    | "센터장"
    | "연구협력 네트워크"
    | "연구 자문단"
    | "연구 윤리 자문단"
    | "데이터 분석팀";
