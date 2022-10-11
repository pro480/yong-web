import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    firstDepth: string;
    firstLink: string;
    secondDepth?: string;
    secondLink?: string;
    thirdDepth?: string;
    thirdLink?: string;
}

function PageTitle({
    title,
    description,
    firstDepth,
    firstLink,
    secondDepth,
    secondLink,
    thirdDepth,
    thirdLink,
}: Props) {
    return (
        <div className='mb-10 flex h-40 flex-col justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <h3 className='mt-2 text-sm font-light text-SUBFONT_COLOR'>
                    {description}
                </h3>
            </div>
            <div className='flex gap-x-4 border-y py-3'>
                <Link href='/'>
                    <HomeIcon className='h-6 cursor-pointer text-PRIMARY_COLOR-500' />
                </Link>
                <Link href='/'>
                    <span className='cursor-pointer'>HOME</span>
                </Link>
                {firstDepth && (
                    <span className='flex gap-x-4'>
                        <ChevronDoubleRightIcon className='h-6' />
                        <Link href={firstLink}>
                            <span className='cursor-pointer'>{firstDepth}</span>
                        </Link>
                    </span>
                )}{" "}
                {secondDepth && (
                    <span className='flex gap-x-4'>
                        <ChevronDoubleRightIcon className='h-6' />
                        <Link href={secondLink!}>
                            <span className='cursor-pointer'>
                                {secondDepth}
                            </span>
                        </Link>
                    </span>
                )}
                {thirdDepth && (
                    <span className='flex gap-x-4'>
                        <ChevronDoubleRightIcon className='h-6' />
                        <Link href={thirdLink!}>
                            <span className='cursor-pointer'>{thirdDepth}</span>
                        </Link>
                    </span>
                )}
            </div>
        </div>
    );
}

export default PageTitle;
