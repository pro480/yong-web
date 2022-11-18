import React from "react";
import bannerImage from "../../public/images/major/evaluationbanner.jpg";
import MajorForm from "../../src/components/major/MajorForm";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Edu_evaluation() {
    return (
        <div>
            <div>
                <HeadMeta title={"EBA | 교육평가"} description={"교육평가 전공에 대해 소개합니다"}/>
                <MajorForm
                    bannerTitle='교육평가'
                    bannerContent='교육평가 전공에 대해 소개합니다.'
                    image={bannerImage}
                    introContent='교육평가 전공은 교육 분야의 평가와 관련된 각종 이슈와 제도를 탐구하는 분야로 교육평가 전공에서는 대입제도, 국가 수준의 다양한 시험 체제(수능, 국가수준 학업 성취도 평가, 진단 평가 등)에 대한 연구를 중점적으로 하게된다.'
                    prospectContent='교육 평가 학과에 대한 전망을 적어주세요'
                />
            </div>
        </div>
    );
}

export default Edu_evaluation;
