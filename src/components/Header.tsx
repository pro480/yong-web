import React from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const RNDSubTitle = [
    {
      title: "센터장 소개",
      subMenu: [],
      href: "/",
    },
    {
      title: "센터 비전",
      subMenu: [
        { title: "설립 목적", href: "/" },
        { title: "센터 비전", href: "/" },
        { title: "중장기 발전 목표", href: "/" },
      ],
      href: "/",
    },
    {
      title: "주요 수행 업무",
      subMenu: [],
      href: "/",
    },
    {
      title: "센터 연혁",
      subMenu: [],
      href: "/",
    },
    {
      title: "센터 조직(조직도)",
      subMenu: [
        { title: "연구협력 네트워크", href: "/" },
        { title: "연구 자문단", href: "/" },
        { title: "데이터 분석팀", href: "/" },
      ],
      href: "/",
    },
    {
      title: "센터 구성원",
      subMenu: [],
      href: "/",
    },
  ];

  return (
    <header className="min-h-[90px] w-screen px-5">
      <div className="flex justify-between py-2">
        {/*전체 컨테이너*/}
        <div className="relative ml-10 flex h-[80px] w-40 ">
          {/* 로고 컨테이너*/}
          <Image
            src="https://www.inha.ac.kr/sites/kr/images/logo.png"
            layout="fill"
            objectFit="contain"
            className="flex cursor-pointer"
            alt="로고"
            priority={true}
          />
        </div>

        <div className="flex w-[1400px] justify-between">
          {/* GNB Container*/}
          <nav className="flex h-full items-center gap-x-20 overflow-hidden">
            <HeaderMenu
              href="/"
              title="센터 소개"
              description="메뉴에 대한 설명을 써주세요"
              subTitle={RNDSubTitle}
            />
            <HeaderMenu
              href="/"
              title="연구 및 사업"
              description="메뉴에 대한 설명을 써주세요"
              subTitle={RNDSubTitle}
            />
            <HeaderMenu
              href="/"
              title="전공 소개"
              description="메뉴에 대한 설명을 써주세요"
              subTitle={RNDSubTitle}
            />
            <HeaderMenu
              href="/"
              title="자료실"
              description="메뉴에 대한 설명을 써주세요"
              subTitle={RNDSubTitle}
            />
            <HeaderMenu
              href="/"
              title="공지사항"
              description="메뉴에 대한 설명을 써주세요"
              subTitle={RNDSubTitle}
            />
          </nav>
          <div className="text-l flex w-[500px] items-center justify-around ">
            {/*기타 메뉴 리스트*/}
            <Link href="/">
              <a>GitHub</a>
            </Link>
            <Link href="/">
              <a>영문(EN)</a>
            </Link>
            <Link href="/">
              <a>ADMIN</a>
            </Link>
            <Link href="/">
              <a>SITEMAP</a>
            </Link>
            <Bars3CenterLeftIcon className="h-10 w-10" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
