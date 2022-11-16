import React from "react";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

interface Props {
    title: string;
    active: boolean;
    href: string;
}

function PageTitleComponent({ title, active, href }: Props) {
    return (
        <>
            <ChevronDoubleRightIcon className='h-4' />
            <Link href={href}>
                <span
                    className={`${
                        active &&
                        "font-bold text-PRIMARY_COLOR-500 underline underline-offset-8"
                    } cursor-pointer whitespace-nowrap`}
                >
                    {title}
                </span>
            </Link>
        </>
    );
}

export default PageTitleComponent;
