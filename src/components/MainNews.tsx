import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";


function MainNews() {
  return (
    <div className="relative flex h-[600px] w-screen items-center justify-center border p-32">
      {/*타이틀 입니다*/}
      <div className="absolute left-16 top-16 text-2xl font-semibold underline">
        교육 빅데이터 응용 연구센터 소식
      </div>
      {/*뉴스카드 컨테이너 입니다*/}
      <div className="flex h-full w-full justify-between gap-x-16 border ">
        {/*  아래부터 뉴스카드입니다*/}
        <div className="flex w-[20%] flex-col border p-5">
          <div className="w-full border-b border-b-blue-400 pb-2 text-xl font-semibold">
            공지사항
          </div>
          <div className="my-5 font-semibold">Subtitle 입니다</div>
          <div className="h-full">이곳은 공지사항 본문내용입니다</div>
          <div className="flex w-full justify-end text-gray-500">
            <ClockIcon className="h-6" />
            <div>2022-12-12</div>
          </div>
        </div>
        {/* 여기까지 뉴스카드 미리보기 입니다*/}
        <div className="flex w-[20%] flex-col border p-5">
          <div className="w-full border-b border-b-blue-400 pb-2 text-xl font-semibold">
            보도자료
          </div>
          <div className="my-5 font-semibold">Subtitle 입니다</div>
          <div className="h-full">이곳은 보도자료 본문내용입니다</div>
          <div className="flex w-full justify-end text-gray-500">
            <ClockIcon className="h-6" />
            <div>2022-12-12</div>
          </div>
        </div>
        <div className="flex w-[20%] flex-col border p-5">
          <div className="w-full border-b border-b-blue-400 pb-2 text-xl font-semibold">
            지원자 모집
          </div>
          <div className="my-5 font-semibold">Subtitle 입니다</div>
          <div className="h-full">이곳은 지원자 모집 본문내용입니다</div>
          <div className="flex w-full justify-end text-gray-500">
            <ClockIcon className="h-6" />
            <div>2022-12-12</div>
          </div>
        </div>
        <div className="flex w-[20%] flex-col border p-5">
          <div className="w-full border-b border-b-blue-400 pb-2 text-xl font-semibold">
            상시안내
          </div>
          <div className="my-5 font-semibold">Subtitle 입니다</div>
          <div className="h-full">이곳은 상시안내 본문내용입니다</div>
          <div className="flex w-full justify-end text-gray-500">
            <ClockIcon className="h-6" />
            <div>2022-12-12</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNews;
