import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import { info } from "../../src/utils/Utils";

const resources = {
    //영어
    en: {
        translation: {
            centerLeaderInfo:{
                centerLeader : "Center Leader",
                name : "Yongsang Lee",
                affiliation : "Affiliation and Title",
                affiliation_now : "InHa Univ Prof.(Education)",

                career : "Career",
                ex_career1 : "KICE Head of the CSAT Planning and Analysis Office",
                ex_career2 : "NAFI Research Engineer",
                ex_career3 : "Yeungnam Univ Prof.(Education)",
                now_career1 : "KOSEEV Director",
                now_career2 : "InHa Univ Prof.(Education)",

                education_title : "Education",
                education1 : "Bachelor Degree at Yonsei University(Education)",
                education2 : "Master Degree at Yonsei University(Educational Statistics)",
                education3 : "Ph.D at UC Berkeley(Educational Measurement / Evaluation)"
            },

            mainHeaderMenu:{
                centerInfo : "Center Info",
                research : "Research & Business",
                major : "Edu-Data Science",
                data : "Papers & Research Reports",
                notice : "Center News",
            },

            sidebarMenu : {

            }

        }
    },

    //한글
    ko:{
        translation: {
            centerLeaderInfo:{
                centerLeader : "센터장",
                name : "이용상",
                affiliation : "소속 및 직함",
                affiliation_now : "인하대학교 교육학과 교수",

                career : "주요 경력",
                ex_career1 : "(전) 한국교육과정평가원 수능기획분석실장",
                ex_career2 : "(전) 국회미래연구원 연구위원",
                ex_career3 : "(전) 영남대학교 교육학과 교수",
                now_career1 : "(현) 한국교육평가학회 이사",
                now_career2 : "(현) 인하대학교 교육학과 교수",

                education_title : "학력",
                education1 : "연세대학교 학사 (교육학)",
                education2 : "연세대학교 석사 (교육 통계)",
                education3 : "UC Berkeley 박사 (교육 측정/평가)"
            },

            mainHeaderMenu:{
                centerInfo : "센터 소개",
                research : "연구 및 사업",
                major : "전공 소개",
                data : "자료실",
                notice : "공지사항",
            },

            sidebarMenu : {

            }

        }
    }


};

i18next.use(initReactI18next).init({
    resources,
    lng:"ko",
    interpolation:{
        escapeValue: false,
    },
});

export default i18next;