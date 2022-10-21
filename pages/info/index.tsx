import React from "react";
import Image from "next/image";
import PageTitle from "../../src/components/PageTitle";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import centerLeaderImage from "../../public/images/centerLeader.png";
import logoImage from "../../public/images/logo/logo_mini_nobg.png";
import symbolImage from "../../public/images/logo/symbol-removebg.png";
import CenterLeaderHistory from "../../src/components/CenterLeaderHistory";

function Index() {
    return (
        <div>
            <PageTitle
                title='센터장 소개'
                description=' 센터장 소개 페이지에 대한 설명을 입력해주세요 '
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터장 소개'
                secondLink='/info'
            />

            {/* 센터장 소개 */}
            <>
                {/* 협회이름 및 센터장 신상 정보 */}
                <div className='relative flex h-[500px] flex-col justify-end'>
                    {/* 센터장 이미지 */}
                    <div className='flex'>
                        <div className='flex h-[250px] w-3/5 items-center bg-gradient-to-l from-PRIMARY_COLOR-500 to-PRIMARY_COLOR-400 pl-12 text-xl text-white'>
                            <ul className='flex flex-col gap-y-6'>
                                <li className='before: flex'>
                                    <span className="mx-4 w-60  before:mr-3  before:content-['\2022']">
                                        교육빅데이터 센터장
                                    </span>
                                    이용상(Yongsang Lee)
                                </li>
                                <li className='flex'>
                                    <span className="mx-4 w-60 before:mr-3  before:content-['\2022']">
                                        소속 및 직함
                                    </span>
                                    인하대학교 교육학과 교수
                                </li>
                                <li className='flex'>
                                    <span className="mx-4 w-60 before:mr-3  before:content-['\2022']">
                                        E-mail
                                    </span>
                                    <a
                                        href='mailto:yong21c@gmail.com'
                                        className='hover:underline hover:underline-offset-4'
                                    >
                                        yong21c@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='over absolute bottom-0 right-1/3 z-10 mx-auto flex h-52 w-52 '>
                            <Image src={symbolImage} layout='fill' />
                        </div>
                        <div className=' relative border-b-[250px] border-r-[200px] border-b-PRIMARY_COLOR-500 border-r-transparent '></div>
                    </div>
                    <div className='absolute top-16 z-50 h-52 w-[700px] '>
                        <Image
                            className=''
                            src={logoImage}
                            layout='fill'
                            objectFit='contain'
                            alt='로고'
                            priority={true}
                        />
                    </div>
                    <div className='absolute right-0 h-full w-96'>
                        <Image
                            className='z-50'
                            src={centerLeaderImage}
                            layout='fill'
                            objectFit='contain'
                            objectPosition='right'
                            alt='센터장'
                            priority={true}
                        />
                    </div>
                </div>
            </>

            {/* 경력 */}
            <div className='flex h-fit items-center py-16 text-PRIMARY_COLOR-700'>
                <div className='flex h-full w-1/4 flex-col items-center gap-y-2 '>
                    <BriefcaseIcon className='h-12' />
                    <p className='text-xl font-semibold'>주요 경력</p>
                </div>

                {/* 경력 내용 */}
                <ul className='ml-12 flex flex-col text-lg font-semibold '>
                    <CenterLeaderHistory content='(전) 한국교육과정평가원 수능기획분석실장' />
                    <CenterLeaderHistory content='(전) 국회미래연구원 연구위원' />
                    <CenterLeaderHistory content='(전) 영남대학교 교육학과 교수' />
                    <CenterLeaderHistory content='(현) 한국교육평가학회 이사' />
                    <CenterLeaderHistory content='(현) 인하대학교 교육학과 교수' />
                </ul>
            </div>

            {/* 구분선 */}
            <p className='mx-auto flex w-[1000px] self-center border-b-[2px] border-PRIMARY_COLOR-100'></p>

            {/* 학력 */}
            <div className='flex h-fit items-center py-12 text-PRIMARY_COLOR-700'>
                <div className='flex h-full w-1/4 flex-col items-center gap-y-2 '>
                    {/* 학력 아이콘 */}
                    <AcademicCapIcon className='h-12' />

                    {/* 텍스트 */}
                    <p className='text-xl font-semibold'>학력</p>
                </div>

                {/* 학력내용 */}
                <ul className='ml-12 flex flex-col text-lg font-semibold '>
                    <CenterLeaderHistory content='연세대학교 학사 (교육학)' />
                    <CenterLeaderHistory content='연세대학교 석사 (교육 통계)' />
                    <CenterLeaderHistory content='UC Berkeley 박사 (교육 측정/평가)' />
                </ul>
            </div>
        </div>
    );
}

export default Index;
