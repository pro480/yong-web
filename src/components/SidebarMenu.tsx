import React, {useEffect, useState} from "react";
import Link from "next/link";
import {ChevronDownIcon} from "@heroicons/react/24/outline";
import {SubTitle} from "../../typing";
import {useRouter} from "next/router";
import {ChevronUpIcon} from "@heroicons/react/24/solid";

interface Props {
    subTitle: SubTitle;
}

function SideBarMenu({subTitle}: Props) {
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
            <div
                className='flex h-14 cursor-pointer items-center justify-between border px-3 font-semibold'
                onClick={
                    subTitle.subMenu.length > 0
                        ? handleClickInside
                        : () => router.push(subTitle.href)
                }
            >
                <div>{subTitle.title}</div>
                {subTitle.subMenu.length > 0 &&
                    (isOpen ? (
                        <ChevronUpIcon className='h-5 text-PRIMARY_COLOR'/>
                    ) : (
                        <ChevronDownIcon className='h-5 text-PRIMARY_COLOR'/>
                    ))}
            </div>
            {/*사이트 바 메뉴 하위*/}
            {isOpen && (
                <ul className='flex flex-col gap-y-2 bg-SUBMENU_COLOR p-5 text-sm font-semibold text-gray-400'>
                    {subTitle.subMenu.map((subMenu, index) => (
                        <Link key={index} href={subMenu.href}>
                            <li className="cursor-pointer before:mr-2 before:content-['\2022']">
                                {subMenu.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </li>
    );
}

export default SideBarMenu;
