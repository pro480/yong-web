import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import {FlagIcon} from "@heroicons/react/24/outline"


function Goals() {
    return (
    <div>
        <PageTitle
                title='중장기 발전목표'
                description='중장기 발전목표 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 비전'
                secondLink='/info/vision'
                thirdDepth='중장기 발전목표'
                thirdLink='/info/vision/goals'
            />
        {/* 발전목표 이미지 */}
        <div className="bg-gray-300">
            예시 레이아웃들입니다. 원하시는 걸 선택해서 알려주세요
        </div>
        <div className="flex flex-wrap justify-center gap-y-10 gap-x-10">
            <img
                src="/goal1.png"
                className="w-1/3 h-fit"
            />

            <img
                src="/goal2.png"
                className="w-1/3  h-fit"
            />

            <img
                src="/goal3.jpg"
                className="w-1/3  h-fit"
            />

            <img
                src="/goal4.png"
                className="w-1/3  h-fit"
            />
        </div>
    
    
    </div>
    
    );
}

export default Goals;
