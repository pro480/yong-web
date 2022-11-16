import { ClockIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

import useFirebase from "../../hooks/useFirebase";
import {
    collection,
    limit,
    orderBy,
    query,
    snapshotEqual,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { Snapshot } from "recoil";
import { data } from "../../utils/Utils";
import Image from "next/image";
import { Media } from "reactstrap";
import moment from "moment";

function MainForum() {
    const ref = query(
        collection(db, "갤러리 데이터"),
        orderBy("createdAt", "desc"),
        limit(2)
    );
    const collectionQuery = useFirestoreQuery(["gallery_createdAt"], ref);
    return (
        <div className='flex flex-col gap-y-12 p-10'>
            <div className='flex h-[10%] w-full items-center justify-center text-lg font-bold  xs:text-xl  md:text-2xl lg:text-3xl  desktop:text-4xl'>
                갤러리
                <Link href='/data/gallery'>
                    <div className='invisible absolute right-[6%] float-right flex cursor-pointer hover:scale-105 md:visible md:gap-x-2 md:text-base lg:gap-x-3 lg:text-lg desktop:gap-x-4 desktop:text-xl'>
                        자세히 보러 가기
                        <PlusIcon className='visible aspect-1/1 w-[18px] self-center rounded-full border border-PRIMARY_COLOR-500 p-1 xs:w-[20px] md:w-[22px] lg:w-[24px] desktop:w-[26px]' />
                    </div>
                </Link>
            </div>
            <div className='grid grid-cols-1  justify-center gap-y-12 xs:grid-cols-2 xs:gap-y-0 xs:gap-x-4 md:gap-x-8'>
                {collectionQuery.data?.docs.map((snapshot) => {
                    const data = snapshot.data();
                    return (
                        <div
                            className='relative flex flex-col gap-y-4  border-2 border-PRIMARY_COLOR-600 p-3 shadow-md shadow-PRIMARY_COLOR-600'
                            key={snapshot.id}
                        >
                            <div className='relative aspect-[4/3]  '>
                                <Image
                                    className=''
                                    src={data.imgUrl}
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition={"top"}
                                    alt='연구 보고서'
                                    priority={true}
                                    quality={50}
                                />
                            </div>
                            <div className='hidden items-center self-end text-GRAY_COLOR-700 md:flex md:text-xs lg:text-sm desktop:text-base'>
                                <ClockIcon className=' md:h-4 lg:h-6 ' />
                                {moment(data.createdAt.slice(0, 8)).format(
                                    "YYYY-MM-DD"
                                )}
                            </div>
                            <p className='absolute -top-8 left-1/2 w-fit max-w-[90%] -translate-x-1/2 overflow-hidden text-ellipsis whitespace-nowrap border-b-2 border-PRIMARY_COLOR-300 px-2 text-sm  font-semibold  md:-top-10 md:text-base desktop:text-lg'>
                                {data.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainForum;
