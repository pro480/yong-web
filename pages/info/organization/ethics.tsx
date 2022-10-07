import React from "react";
import PageTitle from "../../../src/components/PageTitle";

function Ethics() {
    return (
        <div>
            <PageTitle
                title='연구윤리 자문단'
                description='교육빅데이터응용연구센터의 연구윤리 자문단입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='연구윤리 자문단'
                thirdLink='/info/organization/ethics'
            />
        
            <div className = "pb-12">
                 <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                         Research Ethics Advisory Team
                 </h1>
            </div>

            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-blue-100 text-gray-800">
                <tr className="text-left border-b-2 border-blue-100">
                    <th className="px-4 py-3">NO</th>
                    <th className="px-4 py-3">성명</th>
                    <th className="px-4 py-3">소속</th>
                </tr>
                
                <tr className="bg-gray-50">
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">강태욱</td>
                    <td className="px-4 py-3">법무법인 김장리 파트너 변호사</td>
                </tr> 

                <tr className="bg-gray-50 border-b border-blue-200">
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">홍석한</td>
                    <td className="px-4 py-3">전남대 법전원 교수</td>
                </tr> 
            </table>
        </div>
    )
}

export default Ethics;
