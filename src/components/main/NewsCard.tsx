import React from "react";
import { PlusIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { CenterNews, EventNews } from "../../../typing";
import moment from "moment";

interface Props {
    href: string;
    title: string;
    data: CenterNews | EventNews;
}

function NewsCard({ data, title, href }: Props) {
    return (
        <Link href={href}>
            <div className='group flex min-h-[310px] max-h-[450px] w-full cursor-pointer flex-col gap-y-3 rounded-tr-3xl rounded-bl-3xl bg-GRAY_COLOR-200 px-7 py-7 transition-colors duration-[350ms] ease-in-out hover:bg-PRIMARY_COLOR-400 '>
                <div className='flex w-full justify-between text-xl font-black text-PRIMARY_COLOR-700 group-hover:text-white'>
                    {title}
                    <PlusIcon className='h-7 border border-PRIMARY_COLOR-400 group-hover:bg-white group-hover:text-PRIMARY_COLOR-400' />
                </div>

                <div className='relative w-full border-b before:absolute before:-bottom-[4px] before:w-20 before:-translate-y-1/2 before:border-b-[4px] before:border-PRIMARY_COLOR-500 group-hover:before:border-white'></div>

                <div className='w-full text-lg font-bold group-hover:font-semibold group-hover:text-white'>
                    {data.title}
                </div>

                <div className='main_info_item_content flex-1 text-GRAY_COLOR-900 group-hover:font-semibold group-hover:text-GRAY_COLOR-500'>
                    {data.content}
                </div>

                <div className='flex w-full justify-end text-gray-500 group-hover:text-white'>
                    <ClockIcon className='h-6' />
                    <div>
                        {moment(data.createdAt.slice(0, 8)).format(
                            "YYYY-MM-DD"
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NewsCard;
