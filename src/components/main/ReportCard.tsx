import React, { useContext } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
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
                        //기본틀
                        <div
                            className=' flex h-[30%] w-full cursor-pointer flex-col justify-around gap-y-2 rounded-md bg-PRIMARY_COLOR-600 p-2 shadow-md shadow-PRIMARY_COLOR-600  hover:scale-[105%] md:h-full md:w-[30%] md:gap-y-8'
                            key={snapshot.id}
                        >
                            <div className='  flex h-[60%] w-full items-center justify-around md:h-[10%] lg:py-1 desktop:py-2'>
                                <div className=' w-[85%] overflow-hidden text-ellipsis whitespace-pre border-b-2 border-b-white text-base font-bold text-gray-200 md:text-lg  lg:text-xl  desktop:px-2 desktop:text-2xl'>
                                    {items.title}
                                </div>
                            </div>
                            <div
                                className='relative top-0 hidden md:flex md:aspect-[1/1.41]  md:w-[1/3]'
                                onClick={() => window.open(items.fileUrl)}
                            >
                                <Image
                                    src={items.imgUrl}
                                    layout='fill'
                                    objectFit='contain'
                                    objectPosition={"top"}
                                    alt='연구 보고서'
                                    priority={true}
                                    quality={50}
                                />
                            </div>
                            <div className='relative bottom-0 h-[40%] text-right  text-white md:h-[5%]'>
                                연구자 : {items.researcher}
                            </div>
                        </div>
                    );
                })}
        </React.Fragment>
    );
}
