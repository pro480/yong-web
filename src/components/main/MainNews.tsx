import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { limit, orderBy, query } from "firebase/firestore";
import { collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { CenterNews, EventNews } from "../../../typing";
import MainNewsRecruit from "./MainNewsRecruit";
import { Document, Page, pdfjs } from "react-pdf";

function MainNews() {
    const centerNewsCollectionRef = query(
        collection(db, "센터 소식"),
        limit(1),
        orderBy("createdAt", "desc")
    );
    const centerNewsCollectionQuery = useFirestoreQueryData(
        ["mainCenterNews"],
        centerNewsCollectionRef
    );
    const eventNewsCollectionRef = query(
        collection(db, "행사 소식"),
        limit(1),
        orderBy("createdAt", "desc")
    );
    const eventNewsCollectionQuery = useFirestoreQueryData(
        ["mainEventNews"],
        eventNewsCollectionRef
    );

    const centerNewsData =
        centerNewsCollectionQuery.data &&
        centerNewsCollectionQuery.data?.length > 0 &&
        (centerNewsCollectionQuery.data[0] as CenterNews);
    const eventNewsData =
        eventNewsCollectionQuery.data &&
        eventNewsCollectionQuery.data?.length > 0 &&
        (eventNewsCollectionQuery.data[0] as EventNews);

    if (
        eventNewsCollectionQuery.isLoading ||
        centerNewsCollectionQuery.isLoading
    ) {
        return <div>로딩중</div>;
    }

    return (
        <div className='main_news_bg flex w-full flex-col py-5 px-6 lg:px-10 lg:py-12'>
            {/*타이틀 입니다*/}
            <div className='h-[20%] py-5 text-xl font-bold text-white lg:text-2xl xl:text-3xl'>
                교육 빅데이터 응용 연구센터 소식
            </div>
            {/*뉴스카드 컨테이너 입니다*/}
            <div className='flex h-full w-full flex-wrap justify-center gap-y-6 gap-x-16 md:justify-around lg:grid lg:grid-cols-3 lg:gap-x-6 xl:gap-x-12'>
                <NewsCard
                    href='/notice/center_news'
                    data={centerNewsData as CenterNews}
                    title='센터 소식'
                />
                <NewsCard
                    href='/notice/event_news'
                    data={eventNewsData as EventNews}
                    title='행사 소식'
                />
                <MainNewsRecruit href='/notice/recruit' title='연구원 모집' />
            </div>
        </div>
    );
}

export default MainNews;
