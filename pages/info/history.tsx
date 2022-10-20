import React from "react";
import PageTitle from "../../src/components/PageTitle";
import Image from "next/image";
import HistoryPost from "../../src/components/HistoryPost";

function History() {
    return (
        <div>
            <PageTitle
                title='센터 연혁'
                description='센터 연혁 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 연혁'
                secondLink='/info/history'
            />
            <div className='relative flex items-center justify-center bg-gray-300 xs:h-[100px] sm:h-[150px] lg:h-[300px]'>
                <Image
                    src='http://www.inha.ac.kr/CrossEditor/binary/images/000004/7%EC%9B%94.jpg'
                    alt='인하대 60주년관 전경'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='60% 40%'
                    priority={true}
                />
            </div>

            {/*2022년*/}
            <section className='my-12 border-b flex '>
                <h1 className='font-bold xs:pl-5 xs:pr-8 xs:text-xl sm:pl-10 sm:pr-16 sm:text-2xl lg:pr-32 text-PRIMARY_COLOR-500'>
                    2022
                </h1>
                <div>
                    <HistoryPost
                        month='10월'
                        content='센터 웹페이지 론칭'
                    />
                    <HistoryPost
                        month='03월'
                        content='제1대 이용상 센터장 취임'
                    />
                </div>
            </section>

            {/*2021년*/}
            <section className='my-12 border-b flex '>
                <h1 className='font-bold xs:pl-5 xs:pr-8 xs:text-xl sm:pl-10 sm:pr-16 sm:text-2xl lg:pr-32 text-PRIMARY_COLOR-500'>
                    2021
                </h1>
                <div>
                    <HistoryPost
                        month='12월'
                        content='연혁 내용을 입력해주세요'
                    />
                    <HistoryPost
                        month='05월'
                        content='연혁 내용을 입력해주세요'
                    />
                    <HistoryPost
                        month='01월'
                        content='연혁 내용을 입력해주세요'
                    />
                </div>
            </section>

            {/*2020년*/}
            <section className='my-12 border-b flex '>
                <h1 className='font-bold xs:pl-5 xs:pr-8 xs:text-xl sm:pl-10 sm:pr-16 sm:text-2xl lg:pr-32 text-PRIMARY_COLOR-500'>
                    2020
                </h1>
                <div>
                    <HistoryPost
                        month='10월'
                        content='센터 웹페이지 론칭'
                    />
                    <HistoryPost
                        month='03월'
                        content='제1대 이용상 센터장 취임'
                    />
                </div>
            </section>
        </div>
    );
}

export default History;
