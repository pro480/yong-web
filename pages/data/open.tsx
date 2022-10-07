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
            <div className=" w-[1000px]">
                <div className=" flex items-center mb-5 text-sm">사이트명을 클릭하시면 상세 내용을 확인하실 수 있습니다</div>
                <div className="text-lg border-t-2 border-PRIMARY_COLOR">
                    <div className=" h-12 flex items-center justify-between border-b-2 border-gray-300">
                        <div>사이트명1</div>
                        <div>다운 아이콘</div>
                    </div>
                    <div className=" h-12 flex items-center justify-between border-b-2 border-gray-300">
                        <div>사이트명2</div>
                        <div>다운 아이콘</div>
                    </div>
                    
                    <div className=" h-12 flex items-center justify-between border-b-2 border-gray-300">
                        <div>사이트명3</div>
                        <div>다운 아이콘</div>
                    </div>
                    
                    <div className=" h-12 flex items-center justify-between border-b-2 border-gray-300">
                        <div>사이트명4</div>
                        <div>다운 아이콘</div>
                    </div>
                    
                    <div className=" h-12 flex items-center justify-between border-b-2 border-gray-300">
                        <div>사이트명5</div>
                        <div>다운 아이콘</div>
                    </div>
                    
                    <div className=" h-12 flex items-center justify-between border-b-2 border-gray-300">
                        <div>사이트명6</div>
                        <div>다운 아이콘</div>
                    </div>
                    
                    

                </div>
                
                    
            </div>

            
        
    
    
        </div>
        )
}

export default Open;
