import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { SiteMap, SubMenu } from "../../../typing";

interface Props {
    image: StaticImageData;
    siteMap: SiteMap;
}

function Banner({ image, siteMap }: Props) {
    const [title, setTitle] = useState("");

    const path = useRouter().pathname.split("/");
    const [a, firstDepth, secondDepth, thirdDepth] = path;

    let subMenu: SubMenu[];

    useEffect(() => {
        switch (path.length) {
            case 2:
                // @ts-ignore
                setTitle(siteMap[firstDepth].title_EN);
                break;
            case 3:
                // @ts-ignore
                subMenu = siteMap[firstDepth].subMenu;
                setTitle(
                    subMenu.filter((item) => {
                        let tempIndex = item.href.lastIndexOf("/");
                        return secondDepth === item.href.slice(tempIndex + 1);
                    })[0].title_EN
                );
                break;
            case 4:
                // @ts-ignore
                subMenu = siteMap[firstDepth].subMenu;
                let thirdMenu = subMenu.filter((item) => {
                    let tempIndex = item.href.lastIndexOf("/");
                    return secondDepth === item.href.slice(tempIndex + 1);
                })[0].subMenu;
                setTitle(
                    thirdMenu.filter((item) => {
                        let tempIndex = item.href.lastIndexOf("/");
                        return thirdDepth === item.href.slice(tempIndex + 1);
                    })[0].title_EN
                );
                break;
        }
    });

    return (
        <div className='relative mb-6 flex text-white'>
            {/*로고 투명도 조절*/}
            <div className='h-fit w-full bg-black/50'>
                {/*로고 사이즈*/}
                <div className='relative -z-10 flex h-48 md:h-60 lg:h-64 desktop:h-72'>
                    <Image
                        src={`/images/banner/${firstDepth}Banner.jpg`}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='로고'
                        priority={true}
                        quality={75}
                    />
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap border-b-4 border-b-PRIMARY_COLOR-500 pb-3 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl'>
                {title}
            </div>
        </div>
    );
}

export default Banner;
