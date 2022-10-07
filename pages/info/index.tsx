import React from "react";
import Image from "next/image";
import PageTitle from "../../src/components/PageTitle";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

function Index() {
    return (
        <div>
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
                <div>
                    {/* 협회이름 및 센터장 신상 정보 */}
                    <div className='relative flex h-[500px] w-[1000px] flex-col justify-between'>
                        {/* 센터장 이미지 */}
                        <div className='absolute right-20 bottom-5 flex h-[450px] w-[350px] items-center justify-center bg-slate-400'>
                            {" "}
                            배경이 제거된 <br /> 센터장 이미지를 넣어주세요
                        </div>

                        {/* 협회이름 */}
                        <div className='mt-[200px] flex flex-col'>
                            <p>Education Big Data Application</p>
                            <p className='text-3xl font-semibold'>
                                EBDA Research Center
                            </p>
                        </div>

                        {/* 센터장 이름 & 직함 */}
                        <div className='flex h-2/5 flex-col justify-center gap-y-5 bg-slate-600  px-10'>
                            <p className='text-2xl text-white'>
                                Chief Director
                            </p>
                            <p className='text-3xl text-white'>Lee Yong Sang</p>
                        </div>
                    </div>
                </div>

                {/* 학력 및 경력 */}
                <div className='mt-10 flex h-[500px] w-[1000px] flex-col'>
                    {/* 경력 */}
                    <div className='w-100 ml-20 flex h-[248px] items-center justify-start gap-x-[100px]'>
                        <div className='flex h-[100px] w-[100px] flex-col items-center'>
                            {/* 경력 아이콘 */}
                            <BriefcaseIcon className='h-[50px] w-[50px]' />

                            {/* 텍스트 */}
                            <p className='text-xl font-semibold'>주요 경력</p>
                        </div>

                        {/* 경력 내용 */}
                        <div className='ml-20 flex w-[500px] flex-col gap-y-4 font-semibold'>
                            <div className='flex gap-x-10'>
                                <ul className='w-[150px]'>2000 ~ 2000</ul>
                                <ul>한국대학교 교수</ul>
                            </div>

                            <div className='flex gap-x-10'>
                                <ul className='w-[150px]'>201X ~ 현재</ul>
                                <ul>인하대학교 교수</ul>
                            </div>

                            <div className='flex gap-x-10'>
                                <ul className='w-[150px]'>2022 ~ 현재</ul>
                                <ul>교육 빅데이터 응용 연구 센터장</ul>
                            </div>
                        </div>
                    </div>

                    {/* 구분선 */}
                    <p className='h-[1px] w-[1000px] border-b-[2px] border-black'></p>

                    {/* 학력 */}
                    <div className='w-100 ml-20 flex h-[248px] items-center justify-start gap-x-[100px]'>
                        <div className='flex h-[100px] w-[100px] flex-col items-center'>

                            {/* 학력 아이콘 */}
                            <AcademicCapIcon className='h-[50px] w-[50px]' />

                            {/* 텍스트 */}
                            <p className='text-xl font-semibold'>학력</p>

                        </div>

                        {/* 학력내용 */}
                        <div className='ml-20 flex flex-col gap-y-4 font-semibold'>
                            <ul>aa 대학교 aaaa 학사</ul>
                            <ul>bb 대학교 대학원 bbbb 석사</ul>
                            <ul>cc 대학교 대학원 cccc 박사</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
