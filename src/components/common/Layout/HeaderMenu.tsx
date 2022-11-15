import React, { useState } from "react";
import Link from "next/link";
import { MinusIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SubMap } from "../../../../typing";
import Image from "next/image";
import logo_white from "../../../../public/images/logo/logo_white.png";

interface Props {
    subMap: SubMap;
}

function HeaderMenu({ subMap }: Props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const showMenu = () => {
        setDropdownOpen(true);
        document.addEventListener("click", closeMenu);
    };

    const closeMenu = () => {
        setDropdownOpen(false);

        document.removeEventListener("click", closeMenu);
    };

    return (
        <div className='h-full'>
            {/*1st depth*/}
            <div className='flex h-full items-center text-lg font-semibold hover:text-PRIMARY_COLOR-500 xl:text-xl'>
                <Link href={subMap.subMenu[0].href}>
                    <div
                        onMouseOver={showMenu}
                        onMouseOut={closeMenu}
                        className='group relative flex h-full w-full cursor-pointer items-center justify-center px-8 xl:px-12'
                    >
                        {subMap.title_KO}
                        <span className='absolute bottom-0 left-1/2 -z-50 flex h-1.5 w-0 -translate-x-1/2 content-center justify-center bg-PRIMARY_COLOR-500 group-hover:w-12 group-hover:transition-all'></span>
                    </div>
                </Link>
            </div>
            {/*아래부터 드랍다운  메뉴*/}
            {/*{dropdownOpen && (*/}
            <div
                onMouseOver={showMenu}
                onMouseOut={closeMenu}
                className={`absolute left-0 z-10 flex overflow-hidden w-full justify-between border-b-PRIMARY_COLOR-500 ${
                    dropdownOpen ? "max-h-screen min-h-[350px] border-b-2" : "max-h-0"
                }`}
            >
                {/* 드랍다운 좌측 설명 wrap*/}
                <section className='flex w-1/4 flex-col items-center justify-center border-t border-t-PRIMARY_COLOR-500 bg-PRIMARY_COLOR-500  text-white'>
                    <div className='flex h-52 flex-col items-center justify-around xl:h-60'>
                        <div className='relative w-44 xl:w-56'>
                            <Image src={logo_white} objectFit='contain' />
                        </div>
                        <div className=' flex'>
                            <MinusIcon className='h-10 xl:h-12' />
                            <MinusIcon className='h-10 text-white/70 xl:h-12 ' />
                            <MinusIcon className='h-10 text-white/20 xl:h-12' />
                        </div>
                        <h1 className='text-2xl font-bold 2xl:text-3xl'>
                            {subMap.title_KO}
                        </h1>
                    </div>
                </section>
                {/*드랍다운 우측 메뉴*/}
                <ul className='grid flex-1 gap-x-4 md:gap-x-8 xl:gap-x-12 xl:grid-cols-4 grid-cols-3 justify-start justify-items-stretch gap-y-6 border-t bg-white py-10 px-10 xl:gap-y-10 xl:py-20 xl:px-20'>
                    {/*2nd depth map*/}
                    {subMap.subMenu.map((item, index) => (
                        <li
                            key={index}
                            className='text-sm xl:text-base'
                        >
                            <Link href={item.href}>
                                <h1 className='z-20 flex w-full cursor-pointer justify-between border p-3 shadow-lg hover:scale-105 hover:font-semibold hover:text-PRIMARY_COLOR-500'>
                                    <span onClick={closeMenu} className=''>
                                        {item.title_KO}
                                    </span>
                                    {item.subMenu.length > 0 && (
                                        <ChevronDownIcon className='h-6 text-PRIMARY_COLOR-500' />
                                    )}
                                </h1>
                            </Link>
                            {/*3rd depth map*/}
                            <ul className='bg-SUBMENU_COLOR border-r border-b border-l bg-opacity-50 text-sm'>
                                {item.subMenu?.map((subMenu, index) => (
                                    <li
                                        className=" py-1 xl:px-4 pl-3 before:mr-2 before:text-PRIMARY_COLOR-500  before:content-['\2022'] xl:py-2"
                                        key={index}
                                    >
                                        <Link href={subMenu.href}>
                                            <span
                                                className='cursor-pointer hover:font-semibold hover:text-PRIMARY_COLOR-500'
                                                onClick={() =>
                                                    setDropdownOpen(false)
                                                }
                                            >
                                                {subMenu.title_KO}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;
