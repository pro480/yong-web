import React from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { SiteMap } from "../../typing";
import useAuth from "../hooks/useAuth";
import { ImGithub } from "react-icons/im";

interface Props {
    siteMap: SiteMap;
}

function Header({ siteMap }: Props) {
    const { logout } = useAuth();

    return (
        <header
            className='px-2 xl:h-[200px] desktop:h-[90px] border-b'
            // className='sticky min-h-[90px] w-screen items-center border-b px-5'
        >
            {/*아래는 전체 컨테이너*/}
            <div
                className='flex flex-col-reverse justify-center md:h-[90px] md:flex-row md:items-center md:justify-between desktop:w-full'
                // className='flex h-full justify-between'
            >
                <Link href='/'>
                    {/* 아래는 로고 컨테이너*/}
                    <div className='h-20 border-t py-3 md:w-60 md:border-none'>
                        {/*아래는 로고 사이즈*/}
                        <div className='relative block h-full'>
                            <Image
                                src='https://www.inha.ac.kr/sites/kr/images/logo.png'
                                layout='fill'
                                objectFit='contain'
                                objectPosition='center'
                                // className='flex cursor-pointer'
                                alt='로고'
                                priority={true}
                            />
                        </div>
                    </div>
                </Link>
                {/*아래는 GNB Wrap*/}
                <div
                    className='flex flex-col-reverse xl:flex-row-reverse desktop:w-full desktop:flex-row desktop:items-center desktop:justify-between'
                    // className='flex w-[1400px] justify-between'
                >
                    {/* 헤더메뉴 Container*/}
                    <nav
                        className='absolute top-[100px] left-0 hidden h-[90px] justify-around border-t xl:flex xl:w-full desktop:static desktop:px-24'
                        // className='flex h-full items-center gap-x-20 overflow-hidden'
                    >
                        <HeaderMenu subMap={siteMap.info} />
                        <HeaderMenu subMap={siteMap.research} />
                        <HeaderMenu subMap={siteMap.major} />
                        <HeaderMenu subMap={siteMap.data} />
                        <HeaderMenu subMap={siteMap.notice} />
                    </nav>
                    {/*기타 메뉴 리스트*/}
                    <div
                        className='flex h-12 items-center px-3 text-PRIMARY_FONT_COLOR desktop:w-[500px] desktop:justify-between'
                        // className='text-l flex w-[500px] items-center justify-around '
                    >
                        <a
                            target='_blank'
                            href='https://github.com/pro480/yong-web'
                            rel='noopener noreferrer'
                            className='mr-5'
                        >
                            {/*noopener noreferred은 보안 위협을 피하기 위함*/}
                            <ImGithub size='24' />
                        </a>
                        <button className='fonts mr-5 '>영문(EN)</button>
                        <Link href='/adminLogin'>
                            <a className='mr-5 hidden md:flex'>ADMIN</a>
                        </Link>
                        <Bars3CenterLeftIcon className='ml-auto h-8 desktop:ml-0' />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
