import React, { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {  SubMap } from "../../../../typing";
import SidebarMenu from "./SidebarMenu";
import {
    ArrowDownCircleIcon,
    ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { siteMapState } from "../../../atoms/sitemapAtom";

interface Props {}

function Sidebar() {
    const siteMap = useRecoilValue(siteMapState);
    const [currentMenu, setCurrentMenu] = useState<SubMap>();
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

    useEffect(() => {
        if (pathName === "info") {
            setCurrentMenu(siteMap.info);
        } else if (pathName === "research") {
            setCurrentMenu(siteMap.research);
        } else if (pathName === "major") {
            setCurrentMenu(siteMap.major);
        } else if (pathName === "data") {
            setCurrentMenu(siteMap.data);
        } else if (pathName === "notice") {
            setCurrentMenu(siteMap.notice);
        }
    }, [pathName]);

    return (
        <div className='relative mt-3 flex flex-col justify-center px-4 2xl:mt-0 2xl:w-[300px]'>
            {/*현재 메뉴*/}
            <div
                onClick={() => setMenuOpen(!menuOpen)}
                className='relative flex w-full items-center justify-center bg-gradient-to-tl from-PRIMARY_COLOR-300 to-PRIMARY_COLOR-200 py-3 text-2xl text-white 2xl:h-36 '
            >
                {currentMenu?.title_KO}
            </div>
            {isWide ? null : menuOpen ? (
                <ArrowUpCircleIcon className='absolute right-8 top-3.5 inline-block h-6 text-white' />
            ) : (
                <ArrowDownCircleIcon className='absolute right-8 top-3.5 inline-block h-6 text-white' />
            )}

            {/*현재 메뉴 리스트*/}
            {(menuOpen || isWide) && (
                <ul className='flex flex-col border-l border-b border-r'>
                    {currentMenu?.subMenu.map((subMenu, index) => (
                        <SidebarMenu key={index} subMenu={subMenu} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default memo(Sidebar);
