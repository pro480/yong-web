import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import CenterLeaderHistory from "./CenterLeaderHistory";
import { useTranslation } from 'next-i18next'
import "../../../public/locales/i18n"


function CenterLeaderCareer() {
    const { t } = useTranslation();

    return (
        <div className='my-1 flex h-fit flex-col py-6 text-PRIMARY_COLOR-700 xs:my-0 xs:flex-row xs:items-center xs:py-8 md:py-10 lg:py-12 desktop:py-16'>
            {/* 경력 아이콘  */}
            <div className='flex h-1/4 w-full flex-col items-center gap-y-2 xs:h-full xs:w-1/4 '>
                <BriefcaseIcon className='h-8  md:h-12' />
                <p className='text-sm font-semibold md:text-base lg:text-lg desktop:text-xl'>
                    {t(`centerLeaderInfo.career`)}
                </p>
            </div>

            {/* 경력 내용 */}
            <ul className='ml-0  mt-3 flex flex-col text-sm  font-semibold xs:mt-0 xs:ml-2 md:ml-6 md:text-base lg:ml-10 desktop:ml-12 desktop:text-lg '>
                <CenterLeaderHistory content={t(`centerLeaderInfo.ex_career1`)} />
                <CenterLeaderHistory content={t(`centerLeaderInfo.ex_career2`)} />
                <CenterLeaderHistory content={t(`centerLeaderInfo.ex_career3`)} />
                <CenterLeaderHistory content={t(`centerLeaderInfo.now_career1`)} />
                <CenterLeaderHistory content={t(`centerLeaderInfo.now_career2`)} />
            </ul>
        </div>
    );
}

export default CenterLeaderCareer;
