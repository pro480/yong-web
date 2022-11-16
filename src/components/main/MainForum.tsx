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

function MainForum() {
    const ref = query(
        collection(db, "갤러리 데이터"),
        orderBy("createdAt", "desc"),
        limit(2)
    );
    const collectionQuery = useFirestoreQuery(["gallery_createdAt"], ref);
    return (
        <div className='flex h-[300px] flex-col gap-y-10  p-10 xs:h-[350px] md:h-[500px] lg:h-[600px] desktop:h-[700px]'>
            <div className='flex h-[10%] w-full items-center justify-center text-lg font-bold  xs:text-xl  md:text-2xl lg:text-3xl  desktop:text-4xl'>
                빅데이터 연구센터 갤러리
                <Link href='/data/gallery'>
                    <div className='invisible absolute right-[6%] float-right flex cursor-pointer md:visible md:gap-x-2 md:text-base lg:gap-x-3 lg:text-lg desktop:gap-x-4 desktop:text-xl'>
                        자세히 보러 가기
                        <PlusIcon className='visible aspect-1/1 w-[18px] self-center rounded-full border border-PRIMARY_COLOR-500 p-1 xs:w-[20px] md:w-[22px] lg:w-[24px] desktop:w-[26px]' />
                    </div>
                </Link>
            </div>
            <div className='flex flex-col  xs:flex-row justify-center xs:gap-y-0 gap-y-2 xs:gap-x-8'>
                {collectionQuery.data?.docs.map((snapshot) => {
                    const data = snapshot.data();
                    return (
                        <div
                            className=' flex w-[100%] xs:w-[47%] flex-col gap-y-4  border-2 border-PRIMARY_COLOR-600 p-3 shadow-md shadow-PRIMARY_COLOR-600  h-[80px] xs:h-[200px] md:h-[300px]  lg:h-[400px] desktop:h-[500px]  '
                            key={snapshot.id}
                        >
                            <div className=' invisible hidden md:visible xs:flex justify-between    '>
                                <div className=' w-2/3 overflow-hidden text-ellipsis whitespace-pre border-b-2 border-PRIMARY_COLOR-300  text-sm font-semibold  md:text-sm desktop:text-lg'>
                                    {data.title}
                                </div>
                                <div className=' flex items-center text-GRAY_COLOR-700 text-xs'>
                                    <ClockIcon className=' md:h-4 h-6 ' />
                                    {data.createdAt}
                                </div>
                            </div>
                            <div className='relative  h-full w-full '>
                                <Image
                                    src={data.imgUrl}
                                    layout='fill'
                                    objectFit='contain'
                                    objectPosition={"top"}
                                    alt='연구 보고서'
                                    priority={true}
                                    quality={50}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainForum;
