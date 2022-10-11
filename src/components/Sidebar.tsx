import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SiteMap } from "../../typing";
import SidebarMenu from "./SidebarMenu";
import {
    ArrowDownCircleIcon,
    ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";

interface Props {
    siteMap: SiteMap;
}

function Sidebar({ siteMap }: Props) {
    const pathName = useRouter().pathname.split("/")[1];
    const [menuOpen, setMenuOpen] = useState(false);
    const [isWide, setIsWide] = useState(false);

    useEffect(() => {
        const handleScreen = () => {
            if (window.innerWidth > 1536) {
                setIsWide(true);
                setMenuOpen(true);
            } else {
                setIsWide(false);
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleScreen);
        if (window.innerWidth > 1536) {
            setIsWide(true);
        } else {
            setIsWide(false);
        }

        return () => {
            window.removeEventListener("resize", handleScreen);
        };
    }, []);

    let currentMenu;

    if (pathName === "info") {
        currentMenu = siteMap.info;
    } else if (pathName === "research") {
        currentMenu = siteMap.research;
    } else if (pathName === "major") {
        currentMenu = siteMap.major;
    } else if (pathName === "data") {
        currentMenu = siteMap.data;
    } else if (pathName === "notice") {
        currentMenu = siteMap.notice;
    }

    return (
        <div className='relative mt-3 flex flex-col justify-center px-4 2xl:mt-0 2xl:w-[300px]'>
            {/*현재 메뉴*/}
            <div
                onClick={() => setMenuOpen(!menuOpen)}
                className='relative flex w-full items-center justify-center bg-gradient-to-tl from-PRIMARY_COLOR-300 to-PRIMARY_COLOR-200 py-3 text-2xl text-white 2xl:h-36 '
            >
                {currentMenu?.title}
            </div>
            {isWide ? null : menuOpen ? (
                <ArrowUpCircleIcon className='absolute right-8 top-3.5 inline-block h-6 text-white' />
            ) : (
                <ArrowDownCircleIcon className='absolute right-8 top-3.5 inline-block h-6 text-white' />
            )}

            {/*현재 메뉴 리스트*/}
            {(menuOpen || isWide) && (
                <ul className='flex flex-col'>
                    {currentMenu?.subTitle.map((subTitle, index) => (
                        <SidebarMenu key={index} subTitle={subTitle} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Sidebar;
