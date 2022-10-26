import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import EditorFrom from "../../src/components/notice/EditorForm";

export default function Write() {
    return (
        <div>
            {/* <PageTitle
                title='Q&A 쓰기'
                description=''
                firstDepth='자료실'
                firstLink='/notice'
                secondDepth='Q&A Write'
                secondLink='/notice/write'
            /> */}
            <React.Fragment>
                <main>
                    {/*내용 입력 테이블*/}
                    <EditorFrom />
                </main>
            </React.Fragment>
        </div>
    );
}
