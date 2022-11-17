import React from "react";
import bannerImage from "../../public/images/major/indexbanner.jpg";
import MajorForm from "../../src/components/major/MajorForm";

function Edudata_science() {
    return (
        <div>
            <MajorForm
                bannerTitle='에듀데이터사이언스'
                bannerContent='에듀데이터사이언스 전공에 대해 소개합니다.'
                image={bannerImage}
                introContent='에듀데이터사이언스 전공은 교육과 관련된 다양한 정형, 비정형 데이터들을 분석하고 활용할 수 있는 방법론을 탐구하는 분야로서 텍스트 마이닝, 머신러닝 기법을 주되게 활용한다. 따라서 에듀데이터사이언스 전공에서는 이러한 텍스트 마이닝과 머신러닝을 이용한 교육 데이터 분석 및 활용 방법을 탐구하고, R 또는 Python 등을 활용한 프로그래밍을 중점적으로 하게된다.'
                prospectContent='에듀 데이터 사이언스 학과에 대한 전망을 적어주세요'
            />
        </div>
    );
}

export default Edudata_science;
