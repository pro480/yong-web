import React, { useState } from "react";
import Report from "../../src/components/data/Report";
import StudyMaterialTable from "../../src/components/data/StudyMaterialTable";

function Index() {
    const [tab, setTab] = useState("thesis");

    return (
        <div>
            {/*카테고리*/}
            <div className='flex'>
                <div
                    className='w-24 cursor-pointer border px-4 py-3 text-center  hover:border-t-2 hover:border-b-0 hover:border-t-black'
                    onClick={(e) => {
                        setTab("thesis");
                    }}
                >
                    논문
                </div>
                <div
                    className='w-40 cursor-pointer border px-4 py-3 text-center hover:border-t-2 hover:border-b-0 hover:border-t-black'
                    onClick={(e) => {
                        setTab("research");
                    }}
                >
                    연구 보고서
                </div>
                <span className='w-full border-b'></span>
            </div>

            <div>
                {/* 현호C~ 이부분 수정하시면 됩니당~ */}
                {tab === "thesis" ? (
                    <StudyMaterialTable material='학습 자료' />
                ) : (
                    <Report />
                )}
            </div>
        </div>
    );
}

export default Index;
