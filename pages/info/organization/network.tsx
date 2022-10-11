import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import { ImMail4 } from "react-icons/im";
import OrganizationBanner from "../../../src/components/OrganizationBanner";

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

            <OrganizationBanner
                title='Research Collaboration Network'
                description='조직에 대한 설명을 적어주세요'
            />

            {/* 이메일 링크 a태그 추가 */}
            <table className='w-full min-w-max table-auto border-t border-t-black'>
                <thead>
                <tr className='bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                    <th className='w-12 py-3 text-center'>NO</th>
                    <th className='w-1/5 text-center'>성명</th>
                    <th className='w-2/5 text-center'>소속</th>
                    <th className='w-1/8 text-center'>이메일</th>
                </tr>
                </thead>
                <tbody className='text-sm font-light text-gray-600'>
                <tr className='border-b border-gray-200 hover:bg-gray-100'>
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
                </tbody>
            </table>
        </div>
    );
}

export default Network;
