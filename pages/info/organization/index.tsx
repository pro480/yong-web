import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PageTitle from "../../../src/components/PageTitle";

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

            <div className='pb-12'>
                <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR-500 pb-2 text-2xl font-semibold text-PRIMARY_COLOR-500'>
                    Center Organization Chart
                </h1>
            </div>

            {/* 관련/하위페이지 이동 기능만 구현, 배치는 아직 하지 않았습니다 */}
            <div className='flex flex-wrap items-center justify-center'>
                <div className='flex w-full items-center justify-center'>
                    <Image
                        onClick={() => router.push("/info")}
                        src='/images/centerOrganization/centerDirector.png'
                        width={110}
                        height={110}
                        alt='센터장'
                        objectFit='contain'
                        objectPosition='center'
                    />
                </div>

                <div className='flex w-full justify-evenly'>
                    <div>
                        <Image
                            onClick={() =>
                                router.push("/info/organization/network")
                            }
                            src='/images/centerOrganization/researchCooperationNetwork.png'
                            width={110}
                            height={110}
                            alt='연구 협력 네트워크'
                            objectFit='contain'
                            objectPosition='center'
                        />
                    </div>
                    <div>
                        <Image
                            onClick={() =>
                                router.push("/info/organization/analytics")
                            }
                            src='/images/centerOrganization/dataAnalysisResearch.png'
                            width={110}
                            height={110}
                            alt='데이터분석 연구팀'
                            objectFit='contain'
                            objectPosition='center'
                        />
                    </div>
                    <div>
                        <Image
                            onClick={() =>
                                router.push("/info/organization/research")
                            }
                            src='/images/centerOrganization/researchAdvisory.png'
                            width={110}
                            height={110}
                            alt='연구 자문단'
                            objectFit='contain'
                            objectPosition='center'
                        />
                    </div>
                    <div>
                        <Image
                            onClick={() => router.push("/info/organization/ethics")}
                            src='/images/centerOrganization/researchEthicsAdvisory.png'
                            width={110}
                            height={110}
                            alt='연구윤리 자문단'
                            objectFit='contain'
                            objectPosition='center'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
