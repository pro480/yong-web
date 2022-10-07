import React from "react";
import PageTitle from "../../../src/components/PageTitle";

function Analytics() {
    return (
        <div>
            <PageTitle
                title='데이터분석 연구팀'
                description='교육빅데이터응용연구센터의 데이터분석 연구팀입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='데이터분석 연구팀'
                thirdLink='/info/organization/analytics'
            />

            <div className = "pb-12">
                 <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                         Data Analysis Research Team
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
                    <td className="px-4 py-3">학부연구생</td>
                    <td className="px-4 py-3">인하대학교 교육학과</td>
                </tr> 

                <tr className="bg-gray-50 border-b border-blue-200">
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">학부연구생</td>
                    <td className="px-4 py-3">인하대학교 교육학과</td>
                </tr> 
            </table>
        </div>
    )
}

export default Analytics;
