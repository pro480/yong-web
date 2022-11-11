import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PageTitle from "../../../src/components/common/Layout/PageTitle";
import { Tree, TreeNode } from "react-organizational-chart";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import OrganizationCard from "../../../src/components/info/OrganizatinoCard";

function Index() {
    const router = useRouter();
    {
        /* next.js에서 제공하는 useRouter 훅을 이용한 라우터 객체의 push 기능으로 페이지 이동 */
    }
    return (
        <div>


            <div className='relative flex flex-col h-96 text-white items-center '>
                
                <div className=' w-1/3'>
                    <OrganizationCard
                        title='로고 들어갈 자리'
                        color='[#00579a]'
                        href='/info'
                    />
                </div>
                <div className="w-px border-l-2 border-l-PRIMARY_COLOR-500">?</div>
                
                <div className='w-1/3'>
                    <OrganizationCard
                        title='센터장'
                        color='PRIMARY_COLOR-600'
                        href='/info'
                    />
                </div>
                <div className="w-px border-l-2 border-l-PRIMARY_COLOR-500">?</div>
                <div className="w-[68%] border-b-2 border-b-PRIMARY_COLOR-500"></div>
                <div className="w-[68%] flex justify-between ">
                    <div className="w-px border-l-2 border-l-PRIMARY_COLOR-500">?</div>
                    <div className="w-px border-l-2 border-l-PRIMARY_COLOR-500">?</div>
                    <div className="w-px border-l-2 border-l-PRIMARY_COLOR-500">?</div>
                </div>
                
                
                <div className='relative flex h-1/3 w-full justify-between'>
                    <div className="flex-col w-1/3 ">
                        <OrganizationCard
                            title='연구 협력 네트워크'
                            color='PRIMARY_COLOR-200'
                            href='/info/organization/network'
                        />
                    </div>

                    <div className="flex-col w-1/3">
                        <OrganizationCard
                            title='데이터 분석 연구팀'
                            color='PRIMARY_COLOR-100'
                            href='/info/organization/engineer'
                        />
                        <div className="h-1/6"></div>
                        <OrganizationCard
                            title='인공지능(AI) 개발팀'
                            color='PRIMARY_COLOR-100'
                            href='/info/organization/engineer'
                        />
                        <div className="h-1/6"></div>
                        <OrganizationCard
                            title='데이터 실무 교육 팀'
                            color='PRIMARY_COLOR-100'
                            href='/info/organization/engineer'
                        />
                    </div>

                    <div className="flex-col w-1/3 text-PRIMARY_COLOR-200">
                        <OrganizationCard
                            title='연구 윤리 자문단'
                            color='white border-solid border-2 border-PRIMARY_COLOR-200'
                            href='/info/organization/ethics'
                        />
                        <div className="h-1/6"></div>
                        <OrganizationCard
                            title='연구 자문단'
                            color='white border-solid border-2 border-PRIMARY_COLOR-200'
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

export default Index;
