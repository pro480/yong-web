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


            <div className='relative flex h-96 w-full flex-col items-center justify-center xl:px-20'>
                <div className='relative flex h-1/3 w-full items-center justify-between'>
                    <OrganizationCard
                        title='연구 협력 네트워크'
                        color='[#ccffcc]'
                        href='/info/organization/network'
                    />
                    <OrganizationCard
                        title='센터장'
                        color='[#92d050]'
                        href='/info'
                    />
                    <OrganizationCard
                        title='연구 윤리 자문단'
                        color='[#99ccff]'
                        href='/info/organization/ethics'
                    />
                    <span className=' absolute -z-50 w-full items-center justify-center self-center border-t-2 border-t-PRIMARY_COLOR-500'></span>
                </div>
                <div className='flex h-1/3 w-full items-center justify-end'>
                    <OrganizationCard
                        title='연구 자문단'
                        color='[#99ccff]'
                        href='/info/organization/research'
                    />
                </div>
                <div className='flex h-1/3 w-full items-center justify-around'>
                    <OrganizationCard
                        title='데이터 분석팀'
                        color='[#d2e9ee]'
                        href='/info/organization/analytics'
                    />
                </div>
                <span className=' absolute -z-50 h-2/3 border-l-2 border-l-PRIMARY_COLOR-500'></span>
                <span className=' absolute right-[16%] top-[17%] -z-50 h-1/3 w-1/6 border-l-2 border-b-2 border-PRIMARY_COLOR-500'></span>
            </div>
        </div>
    );
}

export default Index;
