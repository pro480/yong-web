import React from "react";
import bannerImage from "../../public/images/major/indexbanner.jpg";
import MajorForm from "../../src/components/major/MajorForm";

function Edudata_science() {
    return (
        <div>
            <MajorForm
                bannerTitle='에듀 데이터 사이언스'
                bannerContent='에듀 데이터 사이언스 학과에 대해 소개합니다.'
                image={bannerImage}
                introContent='에듀 데이터 사이언스 학과에 대한 설명을 적어주세요'
                prospectContent='에듀 데이터 사이언스 학과에 대한 전망을 적어주세요'
            />
        </div>
    );
}

export default Edudata_science;
