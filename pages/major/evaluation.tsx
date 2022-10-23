import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import {
    DocumentDuplicateIcon,
    PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

function Evaluation() {
    return (
        <div>
            <PageTitle
                title='교육 평가'
                description='교육 평가에 대한 설명을 적어주세요'
                firstDepth='전공 소개'
                firstLink='/major'
                secondDepth='교육 평가'
                secondLink='/major/evaluation'
            />
            {/*배너*/}
            <div className='h-[450px]'>
                <div className='relative flex h-72 items-center justify-center bg-gray-300'>
                    교육 평가에 대한 이미지를 넣어주세요
                    <div className='absolute -bottom-[80px] left-32 flex h-[160px] w-[500px] flex-col items-center justify-center gap-y-8 bg-PRIMARY_COLOR-500'>
                        <h1 className='text-2xl font-semibold text-white'>
                            교육 평가
                        </h1>
                        <p className='text-white'>
                            교육 평가 학과에 대해 소개합니다.
                        </p>
                    </div>
                </div>
            </div>
            <main className='flex flex-col'>
                <div className='flex h-52 border border-4'>
                    <DocumentDuplicateIcon className='mx-12 my-4 w-28 self-start rounded-full bg-gray-100' />
                    <div className='py-6'>
                        <h1 className='mb-5 text-3xl font-bold'>소개</h1>
                        <p>교육 평가 학과에 대한 설명을 적어주세요</p>
                    </div>
                </div>
                <div className='mt-8 flex h-48 border border-4'>
                    <PresentationChartLineIcon className='mx-12 my-4 w-28 self-start rounded-full bg-gray-100' />
                    <div className='py-6'>
                        <h1 className='mb-5 text-3xl font-bold'>전망</h1>
                        <p>교육 평가 학과에 대한 전망을 적어주세요</p>
                    </div>
                </div>
                <div className='my-8'>
                    <p className=' w-[70px] border-b-2 border-b-PRIMARY_COLOR-500'></p>
                    <h1 className='text-2xl font-bold'>특성화 방향</h1>
                </div>
                <div className='flex h-80 justify-around'>
                    <article className='flex h-[70%] w-1/4 flex-col items-center bg-PRIMARY_COLOR-500/70'>
                        <h1 className='mt-8 text-xl text-white'>
                            특성화 방향 1
                        </h1>
                        <span className='mt-5 w-24 border-b-2 border-b-amber-400'></span>
                        <ul className='mt-5 flex flex-col gap-y-3 text-white'>
                            <li className=" px-4 before:mr-2  before:text-amber-400 before:content-['\2022']">
                                특성화 방향 1 에 대한 내용 1
                            </li>
                            <li className=" px-4 before:mr-2  before:text-amber-400 before:content-['\2022']">
                                특성화 방향 1 에 대한 내용 2
                            </li>
                        </ul>
                    </article>
                    <article className='flex h-[85%] w-1/4 flex-col items-center bg-PRIMARY_COLOR-500/70'>
                        <h1 className='mt-8 text-xl text-white'>
                            특성화 방향 2
                        </h1>
                        <span className='mt-5 w-24 border-b-2 border-b-amber-400'></span>
                        <ul className='mt-5 flex flex-col gap-y-3 text-white'>
                            <li className=" px-4 before:mr-2  before:text-amber-400 before:content-['\2022']">
                                특성화 방향 2 에 대한 내용 1
                            </li>
                            <li className=" px-4 before:mr-2  before:text-amber-400 before:content-['\2022']">
                                특성화 방향 2 에 대한 내용 2
                            </li>
                            <li className=" px-4 before:mr-2  before:text-amber-400 before:content-['\2022']">
                                특성화 방향 2 에 대한 내용 3
                            </li>
                        </ul>
                    </article>
                    <article className='flex h-full w-1/4 flex-col items-center bg-PRIMARY_COLOR-500/70'>
                        <h1 className='mt-8 text-xl text-white'>
                            특성화 방향 3
                        </h1>
                        <span className='mt-5 w-24 border-b-2 border-b-amber-400'></span>
                        <ul className='mt-5 flex flex-col gap-y-3 text-white'>
                            <li className=" px-4 before:mr-2  before:text-amber-400 before:content-['\2022']">
                                특성화 방향 3 에 대한 내용 1
                            </li>
                            <li className=" px-4 before:mr-2  before:text-amber-400 before:content-['\2022']">
                                특성화 방향 3 에 대한 내용 2
                            </li>
                            <li className=" px-4 before:mr-2  before:text-amber-400 before:content-['\2022']">
                                특성화 방향 3 에 대한 내용 3
                            </li>
                        </ul>
                    </article>
                </div>
            </main>
            <div className='mt-12'>
                특성화 방향에 들어갈 컨텐츠는 다음 페이지를 참고해주세요
                http://education.cau.ac.kr/bbs/page.php?hid=s0102
            </div>
        </div>
    );
}

export default Evaluation;
