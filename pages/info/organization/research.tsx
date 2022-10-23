import React from "react";
import PageTitle from "../../../src/components/common/Layout/PageTitle";
import Banner from "../../../src/components/common/Banner";
import MemberTable from "../../../src/components/info/MemberTable";

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

            <MemberTable organization='연구 자문단' />
        </div>
    );
}

export default Research;
