import React, { useState } from "react";
import Link from "next/link";
import { MinusIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SubMap } from "../../typing";

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
            <div className='flex h-full items-center text-xl font-semibold hover:text-PRIMARY_COLOR-500'>
                <Link href={subMap.subMenu[0].href}>
                    <div
                        onMouseOver={showMenu}
                        onMouseOut={closeMenu}
                        className='group relative flex h-full w-full cursor-pointer items-center justify-center px-4'
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
                className={`absolute left-0 z-10  w-screen justify-between border-b-2 border-t border-b-PRIMARY_COLOR-500 ${
                    dropdownOpen ? "flex" : "hidden"
                }`}
            >
                {/* 드랍다운 좌측 설명 wrap*/}
                <section className='flex w-[30%] flex-col items-center border-t border-t-PRIMARY_COLOR-500 bg-PRIMARY_COLOR-500 py-20 text-white '>
                    <div>
                        <h1 className='mb-5 text-2xl font-bold'>
                            {subMap.title_KO}
                        </h1>
                        <div className='mb-5 flex'>
                            <MinusIcon className='h-10 w-10' />
                            <MinusIcon className='h-10 w-10 text-white/70 ' />
                            <MinusIcon className='h-10 w-10 text-white/20' />
                        </div>
                        <div className=''>{subMap.description}</div>
                    </div>
                </section>
                {/*드랍다운 우측 메뉴*/}
                <ul className='flex w-[70%] flex-wrap gap-x-14 gap-y-10 border-t bg-white py-20 px-20'>
                    {/*2nd depth map*/}
                    {subMap.subMenu.map((item, index) => (
                        <li key={index} className='w-52'>
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
                                        className="py-2 px-4 before:mr-2  before:text-PRIMARY_COLOR-500 before:content-['\2022']"
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
