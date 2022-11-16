import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { limit, orderBy, query } from "firebase/firestore";
import { collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { CenterNews, EventNews } from "../../../typing";
import MainNewsRecruit from "./MainNewsRecruit";
import { Document, Page } from "react-pdf";

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

    console.log("centerNews",centerNewsCollectionQuery);

    // const centerNewsData = centerNewsCollectionQuery.data![0] as CenterNews;
    // const eventNewsData = eventNewsCollectionQuery.data![0] as EventNews;

    // 연구원 모집
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        if (window.innerWidth > 1020) {
            setWidth(1000);
        } else if (window.innerWidth > 820) {
            setWidth(800);
        } else {
            setWidth(450);
        }

        const handleScreen = () => {
            if (window.innerWidth > 1020) {
                setWidth(1000);
            } else if (window.innerWidth > 820) {
                setWidth(800);
            } else {
                setWidth(450);
            }
        };
        window.addEventListener("resize", handleScreen);
        return () => {
            window.removeEventListener("resize", handleScreen);
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <div className='main_news_bg flex w-full flex-col py-5 px-5'>
            {/*타이틀 입니다*/}
            <div className='h-[20%] py-5 text-xl font-bold text-white'>
                교육 빅데이터 응용 연구센터 소식
            </div>
            {/*뉴스카드 컨테이너 입니다*/}
            <div className='flex h-full w-full flex-wrap justify-center gap-y-6 gap-x-16'>
                {/*<NewsCard data={centerNewsData} title='센터 소식' />*/}
                {/*<NewsCard data={eventNewsData} title='행사 소식' />*/}
                <div>
                    <div className='flex w-full justify-center '>
                        <Document
                            className='border'
                            file='/recruit.pdf' // 여기는 가지고 계신 pdf 주소
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {/* height, width는 number 타입으로 vh, %는 먹지 않습니다. */}
                            <Page
                                pageNumber={pageNumber}
                                className='w-full'
                                width={width}
                            />
                        </Document>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainNews;
