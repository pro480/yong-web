import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import CenterLeaderHistory from "./CenterLeaderHistory";

function CenterLeaderCareer() {
    return (
        <div className='flex h-fit items-center py-16 text-PRIMARY_COLOR-700'>
            <div className='flex h-full w-1/4 flex-col items-center gap-y-2 '>
                <BriefcaseIcon className='h-12' />
                <p className='text-xl font-semibold'>주요 경력</p>
            </div>

            {/* 경력 내용 */}
            <ul className='ml-12 flex flex-col text-lg font-semibold '>
                <CenterLeaderHistory content='(전) 한국교육과정평가원 수능기획분석실장' />
                <CenterLeaderHistory content='(전) 국회미래연구원 연구위원' />
                <CenterLeaderHistory content='(전) 영남대학교 교육학과 교수' />
                <CenterLeaderHistory content='(현) 한국교육평가학회 이사' />
                <CenterLeaderHistory content='(현) 인하대학교 교육학과 교수' />
            </ul>
        </div>
    );
}

export default CenterLeaderCareer;
