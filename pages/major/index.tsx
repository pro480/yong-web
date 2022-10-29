import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import {
    DocumentDuplicateIcon,
    PresentationChartBarIcon,
    PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

function Index() {
    return (
        <div>

            {/*배너*/}
            <div className=' h-48  md:h-[250px] lg:h-96 xl:h-[450px] bg-slate-700'>
                <div className='relative flex h-32  md:h-44 lg:h-64 xl:h-72 items-center justify-center bg-gray-300'>
                    에듀 데이터 사이언스에 대한 이미지를 넣어주세요
                    <div className='absolute -bottom-[80px] left-32 flex h-[160px] w-[500px] flex-col items-center justify-center gap-y-8 bg-PRIMARY_COLOR-500'>
                        <h1 className='text-2xl font-semibold text-white'>
                            에듀 데이터 사이언스
                        </h1>
                        <p className='text-white'>
                            에듀 데이터 사이언스 학과에 대해 소개합니다.
                        </p>
                    </div>
                </div>
            </div>
            <main className='flex flex-col'>
                <div className='flex h-52 border border-4'>
                    <DocumentDuplicateIcon className='mx-12 my-4 w-28 self-start rounded-full bg-gray-100' />
                    <div className='py-6'>
                        <h1 className='mb-5 text-3xl font-bold'>소개</h1>
                        <p>
                            에듀 데이터 사이언스 학과에 대한 설명을 적어주세요
                        </p>
                    </div>
                </div>
                <div className='mt-8 flex h-48 border border-4'>
                    <PresentationChartLineIcon className='mx-12 my-4 w-28 self-start rounded-full bg-gray-100' />
                    <div className='py-6'>
                        <h1 className='mb-5 text-3xl font-bold'>전망</h1>
                        <p>
                            에듀 데이터 사이언스 학과에 대한 전망을 적어주세요
                        </p>
                    </div>
                </div>
            
      
            </main>

        </div>
    );
}

export default Index;
