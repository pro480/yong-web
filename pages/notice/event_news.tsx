import React from "react";
import NewsTable from "../../src/components/notice/NewsTable";

function Event_news() {
    return (
        <div>
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
