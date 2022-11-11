import React from "react";
import bannerImage from "../../public/images/major/evaluationbanner.jpg";
import MajorForm from "../../src/components/major/MajorForm";

function Evaluation() {
    return (
        <div>
            <div>
                <MajorForm
                    bannertitle='교육 평가'
                    bannercontex='교육 평가 학과에 대해 소개합니다.'
                    image={bannerImage}
                    introcontex='교육 평가 학과에 대한 설명을 적어주세요'
                    prospectcontex='교육 평가 학과에 대한 전망을 적어주세요'
                />
            </div>
        </div>
    );
}

export default Evaluation;
