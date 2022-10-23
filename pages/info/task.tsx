import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import HorizontalRule from "../../src/components/common/HorizontalRule";
import TaskCard from "../../src/components/info/TaskCard";
import dummyImage from "../../public/dummy.png";

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

            <TaskCard
                image={dummyImage}
                title='업무 1'
                content='업무 내용에 관한 설명'
            />
            <HorizontalRule />

            <TaskCard
                image={dummyImage}
                title='업무 2'
                content='업무 내용에 관한 설명'
            />
            <HorizontalRule />

            <TaskCard
                image={dummyImage}
                title='업무 3'
                content='업무 내용에 관한 설명'
            />
        </div>
    );
}

export default Task;
