import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Task() {
    return (
        <div>
            <PageTitle
                title='주요 수행 업무'
                description='주요 수행 업무 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                secondDepth='주요 수행 업무'
            />
            {/*secondDepth 와 thirdDepth 는 있으면 입력하고 없으면 입력 X*/}
        </div>
    );
}

export default Task;
