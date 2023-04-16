import React from "react";
import CenterLeaderInfo from "../../src/components/info/CenterLeaderInfo";
import CenterLeaderCareer from "../../src/components/info/CenterLeaderCareer";
import HorizontalRule from "../../src/components/common/HorizontalRule";
import CenterLeaderEducation from "../../src/components/info/CenterLeaderEducation";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Center_info() {
    return (
        <div>
            <HeadMeta title={"EBA | 센터장 소개"} description={"EBA센터장 소개"}/>
            <CenterLeaderInfo />
            {/*교수님사진부분*/}
            <CenterLeaderCareer />
            {/*커리어*/}
            <HorizontalRule />
            {/*구분선*/}
            <CenterLeaderEducation />
            {/*학력*/}
        </div>
    );
}

export default Center_info;
