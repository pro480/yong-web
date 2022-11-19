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
    location: SubMap;
}

export interface InternalMember {
    name: string; // 이름
    major: string; //전공
    imageUrl: string; // 사진 주소
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    history: string[]; // 약력
    course: Course;
    team: Team; // 소속 조직
    email?: string; // 개인 이메일
}

export type Course = "학부연구생" | "석사 과정" | "박사 과정" | "교수";
export type Team =
    | "센터장"
    | "데이터 분석팀"
    | "인공지능팀"
    | "실무교육팀"
    | "동문";

export type Classification = "교수" | "졸업생";

export interface ExternalMember {
    name: string; // 이름
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    organization: Organization;
    email: string | null; // 개인 이메일
    division: string | null; // 구분 (대학 or 연구 기관)
}

export interface GraduateMember {
    classification: Classification;
    name: string; // 이름
    email: string; // 개인 이메일
    major: string; //전공
    imageUrl: string; // 사진 주소
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    history: string[]; // 약력
}

export type Material = "논문" | "학습 자료";

export interface StudyMaterial {
    title: string; // 자료명
    writer: string; // 작성자
    createdAt: string; // 등록일
    fileUrl: string; // 첨부파일 주소
    content: string;
    material: Material;
}

export interface PaperMaterial {
    title: string; // 논문명
    writer: string; // 저자
    createdAt: string; // 작성일자
    fileUrl: string; // 첨부파일 주소
    content: string;
    material: Material;
}

export type News = "센터 소식" | "행사 소식";

export interface CenterNews {
    title: string; // 제목
    writer: string; // 작성자
    createdAt: string; // 등록일
    content: string; // 내용
    fileUrl: string; // 첨부파일
    news: News;
}

export interface EventNews {
    title: string; // 제목
    writer: string; // 저자
    createdAt: string; // 작성일자
    content: string; // 내용
    fileUrl: string; // 첨부파일
    news: News;
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
    answerAt: string; // 답변 날짜
}

export interface GalleryCard {
    title: string;
    createdAt: string;
    imgUrl: string;
    isBanner: boolean;
    card: Card;
}

export type Card = "갤러리 게시물";

export interface ResearchReport {
    createdAt: string; // 파일 올린 날짜
    fileUrl: string;
    imgUrl: string;
    researcher: string; // 연구자
    title: string; // 제목
    year: string; //발행년도
}

export interface Project {
    title_KO: string;
    description: string;
    consignment: string[];
    startedAt: string;
    completed: boolean;
    endedAt: string;
    imageUrl?: string;
}

export interface Thesis {
    title: string; // 제목
    createdAt: string; // 파일 올린 날짜
    writer: string; // 작성자

    type: string; // 학회지
    researcher: string; //연구자
    year: string; //발행년도
}
