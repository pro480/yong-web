import React from "react";
import NewsCard from "./NewsCard";

function MainNews() {
    return (
        <div className='main_news_bg flex h-[300px] w-full flex-col items-center pt-[4%] pb-[7%] xs:h-[350px] md:h-[500px] lg:h-[600px] desktop:h-[700px] '>
            {/*타이틀 입니다*/}
            <div className='mb-2 h-[20%] text-lg font-bold text-white xs:text-xl md:mb-4 md:text-2xl lg:text-3xl desktop:mb-8 desktop:text-4xl'>
                교육 빅데이터 응용 연구센터 소식
            </div>
            {/*뉴스카드 컨테이너 입니다*/}
            <div className='flex h-fit w-full flex-col items-center justify-center gap-y-2 xs:gap-y-4 md:h-full md:flex-row md:items-start md:gap-y-0 md:gap-x-12 lg:gap-x-14 desktop:gap-x-16'>
                <NewsCard title='센터소식' />
                <NewsCard title='행사소식' />
                <NewsCard title='QNA' />
            </div>
        </div>
    );
}

export default MainNews;
