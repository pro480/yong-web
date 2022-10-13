import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import OrganizationBanner from "../../../src/components/OrganizationBanner";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import OrganizationTable from "../../../src/components/OrganizationTable";
import researchImage from "../../../public/images/organization/researchBanner.jpg";

function Research() {
    return (
        <div>
            <PageTitle
                title='연구 자문단'
                description='교육빅데이터응용연구센터의 연구 자문단입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='연구 자문단'
                thirdLink='/info/organization/research'
            />

            <OrganizationBanner
                title='Research Advisory Team'
                description='연구 자문단에 대한 설명을 적어주세요'
                image={researchImage}
            />

            <OrganizationTable team='연구 자문단' />
        </div>
    );
}

export default Research;
