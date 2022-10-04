import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Task() {
    return (
        <div>
            <PageTitle
                title='주요 수행 업무'
                description='주요 수행 업무 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='주요 수행 업무'
                secondLink='/info/task'
            />
            <div>dsd</div>
        </div>
    );
}

export default Task;
