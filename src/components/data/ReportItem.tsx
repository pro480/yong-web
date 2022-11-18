import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { ReportContext } from "./Report";
import { ReportDeleteButton, ReportUpdateButton } from "./ReportButtons";
import Image from "next/image";

export default function ReportItem() {
    const { researchList, pageNumber } = useContext(ReportContext);
    const { user } = useAuth();

    return (
        <React.Fragment>
            <div className='my-5 grid grid-cols-2 items-center gap-y-16 gap-x-4 self-center sm:gap-x-12 lg:grid-cols-3 xl:grid-cols-4'>
                {researchList
                    ?.sort(
                        (a, b) =>
                            Number(b.data().createdAt) -
                            Number(a.data().createdAt)
                    )
                    // 한 페이지당 원하는 자료 수 만큼 자르기
                    .slice(
                        (Number(pageNumber) - 1) * 8,
                        (Number(pageNumber) - 1) * 8 + 8
                    )
                    .map((docSnapshot) => {
                        const items = docSnapshot.data();
                        return (
                            <div key={docSnapshot.id} className='flex flex-col'>
                                <div className='relative aspect-[1/1.414] w-full border border-gray-300 before:float-left before:pt-[141.4%]  '>
                                    <Image
                                        src={items.imgUrl}
                                        layout='fill'
                                        alt='연구 보고서'
                                        priority={true}
                                        quality={50}
                                    />
                                </div>
                                <div className='flex flex-col justify-around p-1'>
                                    <div className='py-1'>
                                        <div className='overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs xs:text-sm sm:text-base'>
                                            {items.title}
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='py-1'>
                                            <div className=' text-xs text-GRAY_COLOR-500  xl:text-sm'>
                                                연구자 |{" "}
                                                <span>
                                                    {" "}
                                                    {items.researcher}{" "}
                                                </span>
                                            </div>
                                            <div className='text-[11px] text-GRAY_COLOR-500 sm:text-[13px] xl:text-sm'>
                                                발행 년도 |{" "}
                                                <span>{items.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {user && (
                                        <div className='flex py-2'>
                                            <ReportUpdateButton
                                                docId={docSnapshot.id}
                                                data={docSnapshot.data()}
                                            />
                                            <ReportDeleteButton
                                                docId={docSnapshot.id}
                                            />
                                        </div>
                                    )}
                                    <a
                                        className='flex h-fit w-fit cursor-pointer bg-PRIMARY_COLOR-300 px-2 pb-1 text-center text-xs text-white hover:bg-PRIMARY_COLOR-600'
                                        href={items.fileUrl}
                                    >
                                        <span>pdf</span>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </React.Fragment>
    );
}
