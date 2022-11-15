import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import ForumCard from "./ForumCard";

function MainForum() {
    return (
        <div className=' h-[300px] w-full flex-col items-center bg-green-500 xs:h-[400px] md:h-[500px] lg:h-[600px] desktop:h-[700px] '>
            <h1 className='mb-2 flex h-[50px] items-center text-lg font-semibold xs:h-[60px] xs:text-xl md:h-[5%] md:text-2xl lg:text-3xl  desktop:text-4xl'>
                <span className='text-PRIMARY_COLOR-600'>최신 연구</span>

                <Link href='/data/paper'>
                    <div className='invisible absolute right-[6%] float-right flex cursor-pointer md:visible md:gap-x-2 md:text-base lg:gap-x-3 lg:text-lg desktop:gap-x-4 desktop:text-xl'>
                        자세히 보러 가기
                        <PlusIcon className='visible aspect-1/1 w-[18px] self-center rounded-full border border-PRIMARY_COLOR-500 p-1 xs:w-[20px] md:w-[22px] lg:w-[24px] desktop:w-[26px]' />
                    </div>
                </Link>
            </h1>
            <div>
                <ForumCard />
            </div>
        </div>
    );
}

export default MainForum;
