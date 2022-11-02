import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import CenterLeaderHistory from "./CenterLeaderHistory";

function CenterLeaderEducation() {
    return (
        <div className='flex h-fit flex-col py-6  text-PRIMARY_COLOR-700 xs:flex-row xs:items-center xs:py-8 md:py-10 lg:py-12 desktop:py-16'>
            {/* 학력 아이콘 */}
            <div className='flex h-1/4 w-full flex-col items-center gap-y-2 xs:h-full xs:w-1/4 '>
                <AcademicCapIcon className='h-12' />

                <p className='text-sm font-semibold md:text-base lg:text-lg desktop:text-xl'>
                    학력
                </p>
            </div>

            {/* 학력내용 */}
            <ul className='my-3  ml-0 flex flex-col text-sm  font-semibold xs:my-0 xs:ml-2 md:ml-6 md:text-base lg:ml-10 desktop:ml-12 desktop:text-lg '>
                <CenterLeaderHistory content='연세대학교 학사 (교육학)' />
                <CenterLeaderHistory content='연세대학교 석사 (교육 통계)' />
                <CenterLeaderHistory content='UC Berkeley 박사 (교육 측정/평가)' />
            </ul>
        </div>
    );
}

export default CenterLeaderEducation;
