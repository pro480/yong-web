import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import OrganizationBanner from "../../../src/components/OrganizationBanner";
import OrganizationTable from "../../../src/components/OrganizationTable";
import ethicsImage from "../../../public/images/organization/ethicsBanner.jpg";

function Ethics() {
    return (
        <div>
            <PageTitle
                title='연구윤리 자문단'
                description='교육빅데이터응용연구센터의 연구윤리 자문단입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='연구윤리 자문단'
                thirdLink='/info/organization/ethics'
            />

            <OrganizationBanner
                title='Research Ethics Advisory Team'
                description='연구 윤리 자문단에 대한 설명을 적어주세요'
                image={ethicsImage}
            />

            {/* 이메일 링크 a태그 추가 */}
            <OrganizationTable team='연구 윤리 자문단' />
        </div>
    );
}

export default Ethics;
