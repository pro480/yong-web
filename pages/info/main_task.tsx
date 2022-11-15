import React from "react";
import HorizontalRule from "../../src/components/common/HorizontalRule";
import TaskCard from "../../src/components/info/TaskCard";
import dummyImage from "../../public/dummy.png";
import { HomeIcon } from "@heroicons/react/24/outline";
import first from "../../public/images/maintask/first.png";
import second from "../../public/images/maintask/second.png";
import third from "../../public/images/maintask/third.png";
import fourth from "../../public/images/maintask/fourth.png";
import fifth from "../../public/images/maintask/fifth.png";
import sixth from "../../public/images/maintask/sixth.png";

function Main_task() {
    return (
        <div className='flex flex-wrap justify-center pt-4 md:pt-12 gap-x-2 sm:gap-x-4 gap-y-4 px-2'>
            <TaskCard
                image={first}
                content='교육 빅데이터 활용 각종 연구 수행'
            />
            <TaskCard
                image={second}
                content='인공지능 활용 교수, 학습, 평가 연구 수행'
            />
            <TaskCard
                image={third}
                content='논·서술형 평가 지원 및 시스템 개발 연구 수행'
            />
            <TaskCard image={fourth} content='맞춤형 데이터 실무 교육 지원' />
            <TaskCard
                image={fifth}
                content='학부 재학생, 대학원생 교수자 연구 지원을 위한 통계 자료 및 분석 지원'
            />
            <TaskCard
                image={sixth}
                content='교내·교외 데이터 교류&분석을 위한 네트워크 구축'
            />
        </div>
    );
}

export default Main_task;
