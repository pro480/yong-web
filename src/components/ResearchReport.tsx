import React from "react";
import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";
import {NewspaperIcon} from "@heroicons/react/24/outline";

function ResearchReport() {
    return (
        <div className="relative flex h-[600px] w-screen items-center justify-center">
            <div className="absolute left-16 top-16 text-2xl font-semibold underline">
                최신 연구 보고서
            </div>
            <div className="relative flex w-[1300px]  items-center justify-center">
                <ChevronLeftIcon className="absolute left-0 h-10 "/>
                <div className="flex h-full w-[1000px] justify-between border ">
                    {/*아래는 연구보고서 미리보기 입니다.*/}
                    <div className="flex w-[30%] border p-5">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-500">
                            <NewspaperIcon className="h-full p-2"/>
                        </div>
                        <div className="relative ml-4 h-[300px]">
                            <div className="py-2 text-2xl font-bold">보고서 제목</div>
                            <p className="mt-5">이곳에는 보고서의 요약이 들어갑니다</p>
                            <div className="absolute bottom-0 right-5 text-sm">
                                연구자 : 이용상, 이용상
                            </div>
                        </div>
                    </div>
                    {/* 여기까지 연구보고서 미리보기 입니다*/}
                    <div className="flex w-[30%] border p-5">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-500">
                            <NewspaperIcon className="h-full p-2"/>
                        </div>
                        <div className="relative ml-4 h-[300px]">
                            <div className="py-2 text-2xl font-bold">보고서 제목</div>
                            <p className="mt-5">이곳에는 보고서의 요약이 들어갑니다</p>
                            <div className="absolute bottom-0 right-5 text-sm">
                                연구자 : 이용상, 이용상
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[30%] border p-5">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-500">
                            <NewspaperIcon className="h-full p-2"/>
                        </div>
                        <div className="relative ml-4 h-[300px]">
                            <div className="py-2 text-2xl font-bold">보고서 제목</div>
                            <p className="mt-5">이곳에는 보고서의 요약이 들어갑니다</p>
                            <div className="absolute bottom-0 right-5 text-sm">
                                연구자 : 이용상, 이용상
                            </div>
                        </div>
                    </div>
                </div>
                <ChevronRightIcon className="absolute right-0 h-10 "/>
            </div>
            <div className="absolute bottom-10 flex h-16 items-center justify-center text-3xl font-bold">
                <div>더 많은 연구보고서 보러 가기</div>
                <ArrowRightIcon className="h-8 px-3"/>
            </div>
        </div>
    );
}

export default ResearchReport;
