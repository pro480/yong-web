import React from "react";
import PageTitle from "../../src/components/PageTitle";
import MemberList from "../../src/components/MemberList";

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
            <MemberList team='센터장' />
            <MemberList team='연구팀1' />
            <MemberList team='연구팀2' />
            <MemberList team='연구팀3' />
        </div>
    );
}

export default Member;
