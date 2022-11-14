import React from 'react';
import Link from "next/link";
import {ChevronDoubleRightIcon} from "@heroicons/react/24/outline";

interface Props {
    title : string
    active :boolean
    href:string
}

function PageTitleComponent({title, active, href} : Props) {

    return (
        <span className='flex gap-x-4'>
                        <ChevronDoubleRightIcon className='h-6'/>
                        <Link href={href}>
                            <span
                                className={`${
                                    active &&
                                    "font-bold text-PRIMARY_COLOR-500 underline underline-offset-8"
                                } cursor-pointer`}
                            >
                                {title}
                            </span>
                        </Link>
                    </span>
    );
}

export default PageTitleComponent;