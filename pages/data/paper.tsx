import React, { useState } from "react";
import Report from "../../src/components/data/Report";
import MaterialTable from "../../src/components/data/MaterialTable";

function Paper() {
    const [tab, setTab] = useState("thesis");



    return (
        <div>
            {/*카테고리*/}
            <div className='flex pb-10 text-sm md:text-base'>
                <div
                    className='w-24 cursor-pointer border px-4 py-3 text-center  hover:border-t-2 hover:border-b-0 hover:border-t-black '
                    onClick={() => {
                        setTab("thesis");
                    }}
                >
                    논문
                </div>
                <div
                    className='w-40 cursor-pointer border px-4 py-3 text-center hover:border-t-2 hover:border-b-0 hover:border-t-black'
                    onClick={() => {
                        setTab("research");
                    }}
                >
                    연구 보고서
                </div>
                <span className='w-full border-b'></span>
            </div>

            <div>
                {/* 논문 */}
                {tab === "thesis" ? (
                    <MaterialTable material='논문' />
                ) : (
                    <Report />
                )}
            </div>
        </div>
    );
}

export default Paper;

/* 논문
    create ✓
    read   ✓
    update ✓
    delete ✓
*/
