import React from "react";
import PageTitle from "../../src/components/PageTitle";
// import MemberList from "../../src/components/MemberList";
import GraduateList from "../../src/components/GraduateList";

function Alumni() {
    return (
        <div>
            <PageTitle
                title='동문'
                description='동문 페이지입니다. 설명을 입력해주세요'
                firstDepth='센터 소개'
                firstLink='/major'
                secondDepth='동문'
                secondLink='/major/alumni'
            />
            {/* <MemberList team='연구팀1' />
            <MemberList team='연구팀2' /> */}
            <GraduateList classification='교수' />
            <GraduateList classification='졸업생' />

            {/*동문 소개란*/}
            <main className='flex flex-wrap gap-y-8 pb-12'></main>
        </div>







    );
}

export default Alumni;
