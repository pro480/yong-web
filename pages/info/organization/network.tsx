import React from "react";
import PageTitle from "../../../src/components/PageTitle";

function Network() {
    return (
        <div>
            <PageTitle
                title='연구 협력 네트워크'
                description='교육빅데이터응용연구센터의 연구 협력 네트워크입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='연구 협력 네트워크'
                thirdLink='/info/organization/network'
            />

            <div className = "pb-12">
                 <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                         Research Cooperation Network
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
                    <td className="px-4 py-3">정혜경</td>
                    <td className="px-4 py-3">한국기술교육대 교수</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">이문수</td>
                    <td className="px-4 py-3">경상대 교수</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">박연복</td>
                    <td className="px-4 py-3">대교협 연구원</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3">4</td>
                    <td className="px-4 py-3">신동광</td>
                    <td className="px-4 py-3">광주교대 교수</td>
                </tr> 

                <tr className="bg-gray-50 border-b border-blue-200">
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3">임황규</td>
                    <td className="px-4 py-3">Graduate Management Admission Council(GMAC)</td>
                </tr> 
            </table>
        </div>
    )
}

export default Network;
