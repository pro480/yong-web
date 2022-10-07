import React from "react";
import PageTitle from "../../src/components/PageTitle";


function Open() {
    return (
        <div>
            <PageTitle
                    title='오픈 데이터'
                    description='오픈 데이터 페이지의 설명을 입력해주세요.'
                    firstDepth='자료실'
                    firstLink='/data'
                    secondDepth='오픈 데이터'
                    secondLink='/data/open'
                />
            <div className="w-2/3 h-[75px] bg-FOOTER_FONT_COLOR"> 이미지 컨테이너</div>
            
    
        </div>
        )

}

export default Open;
