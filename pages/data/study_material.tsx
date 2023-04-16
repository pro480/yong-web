import React from "react";
import MaterialTable from "../../src/components/data/MaterialTable";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Research() {
    return (
        <div>
            <HeadMeta title={"EBA | 학습 자료"} description={"EBA센터 학습 자료실입니다"}/>
            <MaterialTable material="학습 자료" />
        </div>
    );
}

export default Research;