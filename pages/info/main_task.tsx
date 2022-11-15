import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import HorizontalRule from "../../src/components/common/HorizontalRule";
import TaskCard from "../../src/components/info/TaskCard";
import dummyImage from "../../public/dummy.png";

function Main_task() {
    return (
        <div>


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

export default Main_task;
