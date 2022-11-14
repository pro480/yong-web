import React, { useEffect, useLayoutEffect, useState } from "react";

import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { useRouter } from "next/router";

import {
    data,
    getFirstDepthTitle_KO,
    getSecondDepthDescription_KO,
    getSecondDepthTitle_KO,
    getThirdDepthTitle_KO,
} from "../../../utils/Utils";
import PageTitleComponent from "./PageTitleComponent";

interface Props {}

function PageTitle() {
    const path = useRouter().pathname.split("/");
    const [a, firstDepth, secondDepth, thirdDepth] = path;

    return (
        <div className='mb-10 flex h-40 flex-col justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold text-PRIMARY_COLOR-500'>
                    {getSecondDepthTitle_KO(secondDepth)}
                </h1>
                <h3 className='text-SUBFONT_COLOR mt-2 text-sm font-light'>
                    {getSecondDepthDescription_KO(secondDepth)}
                </h3>
            </div>
            <div className='flex gap-x-4 border-y py-3'>
                <Link href='/'>
                    <HomeIcon className='h-6 cursor-pointer text-PRIMARY_COLOR-500' />
                </Link>
                <Link href='/'>
                    <span className='cursor-pointer'>HOME</span>
                </Link>

                {path.map((item, index) => {

                    if (index === 1) {
                        return (
                            <PageTitleComponent
                                key={index}
                                href={`/${firstDepth}`}
                                active={path.length -1 === index}
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
