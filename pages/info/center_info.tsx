import React from "react";
import CenterLeaderInfo from "../../src/components/info/CenterLeaderInfo";
import CenterLeaderCareer from "../../src/components/info/CenterLeaderCareer";
import HorizontalRule from "../../src/components/common/HorizontalRule";
import CenterLeaderEducation from "../../src/components/info/CenterLeaderEducation";

function Center_info() {
    return (
        <div>
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
