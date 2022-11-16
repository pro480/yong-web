import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import OrganizationCard from "../../../src/components/info/OrganizatinoCard";
import logo_EN from "../../../public/images/logo/logo_EN.png";
import symbolImage from "../../../public/images/logo/symbol_outline.png";

function Org_chart() {
    const router = useRouter();

    {
        /* next.js에서 제공하는 useRouter 훅을 이용한 라우터 객체의 push 기능으로 페이지 이동 */
    }
    return (
        <div>
            <div className='relative flex flex-col items-center text-white '>
                <div className='w-5/12 rounded-lg border-4 border-solid border-PRIMARY_COLOR-500'>
                    {/* 그림 하나로 합치기 */}
                    <div className='relative px-2'>
                        <Image
                            src={logo_EN}
                            objectFit='contain'
                            alt='로고'
                            priority={true}
                        />
                    </div>
                </div>
                <div className='h-6 w-px border-l-2 border-l-PRIMARY_COLOR-500 '></div>

                <div className='w-1/3'>
                    <OrganizationCard title='센터장' href='/info' />
                </div>
                {/* 선 반응형 */}
                <div className=' h-10 w-px border-l-2 border-l-PRIMARY_COLOR-500 '></div>
                <div className='w-[67%] border-b-2 border-b-PRIMARY_COLOR-500'></div>
                <div className='flex w-[67%] justify-between '>
                    <div className='h-8 w-px border-l-2 border-l-PRIMARY_COLOR-500'></div>
                    <div className='h-8 w-px border-r-2 border-r-PRIMARY_COLOR-500'></div>
                    <div className='h-8 w-px border-l-2 border-l-PRIMARY_COLOR-500'></div>
                </div>

                <div className='relative flex h-1/3 w-full justify-between'>
                    <div className='w-1/3 flex-col '>
                        <OrganizationCard
                            title='연구 협력 네트워크'
                            color='PRIMARY_COLOR-200'
                            href='/info/organization/network'
                        />
                    </div>

                    <div className='w-1/3 flex-col'>
                        <OrganizationCard
                            title='데이터 분석 연구팀'
                            color='PRIMARY_COLOR-100'
                            href='/info/center_member#데이터 분석팀'
                        />
                        <div className='h-1/6'></div>
                        <OrganizationCard
                            title='인공지능(AI) 개발팀'
                            color='PRIMARY_COLOR-100'
                            href='/info/center_member#인공지능팀'
                        />
                        <div className='h-1/6'></div>
                        <OrganizationCard
                            title='데이터 실무 교육 팀'
                            color='PRIMARY_COLOR-100'
                            href='/info/center_member#실무교육팀'
                        />
                    </div>

                    <div className='w-1/3 flex-col text-PRIMARY_COLOR-200'>
                        <OrganizationCard
                            title='연구 윤리 자문단'
                            color='white border-solid border-2 border-PRIMARY_COLOR-200'
                            href='/info/organization/ethics'
                        />
                        <div className='h-1/6'></div>
                        <OrganizationCard
                            title='연구 자문단'
                            color='white -my-1 border-solid border-2 border-PRIMARY_COLOR-200'
                            href='/info/organization/research'
                        />
                    </div>
                </div>

                {/* <span className=' absolute -z-50 w-full items-center justify-center self-center border-t-2 border-t-PRIMARY_COLOR-500'></span> */}
                {/* <div className='absolute -z-50 h-1/5 w-1/2 transform translate-x-1/3 border-l-2 border-l-PRIMARY_COLOR-500'></div> */}

                {/* <span className=' absolute right-[16%] top-[17%] -z-50 h-1/3 w-1/6 border-l-2 border-b-2 border-PRIMARY_COLOR-500'></span> */}
            </div>
        </div>
    );
}

export default Org_chart;
