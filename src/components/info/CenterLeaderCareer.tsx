import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import CenterLeaderHistory from "./CenterLeaderHistory";

function CenterLeaderCareer() {
    return (
        <div className='my-1 flex h-fit flex-col py-6 text-PRIMARY_COLOR-700 xs:my-0 xs:flex-row xs:items-center xs:py-8 md:py-10 lg:py-12 desktop:py-16'>
            {/* 경력 아이콘  */}
            <div className='flex h-1/4 w-full flex-col items-center gap-y-2 xs:h-full xs:w-1/4 '>
                <BriefcaseIcon className='h-8  md:h-12' />
                <p className='text-sm font-semibold md:text-base lg:text-lg desktop:text-xl'>
                    주요 경력
                </p>
            </div>

            {/* 경력 내용 */}
            <ul className='ml-0  mt-3 flex flex-col text-sm  font-semibold xs:mt-0 xs:ml-2 md:ml-6 md:text-base lg:ml-10 desktop:ml-12 desktop:text-lg '>
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
