import React, { useEffect, useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { siteMapState } from "../../../atoms/sitemapAtom";
import { useRouter } from "next/router";
import { SiteMap, SubMap, SubMenu } from "../../../../typing";

interface Props {}

function PageTitle() {
    const siteMap = useRecoilValue(siteMapState);
    const path = useRouter().pathname.split("/").slice(1);
    const pathList = [];
    let temp: any;
    for (let i = 0; i < path.length; i++) {
        if (i === 0) {
            // @ts-ignore
            temp = { ...siteMap[path[i]] };
            // @ts-ignore
            pathList.push({ ...temp });
        } else {
            // @ts-ignore
            temp = temp.subMenu?.filter((item: SubMenu) => {
                let tempIndex = item.href.lastIndexOf("/");
                return item.href.slice(tempIndex + 1) === path[i];
            })[0];
            pathList.push({ ...temp });
        }
    }

    const currentPath: SubMap | SubMenu = pathList[pathList.length - 1];

    return (
        <div className='mb-10 flex h-40 flex-col justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold text-PRIMARY_COLOR-500'>
                    {currentPath.title_KO}
                </h1>
                <h3 className='text-SUBFONT_COLOR mt-2 text-sm font-light'>
                    {currentPath.description}
                </h3>
            </div>
            <div className='flex gap-x-4 border-y py-3'>
                <Link href='/'>
                    <HomeIcon className='h-6 cursor-pointer text-PRIMARY_COLOR-500' />
                </Link>
                <Link href='/'>
                    <span className='cursor-pointer'>HOME</span>
                </Link>
                {pathList.map((item) => (
                    <span key={item.href} className='flex gap-x-4'>
                        <ChevronDoubleRightIcon className='h-6' />
                        <Link href={item.href}>
                            <span
                                className={`${
                                    item.title_KO === currentPath.title_KO &&
                                    "font-bold text-PRIMARY_COLOR-500 underline underline-offset-8"
                                } cursor-pointer`}
                            >
                                {item.title_KO}
                            </span>
                        </Link>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default PageTitle;
