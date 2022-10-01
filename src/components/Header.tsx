import React from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { SiteMap } from "../../typing";
import useAuth from "../hooks/useAuth";

interface Props {
  siteMap: SiteMap;
}

function Header({ siteMap }: Props) {
  const { logout } = useAuth();

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
            <button onClick={logout}>logout(임시)</button>
            <a
              target="_blank"
              href="https://github.com/pro480/yong-web"
              rel="noopener noreferrer"
            >
              {/*noopener noreferred은 보안 위협을 피하기 위함*/}
              GitHub
            </a>
            <Link href="/">
              <a>영문(EN)</a>
            </Link>
            <Link href="/adminLogin">ADMIN</Link>
            <Bars3CenterLeftIcon className="h-10 w-10" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
