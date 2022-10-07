import React from "react";
import { ImMail4 } from "react-icons/im";
import PageTitle from "../../../src/components/PageTitle";

function Research() {
    return (
        <div>
            <PageTitle
                title='연구 자문단'
                description='교육빅데이터응용연구센터의 연구 자문단입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='연구 자문단'
                thirdLink='/info/organization/research'
            />

            <div className = "pb-12">
                 <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                         Research Advisory Team
                 </h1>
            </div>

            {/* 통일성을 위해 테이블 형식으로 배너 */}
            <table className="m-5 w-11/12 mx-auto bg-blue-100 text-gray-800">
                <tr className="text-left border-b-2 border-blue-100">
                    <th className="px-4 py-3">연구 자문단</th>

                </tr>
                <tr className="bg-gray-50 border-b border-blue-200">
                    <td className="text-center px-4 py-3">
                        <br></br><br></br><br></br><br></br><br></br>
                        교육빅데이터응용연구센터의 연구 자문단에 관한 설명
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                    </td>
                </tr>               
            </table>

            {/* 이메일 링크 a태그 추가 */}
            <table className="m-5 w-11/12 mx-auto bg-blue-100 text-gray-800">
                <tr className="text-left border-b-2 border-blue-100">
                    <th className="px-4 py-3">구분</th>
                    <th className="px-4 py-3">NO</th>
                    <th className="px-4 py-3">성명</th>
                    <th className="px-4 py-3">소속</th>
                </tr>
                
                <tr className="bg-gray-50">
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 이규민 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">연세대학교 교육학부 교수</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3">대학</td>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 민경석 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">세종대학교 교육학과 교수</td>
                </tr> 

                <tr className="bg-gray-50 border-b border-blue-200">
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 이현숙 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">건국대학교 교직과 교수</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 장시준 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">한국교육학술정보원 디지털교육정책본부장</td>
                </tr> 

                <tr className="bg-gray-50">
                    <td className="px-4 py-3">연구기관</td>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 시기자 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">한국교육과정평가원 평가본부장</td>
                </tr> 

                <tr className="bg-gray-50 border-b border-blue-200">
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">3</td>
                    <td className="px-4 py-3">
                        <a
                            target='_blank'
                            href='mailto:yong21c@inha.ac.kr?'
                            rel='noopener noreferrer'
                            className='flex mr-5'
                            > 임황규 <ImMail4 size='22' />
                        </a>
                    </td>
                    <td className="px-4 py-3">국회미래연구원 연구실장</td>
                </tr> 
            </table>
        </div>
    )
}

export default Research;
