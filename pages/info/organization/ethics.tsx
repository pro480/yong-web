import React from "react";
import PageTitle from "../../../src/components/common/Layout/PageTitle";
import Banner from "../../../src/components/common/Layout/Banner";
import MemberTable from "../../../src/components/info/MemberTable";

function Ethics() {
    return (
        <div>
            {/* 이메일 링크 a태그 추가 */}
            <MemberTable organization='연구 윤리 자문단' />
        </div>
    );
}

export default Ethics;
