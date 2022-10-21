import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import FirstDepthBanner from "../../../src/components/FirstDepthBanner";
import MemberTable from "../../../src/components/MemberTable";

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

            {/* 이메일 링크 a태그 추가 */}
            <MemberTable organization='연구 윤리 자문단' />
        </div>
    );
}

export default Ethics;
