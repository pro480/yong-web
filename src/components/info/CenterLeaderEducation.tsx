import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import CenterLeaderHistory from "./CenterLeaderHistory";

function CenterLeaderEducation() {
    return (
        <div className='flex h-fit items-center py-12 text-PRIMARY_COLOR-700'>
            <div className='flex h-full w-1/4 flex-col items-center gap-y-2 '>
                {/* 학력 아이콘 */}
                <AcademicCapIcon className='h-12' />

                {/* 텍스트 */}
                <p className='text-xl font-semibold'>학력</p>
            </div>

            {/* 학력내용 */}
            <ul className='ml-12 flex flex-col text-lg font-semibold '>
                <CenterLeaderHistory content='연세대학교 학사 (교육학)' />
                <CenterLeaderHistory content='연세대학교 석사 (교육 통계)' />
                <CenterLeaderHistory content='UC Berkeley 박사 (교육 측정/평가)' />
            </ul>
        </div>
    );
}

export default CenterLeaderEducation;
