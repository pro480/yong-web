import React from "react";

import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { useRouter } from "next/router";

import {
    data,
    getFirstDepthTitle_KO,
    getSecondDepthDescription_KO,
    getSecondDepthTitle_EN,
    getSecondDepthTitle_KO,
    getThirdDepthTitle_KO,
    info,
    major,
    notice,
    research,
} from "../../../utils/Utils";
import PageTitleComponent from "./PageTitleComponent";
import {useRecoilValue} from "recoil";
import {languageState} from "../../../atoms/languageAtom";

interface Props {}

function PageTitle() {
    const language = useRecoilValue(languageState)
    const path = useRouter().pathname.split("/");
    const [a, firstDepth, secondDepth, thirdDepth] = path;
    const converter = {
        info: info,
        data: data,
        research: research,
        major: major,
        notice: notice,
        location: location,
    };

    return (
        <div className='mb-10 flex h-40 flex-col justify-between'>
            <div className='flex flex-col'>
                {language?(
                    <h1 className='text-3xl font-bold text-PRIMARY_COLOR-500'>
                        {getSecondDepthTitle_EN(secondDepth)}
                    </h1>
                ):(
                    <h1 className='text-3xl font-bold text-PRIMARY_COLOR-500'>
                        {getSecondDepthTitle_KO(secondDepth)}
                    </h1>
                )}
                <h3 className='text-SUBFONT_COLOR mt-2 text-sm font-light'>
                    {getSecondDepthDescription_KO(secondDepth)}
                </h3>
            </div>
            <div className='flex items-center gap-x-1 border-y py-3 text-xs xs:text-sm sm:gap-x-2 sm:text-base md:gap-x-3 md:text-lg '>
                <Link href='/'>
                    <HomeIcon className='h-4 cursor-pointer text-PRIMARY_COLOR-500' />
                </Link>
                <Link href='/'>
                    <span className='cursor-pointer'>HOME</span>
                </Link>

                {path.map((item, index) => {
                    if (index === 1) {
                        // @ts-ignore
                        // @ts-ignore
                        return (
                            <PageTitleComponent
                                key={index}
                                href={
                                    converter[
                                        firstDepth as
                                            | "info"
                                            | "data"
                                            | "research"
                                            | "major"
                                            | "notice"
                                            | "location"
                                    ].href
                                }
                                active={path.length - 1 === index}
                                title={getFirstDepthTitle_KO(item)}
                            />
                        );
                    } else if (index === 2) {
                        return (
                            <PageTitleComponent
                                key={index}
                                href={`/${firstDepth}/${secondDepth}`}
                                active={path.length - 1 === index}
                                title={getSecondDepthTitle_KO(item)}
                            />
                        );
                    } else if (index === 3) {
                        return (
                            <PageTitleComponent
                                key={index}
                                href={`/${firstDepth}/${secondDepth}/${thirdDepth}`}
                                active={path.length - 1 === index}
                                title={getThirdDepthTitle_KO(item)}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default PageTitle;
