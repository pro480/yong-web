import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function MainResearchProject() {
  return (
    <div className="flex h-[500px] w-screen items-center overflow-hidden border">
      {/*아래는 주요 연구 사업 설명란입니다*/}
      <div className="relative flex h-full w-[33%] flex-col items-center justify-center">
        <div className="absolute top-0 left-0 mt-10 ml-10 text-2xl font-semibold underline ">
          주요 연구사업
        </div>
        <div className="absolute top-32 flex items-center justify-center gap-x-8 text-2xl font-semibold">
          <ChevronLeftIcon className=" left-0 h-10" />
          교육과정
          <ChevronRightIcon className=" right-0 h-10" />
        </div>
        <div>
          이곳은 주요 연구사업에 대한 설명란입니다 <br /> 주요 연구사업 설명을
          넣어주세요
        </div>
      </div>
      {/*아래는 연구사업에 대한 이미지*/}
      <div className="flex h-full items-center overflow-x-hidden">
        <div className="mx-7 flex h-[300px] w-[300px] flex-col justify-center bg-gray-300">
          <div className="text-center text-3xl font-bold">이미지1</div>
          <div className="mt-10 text-center">
            이곳은 연구사업 이미지란입니다
          </div>
        </div>
        <div className="mx-7 flex h-[300px] w-[300px] flex-col justify-center bg-gray-300">
          <div className="text-center text-3xl font-bold">이미지2</div>
          <div className="mt-10 text-center">
            이곳은 연구사업 이미지란입니다
          </div>
        </div>
        <div className="mx-7 flex h-[300px] w-[300px] flex-col justify-center bg-gray-300">
          <div className="text-center text-3xl font-bold">이미지3</div>
          <div className="mt-10 text-center">
            이곳은 연구사업 이미지란입니다
          </div>
        </div>
        <div className="relative mx-7 flex h-[300px] w-[300px] flex-col justify-center bg-gray-300">
          <div className="text-center text-3xl font-bold">이미지4</div>
          <div className="mt-10 text-center">
            이곳은 연구사업 이미지란입니다
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainResearchProject;
