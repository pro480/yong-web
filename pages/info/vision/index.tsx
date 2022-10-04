import React from "react";
import PageTitle from "../../../src/components/PageTitle";

function Index() {
    return (
        <div>
            <PageTitle
                title='센터 비전'
                description='센터 비전 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 비전'
                secondLink='/info/vision'
            />
        </div>
    );
}

export default Index;
