import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex h-60 w-screen flex-col justify-between bg-[#22272D] py-10 px-32 text-white">
      <div className="text-xl">교육 빅데이터 융합 연구 센터</div>
      <div className="flex w-full items-center justify-between">
        <div className="relative ml-10 h-[60px] w-40 ">
          {/* 로고 컨테이너*/}
          <Image
            src="https://www.inha.ac.kr/sites/kr/images/logo.png"
            layout="fill"
            objectFit="contain"
            className="flex cursor-pointer bg-white"
            alt="로고"
          />
        </div>
        <div className="flex w-full items-center justify-around">
          <div>개인정보 처리 방침</div>
          <div>저작권 보호 정책</div>
          <div>연구원 모집</div>
          <div>찾아오는 길</div>
        </div>
      </div>
      <div className="flex w-full justify-around text-sm">
        <div>
          INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheno 22212, KOREA
        </div>
        <div>Tel: +82-32-860-7114</div>
        <div>Fax: +82-32-863-1333</div>
        <div>Mail: yong21c@inha.ac.kr</div>
        <div className="text-gray-500">
          Copyright(C) 2021 by INHA UNIVERSITY.ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}

export default Footer;
