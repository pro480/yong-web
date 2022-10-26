import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import NewsCard from "./NewsCard";

function MainNews() {
    return (
        <div className='flex h-[700px] w-full flex-col items-center bg-main-news-bg pt-20 pb-32 '>
            {/*타이틀 입니다*/}
            <div className='h-[20%] text-4xl font-bold text-white'>
                교육 빅데이터 응용 연구센터 소식
            </div>
            {/*뉴스카드 컨테이너 입니다*/}
            <div className='flex h-full w-full justify-center gap-x-16'>
                <NewsCard title='공지사항' />
                <NewsCard title='보도자료' />
                <NewsCard title='연구원 모집' />
            </div>
        </div>
    );
}

export default MainNews;
