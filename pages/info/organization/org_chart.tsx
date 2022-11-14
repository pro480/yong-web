import React, {useState, useEffect} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PageTitle from "../../../src/components/common/Layout/PageTitle";
import { Tree, TreeNode } from "react-organizational-chart";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import OrganizationCard from "../../../src/components/info/OrganizatinoCard";
import logoImage from "../../../public/images/logo/logo_EN.png";
import symbolImage from "../../../public/images/logo/symbol_outline.png";


function Org_chart() {
    const router = useRouter();
    // const innerWidth = window.innerWidth
    // window.onresize = function(event){
    //     const innerWidth = window.innerWidth
    // }
    // const [innerWidth, setInnerWidth] = useState(window.innerWidth)
    // window.addEventListener('resize', () => innerWidth = window.innerWidth );

        
    {
        /* next.js에서 제공하는 useRouter 훅을 이용한 라우터 객체의 push 기능으로 페이지 이동 */
    }
    return (
        <div>
            <div className='relative flex flex-col text-white items-center '>
                <div className='flex rounded-lg border-solid border-4 border-PRIMARY_COLOR-500' >
                    <div className='pl-2 pt-3 '>
                        <Image
                            src={symbolImage}
                            width={window.innerWidth/15}
                            height={window.innerWidth/15}
                            objectFit='contain'
                            alt='심볼'
                            priority={true}
                        />
                    </div>
                    {/* 그림 하나로 합치기 */}
                    <div className=''>
                        <Image
                            src={logoImage}
                            width={window.innerWidth/3}
                            height={window.innerWidth/12}
                            objectFit='contain'
                            alt='로고'
                            priority={true}
                        />
                    </div>
                </div>
                <div className="w-px h-6 border-l-2 border-l-PRIMARY_COLOR-500"></div>
                
                <div className='w-1/3'>
                    <OrganizationCard
                        title='센터장'
                        href='/info'
                    />
                </div>
                {/* 선 반응형 */}
                <div className="w-px h-7 border-l-2 border-l-PRIMARY_COLOR-500"></div>
                <div className="w-[67%] border-b-2 border-b-PRIMARY_COLOR-500"></div>
                <div className="w-[67%] flex justify-between ">
                    <div className="w-px h-8 border-l-2 border-l-PRIMARY_COLOR-500"></div>
                    <div className="w-px h-8 border-r-2 border-r-PRIMARY_COLOR-500"></div>
                    <div className="w-px h-8 border-l-2 border-l-PRIMARY_COLOR-500"></div>
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
