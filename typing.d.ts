export interface SubMenu {
    title_KO: string;
    title_EN: string;
    description: string;
    subMenu: {
        title_KO: string;
        title_EN: string;
        description: string;
        href: string;
    }[];
    href: string;
}

export interface SubMap {
    title_KO: string;
    title_EN: string;
    description: string;
    subMenu: SubMenu[];
    href: string;
}

export interface SiteMap {
    info: SubMap;
    research: SubMap;
    major: SubMap;
    data: SubMap;
    notice: SubMap;
}

export interface InternalMember {
    name: string; // 이름
    email: string; // 개인 이메일
    major: string; //전공
    imageUrl: string; // 사진 주소
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    history: string[]; // 약력
    course: Course;
    team: Team; // 소속 조직
}

export type Course = "학부연구생" | "석사 과정" | "박사 과정" | "교수";
export type Team = "센터장" | "연구팀1" | "연구팀2" | "연구팀3" | "동문";

export interface ExternalMember {
    name: string; // 이름
    email: string; // 개인 이메일
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    organization: Organization;
    division: string | null; // 구분 (대학 or 연구 기관)
}

export interface GraduateMember {
    name: string; // 이름
    email: string; // 개인 이메일
    major: string; //전공
    imageUrl: string; // 사진 주소
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    history: string[]; // 약력
    team: Team;
}

export interface StudyMaterial {
    title: string; // 자료명
    writer: string; // 작성자
    date: string; // 등록일
    fileUrl: string; // 첨부파일 주소
    material: Material; // 학습 자료랑 논문 및 연구보고서로 분류할 생각
}

export interface PaperMaterial {
    title: string; // 논문명
    writer: string; // 저자
    date: string; // 작성일자
    fileUrl: string; // 논문파일 주소
    material: Material; // 학습 자료랑 논문 및 연구보고서로 분류할 생각
}

export type Organization =
    | "연구협력 네트워크"
    | "연구 자문단"
    | "연구 윤리 자문단";

export interface QNA {
    answer: string; // 답변
    content: string; // 내용
    createAt: string; // 생성일
    title: string; // 제목
}

export type Material = 
    |"논문" 
    | "학습 자료";

export interface Research {
    createdAt: string; // 파일 올린 날짜
    fileUrl: string;
    imgUrl: string;
    researcher: string; // 연구자
    title: string; // 제목
    type: string;
    year: string; //발행년도
}
