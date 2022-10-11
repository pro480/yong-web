import React from "react";
import PageTitle from "../../src/components/PageTitle";
import NameCard from "../../src/components/NameCard";
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

            {/*동문 소개란*/}
            <main className='flex flex-wrap gap-y-8 pb-12'></main>
        </div>
    );
}

export default Alumni;
