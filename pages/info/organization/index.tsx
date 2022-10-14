import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PageTitle from "../../../src/components/PageTitle";
import { Tree, TreeNode } from "react-organizational-chart";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Index() {
    const router = useRouter();
    {
        /* next.js에서 제공하는 useRouter 훅을 이용한 라우터 객체의 push 기능으로 페이지 이동 */
    }
    return (
        <div>
            <PageTitle
                title='센터 조직도'
                description='교육빅데이터응용연구센터의 센터 조직도입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
            />

            <div className='relative flex h-96 w-full flex-col items-center justify-center xl:px-20'>
                <div className='relative flex h-1/3 w-full items-center justify-between'>
                    <Link href='/info/organization/network'>
                        <div className='organizationNode bg-[#ccffcc]'>
                            연구 협력 네트워크
                        </div>
                    </Link>
                    <Link href='/info'>
                        <div className='organizationNode bg-[#92d050]'>
                            센터장 소개
                        </div>
                    </Link>
                    <Link href='/info/organization/ethics'>
                        <div className='organizationNode bg-[#99ccff]'>
                            연구 윤리 자문단
                        </div>
                    </Link>
                    <span className=' absolute -z-50 w-full items-center justify-center self-center border-t-2 border-t-PRIMARY_COLOR-500'></span>
                </div>
                <div className='flex h-1/3 w-full items-center justify-end'>
                    <Link href='/info/organization/research'>
                        <div className='organizationNode bg-[#99ccff]'>
                            연구 자문단
                        </div>
                    </Link>
                </div>
                <div className='flex h-1/3 w-full items-center justify-around'>
                    <Link href='/info/organization/analytics'>
                        <div className='organizationNode rounded-none bg-[#d2e9ee]'>
                            데이터 분석팀
                        </div>
                    </Link>
                </div>
                <span className=' absolute -z-50 h-2/3 border-l-2 border-l-PRIMARY_COLOR-500'></span>
                <span className=' absolute right-[16%] top-[17%] -z-50 h-1/3 w-1/6 border-l-2 border-b-2 border-PRIMARY_COLOR-500'></span>
            </div>
        </div>
    );
}

export default Index;
