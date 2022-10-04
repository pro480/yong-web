import React from "react";
import { useRouter } from "next/router";
import { SiteMap } from "../../typing";
import SidebarMenu from "./SidebarMenu";

interface Props {
    siteMap: SiteMap;
}

function Sidebar({ siteMap }: Props) {
    const pathName = useRouter().pathname.split("/")[1];

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
        <div className=' top-[90px] w-96'>
            {/*현재 메뉴*/}
            <div className='flex h-52 items-center justify-center bg-gradient-to-tl from-PRIMARY_COLOR to-blue-400 text-2xl font-semibold text-white'>
                {currentMenu?.title}
            </div>
            {/*현재 메뉴 리스트*/}
            <ul>
                {currentMenu?.subTitle.map((subTitle, index) => (
                    <SidebarMenu key={index} subTitle={subTitle} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
