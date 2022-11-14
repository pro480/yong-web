import React, { useContext } from "react";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ReportContext } from "./ResearchReport";
import Image from "next/image";

export default function ReportCard() {
    const { researchList } = useContext(ReportContext);

    return (
        <React.Fragment>
            {researchList
                ?.sort(
                    (a, b) =>
                        Number(b.data().createdAt) - Number(a.data().createdAt)
                )
                .slice(0, 3)
                .map((snapshot) => {
                    const items = snapshot.data();
                    return (
                        <div
                            className='mb-3 flex w-full items-center border-2 border-gray-300 p-1 xs:mb-5  xs:p-2 md:mb-3 md:w-[32%] md:items-start md:p-3 lg:p-4 desktop:w-[30%] desktop:p-5'
                            key={snapshot.id}
                        >
                            <div className=' flex aspect-1/1 h-[25px] items-center justify-center  rounded-full bg-yellow-500 xs:h-[30px] md:h-[25px] lg:h-[30px] desktop:h-[50px]'>
                                <NewspaperIcon className='h-full p-1 desktop:p-2' />
                            </div>
                            <div className='relative mt-1 ml-2 h-full w-full xs:mt-2 xs:ml-5 md:mt-0 md:ml-2 md:h-[450px] lg:h-[500px] desktop:ml-4 desktop:h-[550px]'>
                                <div className='py-0.5 text-[11px] font-bold xs:text-[11px]  md:py-0 md:text-lg  lg:py-1   desktop:py-2 desktop:text-2xl'>
                                    {items.title}
                                </div>
                                <p className=' hidden overflow-hidden text-ellipsis  md:mt-4 md:flex md:h-[60%] md:text-[15px] lg:mt-7 lg:h-[70%]  desktop:mt-10 desktop:text-[18px]'>
                                    <Image
                                        src={items.imgUrl}
                                        layout='fill'
                                        objectFit='contain'
                                        alt='연구 보고서'
                                        priority={true}
                                        quality={50}
                                    />
                                </p>
                                <a
                                    className=' absolute bottom-5 h-[24px] w-[30px] cursor-pointer bg-PRIMARY_COLOR-300 text-center text-[13px] text-white hover:bg-PRIMARY_COLOR-600 sm:h-[30px] sm:w-[40px] sm:text-base xl:h-[30px] xl:w-[40px] xl:text-base'
                                    href={items.fileUrl}
                                >
                                    <span>pdf</span>
                                </a>
                                <div className='absolute bottom-3 right-0 hidden text-gray-700 xs:flex xs:h-2  xs:text-[1px]  md:text-[5px] lg:text-[15px] desktop:text-[17px]'>
                                    연구자 : {items.researcher}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </React.Fragment>
    );
}
