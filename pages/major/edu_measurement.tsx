import React from "react";
import bannerImage from "../../public/images/major/measurebanner.jpg";
import MajorForm from "../../src/components/major/MajorForm";

function Edu_measurement() {
    return (
        <div>
            <div>
                <MajorForm
                    bannerTitle='교육측정'
                    bannerContent='교육측정 전공에 대해 소개합니다.'
                    image={bannerImage}
                    introContent='교육측정 전공은 인지적, 정의적 특성을 측정하는 방법론을 탐구하는 분야로서 고전검사이론, 문항반응이론, 동등화 등 다양한 이론과 통계 방법론을 활용한다. 교육측정 전공에서는 검사도구 개발, 문항 반응 데이터 분석 등을 위한 방법론을 탐구하고, R 또는 각종 문항반응모형 프로그램을 활용한 문항 분석 모델링 및 검사 도구 양호도 분석을 중점적으로 하게된다.'
                    prospectContent='교육 측정 학과에 대한 전망을 적어주세요'
                />
            </div>
        </div>
    );
}

export default Edu_measurement;
