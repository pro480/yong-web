import React from "react";
import MemberTable from "../../../src/components/info/MemberTable";
import HeadMeta from "../../../src/components/common/Layout/HeadMeta";

function Network() {
    return (
        <div>
            <HeadMeta title={"EBA | 연구협력 네트워크"} description={"EBA센터 연구협력 네트워크"}/>
            <MemberTable organization='연구협력 네트워크' />
        </div>
    );
}

export default Network;
