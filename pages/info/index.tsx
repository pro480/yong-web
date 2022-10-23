import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import CenterLeaderHistory from "../../src/components/info/CenterLeaderHistory";
import CenterLeaderInfo from "../../src/components/info/CenterLeaderInfo";
import CenterLeaderCareer from "../../src/components/info/CenterLeaderCareer";
import HorizontalRule from "../../src/components/common/HorizontalRule";
import CenterLeaderEducation from "../../src/components/info/CenterLeaderEducation";

function Index() {
    return (
        <div>
            <PageTitle
                title='센터장 소개'
                description=' 센터장 소개 페이지에 대한 설명을 입력해주세요 '
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터장 소개'
                secondLink='/info'
            />
            <CenterLeaderInfo />
            <CenterLeaderCareer />
            <HorizontalRule />
            <CenterLeaderEducation />
        </div>
    );
}

export default Index;
