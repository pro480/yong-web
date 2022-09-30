import React from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { SiteMap } from "../../typing";




interface Props {
  siteMap: SiteMap;
}

function Header({ siteMap }: Props) {
  return (
    <header className="min-h-[90px] w-screen items-center border-b px-5">
      {/*아래는 전체 컨테이너*/}
      <div className="flex h-full justify-between">
        {/* 아래는 로고 컨테이너*/}
        <div className="relative ml-10 flex h-[90px] w-40 ">
          <Link href="/">
            <div>
              <Image
                src="https://www.inha.ac.kr/sites/kr/images/logo.png"
                layout="fill"
                objectFit="contain"
                className="flex cursor-pointer"
                alt="로고"
                priority={true}
              />
            </div>
          </Link>
        </div>
        {/*아래는 GNB Wrap*/}
        <div className="flex w-[1400px] justify-between">
          {/* GNB Container*/}
          <nav className="flex h-full items-center gap-x-20 overflow-hidden">
            <HeaderMenu subMap={siteMap.info} />
            <HeaderMenu subMap={siteMap.research} />
            <HeaderMenu subMap={siteMap.major} />
            <HeaderMenu subMap={siteMap.data} />
            <HeaderMenu subMap={siteMap.notice} />
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
