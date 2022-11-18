import React from "react";
import MemberTable from "../../../src/components/info/MemberTable";
import HeadMeta from "../../../src/components/common/Layout/HeadMeta";

function Research() {
    return (
        <div>
            <HeadMeta title={"EBA | 연구 자문단"} description={"EBA센터 연구 자문단"}/>

            <MemberTable organization='연구 자문단' />
        </div>
    );
}

export default Research;
