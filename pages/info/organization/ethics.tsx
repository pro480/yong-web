import React from "react";
import MemberTable from "../../../src/components/info/MemberTable";
import HeadMeta from "../../../src/components/common/Layout/HeadMeta";

function Ethics() {
    return (
        <div>
            <HeadMeta title={"EBA | 연구 윤리 자문단"} description={"EBA센터 연구 윤리 자문단"}/>
            {/* 이메일 링크 a태그 추가 */}
            <MemberTable organization='연구 윤리 자문단' />
        </div>
    );
}

export default Ethics;
