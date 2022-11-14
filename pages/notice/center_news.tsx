import React from "react";
import NewsTable from "../../src/components/notice/NewsTable";

function Center() {
    return (
        <div>
            <NewsTable news="센터 소식" />
        </div>
    );
}

export default Center;

/* 센터소식
    create ✓
    read   ✓
    update ✓
    delete ✓
    파일 수정관련해서 수정시(no file change)? 일단 현재파일로 설정
*/ 