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
            <main className='pb-12 flex flex-wrap gap-y-8'>
                <NameCard
                    img='동문사진'
                    name='Yong Sang Lee'
                    introduce='동문 소개글을 작성해주세요.'
                />
                <NameCard
                    img='동문사진'
                    name='Yong Sang Lee'
                    introduce='동문 소개글을 작성해주세요.'
                />
                <NameCard
                    img='동문사진'
                    name='Yong Sang Lee'
                    introduce='동문 소개글을 작성해주세요.'
                />
                <NameCard
                    img='동문사진'
                    name='Yong Sang Lee'
                    introduce='동문 소개글을 작성해주세요.'
                />
                <NameCard
                    img='동문사진'
                    name='Yong Sang Lee'
                    introduce='동문 소개글을 작성해주세요.'
                />
                <NameCard
                    img='동문사진'
                    name='Yong Sang Lee'
                    introduce='동문 소개글을 작성해주세요.'
                />
                <NameCard
                    img='동문사진'
                    name='Yong Sang Lee'
                    introduce='동문 소개글을 작성해주세요.'
                />
                <NameCard
                    img='동문사진'
                    name='Yong Sang Lee'
                    introduce='동문 소개글을 작성해주세요.'
                />
            </main>
        </div>
    );
}

export default Alumni;
