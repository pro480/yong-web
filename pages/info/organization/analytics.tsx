import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import OrganizationBanner from "../../../src/components/OrganizationBanner";
import OrganizationTable from "../../../src/components/OrganizationTable";
import analyticsImage from "../../../public/images/organization/analytics.jpg";

function Analytics() {
    return (
        <div>
            <PageTitle
                title='데이터분석 연구팀'
                description='교육빅데이터응용연구센터의 데이터분석 연구팀입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='데이터분석 연구팀'
                thirdLink='/info/organization/analytics'
            />

            <OrganizationBanner
                title='Data Analysis Research Team'
                description='데이터분석 연구팀에 대한 설명을 적어주세요'
                image={analyticsImage}
            />
            <OrganizationTable team='데이터 분석팀' />
        </div>
    );
}

export default Analytics;
