import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import OrganizationBanner from "../../../src/components/OrganizationBanner";
import OrganizationTable from "../../../src/components/OrganizationTable";
import networkImage from "../../../public/images/organization/networkBanner.jpg";

function Network() {
    return (
        <div>
            <PageTitle
                title='연구 협력 네트워크'
                description='교육빅데이터응용연구센터의 연구 협력 네트워크입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='연구 협력 네트워크'
                thirdLink='/info/organization/network'
            />

            <OrganizationBanner
                title='Research Collaboration Network'
                description='조직에 대한 설명을 적어주세요'
                image={networkImage}
            />

            {/* 이메일 링크 a태그 추가 */}
            <OrganizationTable team='연구협력 네트워크' />
        </div>
    );
}

export default Network;
