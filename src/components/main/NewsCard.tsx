import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

interface Props {
    title: string;
}

function NewsCard({ title }: Props) {
    return (
        <div className='rouxs:mb-1 mb-4 flex h-[60px] w-[95%]  flex-col rounded-bl-lg rounded-tr-lg border bg-GRAY_COLOR-200 px-2 pt-1 md:mb-0 md:h-full md:w-[25%] md:rounded-bl-[25px] md:rounded-tr-[25px] md:px-4 md:pt-3 md:pb-4 lg:rounded-bl-[30px] lg:rounded-tr-[30px] desktop:rounded-tr-3xl desktop:rounded-bl-3xl desktop:px-10 desktop:pt-8 desktop:pb-10'>
            <div className='md:border-b-3 h-5 w-1/4 border-b-2 border-b-PRIMARY_COLOR-300 text-xs font-semibold md:h-7 md:w-3/4 md:text-lg lg:h-8 lg:text-xl desktop:h-12 desktop:border-b-4 desktop:text-2xl'>
                {title}
            </div>
            <div className=' overflow-hidden text-ellipsis whitespace-pre text-sm font-semibold md:my-2  lg:my-3 lg:text-sm desktop:my-4 desktop:text-lg'>
                {title} 제목이 들어갑니다{" "}
            </div>
            <div className=' hidden overflow-hidden text-ellipsis text-[3px] md:mb-2 md:flex md:h-[300px]  md:flex-1 md:text-sm lg:mb-3  lg:h-[400px] lg:text-base desktop:mb-4 desktop:h-[500px] desktop:text-lg'>
                안녕하세요 수업 시간에 공지한 바대로 보강 주간에 예정되어 있던
                동영상 강의는 취소하고 현장 전문가 대면 특강으로 대체하고자
                합니다. 특강 일시는 12월 13일 (화) 3시- 5시 까지입니다. 장소는
                저희 강의실 서호관 334호입니다. 특강 강사는 저희 교육학과 출신의
                중학교 교사이신 관교중 손형경 선생님(교육학과 06학번) 입니다.
                착오 없으시기 바랍니다.
            </div>
            <div className='flex w-full    items-center justify-end text-[5px] text-gray-500 md:text-sm desktop:text-base'>
                <ClockIcon className=' h-4 md:h-6 ' />
                <div>2022-12-12</div>
            </div>
        </div>
    );
}

export default NewsCard;
