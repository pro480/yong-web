import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import styles from "../../src/styles/styles.module.css";
import { CareerCard } from "../../src/major/careerCard";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Career() {
    return (
        <main className='relative flex flex-col gap-y-12 pt-6'>
            <HeadMeta title={"EBA | 졸업 후 진로"} description={"졸업 후 진로"}/>
            <CareerCard
                title='대학교수 및 연구원'
                content='교육학과 대학원에서 교육측정 및 평가 전공으로 박사학위를 취득한 후 대학교수가 되거나 교육 데이터를 다루는 정부 및 민간 연구소의 연구원으로 진출할 수 있다.'
            />
            <CareerCard
                title='에듀테크 창업'
                content='빅데이터 및 인공지능을 활용하여 교육 분야에서 활용될 수 있는 다양한 서비스 및 프로그램을 개발하고 제공하는 창업의 기회를 가질 수 있다.'
            />
            <CareerCard
                title='측정 평가 전문가'
                content='개인의 정의적 인지적 특성을 측정하기 위한 각종 검사 도구를 개발하고, 검사 도구의 양호도를 검증, 각종 국가 수준의 평가 개선을 위한 자문을 수행하는 측정 평가 전문가로 활동할 수 있다.'
            />
            <CareerCard
                title='교육프로그램 평가 전문가'
                content='기업체에서 직원의 역량 개발을 위해 제공하는 각종 교육 프로그램의 효과성을 검증하고자 하는 수요가 증가하고 있으며, 이에 따라 기업체의 인재 개발팀과 같은 부서에 취업할 수 있다.'
            />
            <CareerCard
                title='교육공무원 및 행정 전문가'
                content='데이터에 기반한 교육 행정을 구현하기 위해 정부는 데이터 관련 역량과 전문성을 갖춘 인재를 선발하기 위한 개방형 직위를 확대하고 있으며, 이러한 기회를 통해 교육공무원 및 행정 문가로 진출할 수 있다.'
            />
        </main>
    );
}

export default Career;

// 글자 수: 공백포함 120자 제한 권고 요청
