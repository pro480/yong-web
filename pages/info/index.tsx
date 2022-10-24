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

            <CenterLeaderInfo />
            <CenterLeaderCareer />
            <HorizontalRule />
            <CenterLeaderEducation />
        </div>
    );
}

export default Index;
