import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function MainForum() {
    return (
        <div className='flex h-[300px] w-full  flex-col items-center justify-around border p-2 xs:h-[400px]  md:h-[500px]  md:flex-row  md:p-14 lg:h-[600px] lg:p-16 desktop:h-[700px] desktop:p-20'>
            <div className='relative aspect-2/1 h-[150px] xs:h-[200px] lg:h-[300px] desktop:h-[500px]  '>
                <Image
                    src='/images/dummy/forum.jpg'
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <div className='relative  aspect-[2/1] h-[100px] border border-PRIMARY_COLOR-300 xs:h-[150px] md:aspect-1/1 md:h-[200px] lg:h-[300px] desktop:h-[500px]'>
                <div className='flex h-full flex-col py-1 px-2 xs:px-4 xs:py-3 lg:px-8 lg:py-5  desktop:gap-y-5 desktop:px-10  desktop:py-7'>
                    <div className=' overflow-hidden text-ellipsis whitespace-pre border-b-2 border-b-PRIMARY_COLOR-300 pb-5 text-sm font-semibold xs:text-base md:text-lg lg:text-xl desktop:border-b-4  desktop:text-2xl'>
                        2022년 제 1회 학습 포럼
                    </div>
                    <div className=' my-2 overflow-hidden text-ellipsis whitespace-pre pb-4 text-sm font-semibold xs:pb-3 md:my-2 lg:my-3  lg:pb-2 lg:text-base desktop:my-4 desktop:text-lg'>
                        2022 미래형 교수·학습모델 개발지원사업 선정
                    </div>
                    <p className='hidden h-full overflow-hidden text-ellipsis break-all text-xs md:flex md:h-[200px] md:text-sm lg:h-[300px] lg:text-base desktop:h-[500px] desktop:text-lg'>
                        본교 사범대학이 교육부와 한국과학창의재단에서 지원하는
                        ‘2022 미래형 교수·학습모델 개발지원사업’에 전국에서
                        유일하게 선정됐다. 이번 사업에는 사범대학 6개 학과 교수
                        13명과 인천 소재 초·중등학교 현직교사 5명이
                        공동연구진으로 참여한다. ‘PACA 미래역량을 갖춘 준비된
                        예비교사 양성’을 목표로 미래형 교육과정을 개발하고
                        중등학교 현장에 적용·확산을 지원한다. 사업비는 향후 최장
                        3년간 매년 1억 원씩 총 3억 원 규모다. 연구진은 PACA
                        모형에 기반한 미래형 교수·학습 모델 및 프로그램을
                        개발한다. 미래교육의 4대 핵심요소인
                        개별화(Personalized), 현장기반(Authentic),
                        융합적(Convergent), 적응적(Adaptive) 특성에 기초해
                        디지털 기반의 융합적 학습환경에 적합한 혁신적
                        교수-학습-평가 전문역량 강화방안을 제시한다. 본교는
                        미래형 교육과정을 전국 교원양성기관 및 학교현장에서
                        적용할 수 있도록 다양한 방식으로 지원한다.
                        사업주관기관인 한국과학창의재단의
                        창의인성교육넷(크레존)과 정기포럼 및 세미나 개최를
                        개최해 우수사례를 발굴하고 미래형 교수학습모델로 공유할
                        계획이다. 디지털 융합적 교육환경에 적합한 미래형
                        교육과정을 선도하는 교원양성기관으로 거듭난다는
                        방침이다. 연구책임자인 이지연 교육학과 교수는 “경인지역
                        최대 중등교원 양성의 요람인 인하대 사범대학이 이번
                        사업을 통해 예비교원의 미래역량 함양과 중등교육 현장의
                        변화와 혁신을 주도하는 미래형 교원양성기관으로 도약할 수
                        있으리라 기대한다”며 “우수한 교내 인프라와
                        협력학교·시도교육청 연계 네트워크를 적극 활용하여 현장
                        적용력이 높은 혁신적 교육과정을 개발하겠다”고 말했다.
                    </p>
                    <div className='bottom-0 flex w-full  items-center justify-end text-gray-500'>
                        <ClockIcon className='h-6' />
                        <div>2022-12-12</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainForum;
