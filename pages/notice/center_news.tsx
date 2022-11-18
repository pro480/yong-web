import React from "react";
import NewsTable from "../../src/components/notice/NewsTable";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Center() {
    return (
        <div>
            <HeadMeta title={"EBA | 센터 소식"} description={"EBA센터 소식"}/>
            <NewsTable news="센터 소식" />
        </div>
    );
}

export default Center;
