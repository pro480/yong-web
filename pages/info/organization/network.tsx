import Link from "next/link";
import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import { ImMail4 } from "react-icons/im";

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

            {/* 통일성을 위해 테이블 형식으로 배너 */}
            <table className="m-5 w-11/12 mx-auto bg-blue-100 text-gray-800">
                <tr className="text-left border-b-2 border-blue-100">
                    <th className="px-4 py-3">연구협력 네트워크</th>

                </tr>
                <tr className="bg-gray-50 border-b border-blue-200">
                    <td className="text-center px-4 py-3">
                        <br></br><br></br><br></br><br></br><br></br>
                        교육빅데이터응용연구센터의 연구 협력 네트워크에 관한 설명
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                    </td>
                </tr>               
            </table>

            {/* 이메일 링크 a태그 추가 */}
            <table className="m-5 w-11/12 mx-auto bg-blue-100 text-gray-800">
                <tr className="text-left border-b-2 border-blue-100">
                    <th className="px-4 py-3">NO</th>
                    <th className="px-4 py-3">성명</th>
                    <th className="px-4 py-3">소속</th>
                </tr>
                
                <tr className="bg-gray-50">
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 정해경 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">한국기술교육대 교수</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 이문수 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">경상대 교수</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 박연복 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">대교협 연구원</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3">4</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 신동광 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">광주교대 교수</td>
                </tr> 

                <tr className="bg-gray-50 border-b border-blue-200">
                    <td className="px-4 py-3">5</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 임황규 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">Graduate Management Admission Council(GMAC)</td>
                </tr> 
            </table>
        </div>
    )
}

export default Network;
