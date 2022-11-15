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
                            className='w-[30%] bg-green-500'
                            key={snapshot.id}
                        >
                            <div className='relative m-2 my-1 h-full w-full bg-green-200 xs:my-2 xs:mx-5  md:m-2 md:h-[450px] lg:h-[500px] desktop:mx-4 desktop:h-[550px]'>
                                <div className='flex justify-between'>
                                    <div className='py-0.5 text-[11px] font-bold xs:text-[11px]  md:py-0 md:text-lg  lg:py-1   desktop:py-2 desktop:text-2xl'>
                                        {items.title}
                                    </div>
                                    <a
                                        className='  h-[24px] w-[30px] cursor-pointer bg-PRIMARY_COLOR-300 text-center text-[13px] text-white hover:bg-PRIMARY_COLOR-600 sm:h-[30px] sm:w-[40px] sm:text-base xl:h-[30px] xl:w-[40px] xl:text-base'
                                        href={items.fileUrl}
                                    >
                                        <span>pdf</span>
                                    </a>
                                </div>

                                <p className=' releative top-0 hidden    md:mt-4 md:flex md:w-32 md:text-[15px] lg:mt-7 desktop:mt-10 desktop:text-[18px] bg-yellow-300'>
                                {/* <Image
                                        src={items.imgUrl}
                                        layout='fill'
                                        objectFit='contain'
                                        alt='연구 보고서'
                                        priority={true}
                                        quality={50}
                                    /> */}
                                </p>

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
