import React from "react";
import { ImMail4 } from "react-icons/im";
import PageTitle from "../../../src/components/PageTitle";
import OrganizationBanner from "../../../src/components/OrganizationBanner";

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

            <OrganizationBanner
                title='Research Advisory Team'
                description='연구 자문단에 대한 설명을 적어주세요'
            />

            {/* 이메일 링크 a태그 추가 */}
            <table className='w-full min-w-max table-auto border-t border-t-black'>
                <thead>
                    <tr className='bg-PRIMARY_COLOR/40 text-sm uppercase leading-normal text-gray-600'>
                        <th className='w-20 py-3 text-center'>구분</th>
                        <th className='w-12 py-3 text-center'>NO</th>
                        <th className='w-1/5 text-center'>성명</th>
                        <th className='w-2/5 text-center'>소속</th>
                        <th className='w-1/8 text-center'>이메일</th>
                    </tr>
                </thead>
                <tbody className='text-sm font-light text-gray-600'>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='py-3 text-center'>대학</td>
                        <td className='py-3 text-center'>1</td>
                        <td className='text-center'>이규민</td>
                        <td className='text-center'>
                            연세대학교 교육학부 교수
                        </td>
                        <td className='text-center'>
                            <div className='flex w-full items-center justify-center'>
                                <a
                                    className='ju flex w-fit justify-center self-center self-center hover:underline hover:underline-offset-2'
                                    href='mailto:yong21c@inha.ac.kr'
                                >
                                    <div>yong21c@inha.ac.kr</div>
                                    <ImMail4 className='ml-2' size={20} />
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='py-3 text-center'>대학</td>

                        <td className='py-3 text-center'>1</td>
                        <td className='text-center'>민경석</td>
                        <td className='text-center'>
                            세종대학교 교육학과 교수
                        </td>
                        <td className='text-center'>
                            <div className='flex w-full items-center justify-center'>
                                <a
                                    className='ju flex w-fit justify-center self-center self-center hover:underline hover:underline-offset-2'
                                    href='mailto:yong21c@inha.ac.kr'
                                >
                                    <div>yong21c@inha.ac.kr</div>
                                    <ImMail4 className='ml-2' size={20} />
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='py-3 text-center'>대학</td>

                        <td className='py-3 text-center'>1</td>
                        <td className='text-center'>이현숙</td>
                        <td className='text-center'>건국대학교 교직과 교수</td>
                        <td className=''>
                            <div className='flex w-full items-center justify-center'>
                                <a
                                    className='ju flex w-fit justify-center self-center self-center hover:underline hover:underline-offset-2'
                                    href='mailto:yong21c@inha.ac.kr'
                                >
                                    <div>yong21c@inha.ac.kr</div>
                                    <ImMail4 className='ml-2' size={20} />
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='py-3 text-center'>연구기관</td>
                        <td className='py-3 text-center'>1</td>
                        <td className='text-center'>장시준</td>
                        <td className='text-center'>
                            한국교육학술정보원 디지털교육정책본부장
                        </td>
                        <td className='text-center'>
                            <div className='flex w-full items-center justify-center'>
                                <a
                                    className='ju flex w-fit justify-center self-center self-center hover:underline hover:underline-offset-2'
                                    href='mailto:yong21c@inha.ac.kr'
                                >
                                    <div>yong21c@inha.ac.kr</div>
                                    <ImMail4 className='ml-2' size={20} />
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='py-3 text-center'>연구기관</td>
                        <td className='py-3 text-center'>1</td>
                        <td className='text-center'>시기자</td>
                        <td className='text-center'>
                            한국교육과정평가원 평가본부장
                        </td>
                        <td className='text-center'>
                            <div className='flex w-full items-center justify-center'>
                                <a
                                    className='ju flex w-fit justify-center self-center self-center hover:underline hover:underline-offset-2'
                                    href='mailto:yong21c@inha.ac.kr'
                                >
                                    <div>yong21c@inha.ac.kr</div>
                                    <ImMail4 className='ml-2' size={20} />
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        <td className='py-3 text-center'>연구기관</td>
                        <td className='py-3 text-center'>1</td>
                        <td className='text-center'>임황규</td>
                        <td className='text-center'>국회미래연구원 연구실장</td>
                        <td className='text-center'>
                            <div className='flex w-full items-center justify-center'>
                                <a
                                    className='ju flex w-fit justify-center self-center self-center hover:underline hover:underline-offset-2'
                                    href='mailto:yong21c@inha.ac.kr'
                                >
                                    <div>yong21c@inha.ac.kr</div>
                                    <ImMail4 className='ml-2' size={20} />
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Research;
