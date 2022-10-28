import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SubMenu } from "../../../../typing";
import { useRouter } from "next/router";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

interface Props {
    subMenu: SubMenu;
}

function SideBarMenu({ subMenu }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleClickInside = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [router]);

    return (
        <li>
            {/*사이드 바 메뉴 타이틀*/}
            {subMenu.subMenu.length > 0 ? (
                <div
                    className='group flex h-14 cursor-pointer items-center justify-between px-3 font-semibold transition transition-colors delay-75 ease-in-out hover:bg-PRIMARY_COLOR-50'
                    onClick={handleClickInside}
                >
                    <div>{subMenu.title_KO}</div>
                    {isOpen ? (
                        <ChevronUpIcon className='h-5 text-PRIMARY_COLOR-500 transition' />
                    ) : (
                        <ChevronDownIcon className='h-5 text-PRIMARY_COLOR-500 transition group-hover:-rotate-90' />
                    )}
                </div>
            ) : (
                <Link href={subMenu.href}>
                    <div className='flex h-14 cursor-pointer items-center justify-between px-3 font-semibold transition transition-colors hover:bg-PRIMARY_COLOR-50'>
                        {subMenu.title_KO}
                    </div>
                </Link>
            )}
            <span className='flex w-full border-b'></span>

            {/*사이트 바 메뉴 하위*/}
            {isOpen && (
                <>
                    <ul className='flex flex-col gap-y-2 bg-white p-5 text-sm font-semibold text-GRAY_COLOR-500'>
                        {subMenu.subMenu.map((subMenu, index) => (
                            <Link key={index} href={subMenu.href}>
                                <li className="cursor-pointer before:mr-2 before:content-['\2022'] hover:text-PRIMARY_COLOR-500">
                                    {subMenu.title_KO}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <span className='flex w-full border-b'></span>
                </>
            )}
        </li>
    );
}

export default SideBarMenu;
