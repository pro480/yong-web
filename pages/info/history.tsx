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

            {/*2022년*/}
            <section className='my-12 flex-nowrap border-b sm:flex '>
                <h1 className='my-8 pr-4 text-xl font-bold text-PRIMARY_COLOR-500 sm:my-0 sm:pl-10 sm:pr-16 sm:text-2xl lg:pr-32'>
                    2022
                </h1>
                <div>
                    <HistoryPost month='10월' content='센터 웹페이지 론칭' />
                    <HistoryPost
                        month='03월'
                        content='제1대 이용상 센터장 취임'
                    />
                </div>
            </section>

            {/*2021년*/}
            <section className='my-12 flex-nowrap border-b sm:flex '>
                <h1 className='my-8 pr-4 text-xl font-bold text-PRIMARY_COLOR-500 sm:my-0 sm:pl-10 sm:pr-16 sm:text-2xl lg:pr-32'>
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
            <section className='my-12 flex-nowrap border-b sm:flex '>
                <h1 className='my-8 pr-4 text-xl font-bold text-PRIMARY_COLOR-500 sm:my-0 sm:pl-10 sm:pr-16 sm:text-2xl lg:pr-32'>
                    2020
                </h1>
                <div>
                    <HistoryPost
                        month='10월'
                        content='연혁내용을 입력해주세요' />
                    <HistoryPost
                        month='03월'
                        content='EBA 설립'
                    />
                </div>
            </section>
        </div>
    );
}

export default History;
