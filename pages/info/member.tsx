import React from "react";
import PageTitle from "../../src/components/PageTitle";
import ShowMember from "../../src/components/ShowMember";

function Member() {
    return (
        <div className='relative'>
            <PageTitle
                title='센터 구성원'
                description='센터 구성원 페이지입니다. 설명을 입력해주세요'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 구성원'
                secondLink='/info/member'
            />
            <ShowMember organization='센터장' />
            <ShowMember organization='연구협력 네트워크' />
            <ShowMember organization='연구 자문단' />
            <ShowMember organization='연구 윤리 자문단' />
            <ShowMember organization='데이터 분석팀' />
        </div>
    );
}

export default Member;
