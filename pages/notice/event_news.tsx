import React from "react";
import NewsTable from "../../src/components/notice/NewsTable";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Event_news() {
    return (
        <div>
            <HeadMeta title={"EBA | 행사 소식"} description={"EBA센터 행사 소식입니다"}/>
            <NewsTable news='행사 소식' />
        </div>
    );
}

export default Event_news;

/* 행사소식
    create ✓
    read   ✓
    update ✓
    delete ✓
    파일 수정관련해서 수정시(no file change)? 일단 현재파일로 설정
*/
