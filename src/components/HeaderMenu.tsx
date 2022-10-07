import React, { memo, useState } from "react";
import Link from "next/link";
import { MinusIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SubMap } from "../../typing";

interface Props {
    subMap: SubMap;
}

function HeaderMenu({ subMap }: Props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='h-full'>
            {/*1st depth*/}
            <div className='flex h-full items-center text-xl font-semibold hover:text-PRIMARY_COLOR'>
                <div
                    className='group relative flex h-full w-full items-center justify-center'
                    onMouseOver={() => setDropdownOpen(true)}
                    onMouseOut={() => setDropdownOpen(false)}
                >
                    <Link href={subMap.subTitle[0].href}>
                        <a className='cursor-pointer px-6' onClick={() => {}}>
                            {subMap.title}
                        </a>
                    </Link>
                    <span className='absolute bottom-0 left-1/2 flex h-1.5 w-0 -translate-x-1/2 content-center justify-center bg-PRIMARY_COLOR group-hover:w-12 group-hover:transition-all'></span>
                </div>
            </div>
            {/*아래부터 드랍다운  메뉴*/}

            {dropdownOpen && (
                <div
                    onMouseOver={() => setDropdownOpen(true)}
                    onMouseOut={() => setDropdownOpen(false)}
                    className='absolute left-0 z-10 flex w-screen justify-between border-b-2 border-t border-b-PRIMARY_COLOR'
                >
                    {/* 드랍다운 좌측 설명 wrap*/}
                    <section className='flex w-[30%] flex-col items-center border-t border-t-PRIMARY_COLOR bg-PRIMARY_COLOR py-20 text-white '>
                        <div>
                            <h1 className='mb-5 text-2xl font-bold'>
                                {subMap.title}
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
                        {subMap.subTitle.map((item, index) => (
                            <li key={index} className='w-52'>
                                <Link href={item.href}>
                                    <h1 className='z-20 hover:text-PRIMARY_COLOR hover:font-semibold flex cursor-pointer w-full justify-between border p-3 shadow-lg hover:scale-105'>
                                        <span
                                            onClick={() =>
                                                setDropdownOpen(false)
                                            }
                                            className=''
                                        >
                                            {item.title}
                                        </span>
                                        {item.subMenu.length > 0 && (
                                            <ChevronDownIcon className='h-6 text-gray-300' />
                                        )}
                                    </h1>
                                </Link>
                                {/*3rd depth map*/}
                                <ul className='bg-SUBMENU_COLOR bg-opacity-50 text-sm'>
                                    {item.subMenu?.map((subMenu, index) => (
                                        <li
                                            className="py-2 px-4 before:mr-2  before:text-PRIMARY_COLOR before:content-['\2022']"
                                            key={index}
                                        >
                                            <Link href={subMenu.href}>
                                                <span
                                                    className='cursor-pointer hover:text-PRIMARY_COLOR hover:font-semibold'
                                                    onClick={() =>
                                                        setDropdownOpen(false)
                                                    }
                                                >
                                                    {subMenu.title}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default memo(HeaderMenu);
