import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import FirstDepthBanner from "../../../src/components/FirstDepthBanner";
import MemberTable from "../../../src/components/MemberTable";
import networkImage from "../../../public/images/banner/infoBanner.jpg";

function Network() {
    return (
        <div>
            {/*<FirstDepthBanner*/}
            {/*    title='Research Collaboration Network'*/}
            {/*    description='조직에 대한 설명을 적어주세요'*/}
            {/*    image={networkImage}*/}
            {/*/>*/}
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

            {/* 이메일 링크 a태그 추가 */}
            <MemberTable organization='연구협력 네트워크' />
        </div>
    );
}

export default Network;
