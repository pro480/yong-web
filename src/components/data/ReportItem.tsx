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
            <div className='my-5 grid grid-cols-2 items-center gap-y-16 gap-x-1 self-center lg:grid-cols-3 xl:grid-cols-4'>
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
                            <div
                                key={docSnapshot.id}
                                className='flex h-[340px] w-[170px] flex-col justify-between sm:h-[440px] sm:w-[220px] md:h-[480px] md:w-[240px] xl:h-[500px] xl:w-[250px]'
                            >
                                <div className=' relative h-full border border-gray-300 xl:h-[352px] '>
                                    <Image
                                        src={items.imgUrl}
                                        layout='fill'
                                        objectFit='contain'
                                        alt='연구 보고서'
                                        priority={true}
                                        quality={50}
                                    />
                                </div>
                                <div className=' flex flex-col justify-around p-1'>
                                    <div className='py-1'>
                                        <div className='sm:text-lg xl:text-xl'>
                                            {items.title}
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='py-1'>
                                            <div className=' text-[11px] text-GRAY_COLOR-500 sm:text-[13px] xl:text-sm'>
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
                                        <a
                                            className='mx-2 h-[24px] w-[30px] cursor-pointer bg-PRIMARY_COLOR-300 text-center text-[13px] text-white hover:bg-PRIMARY_COLOR-600 sm:h-[30px] sm:w-[40px] sm:text-base xl:h-[30px] xl:w-[40px] xl:text-base'
                                            href={items.fileUrl}
                                        >
                                            <span>pdf</span>
                                        </a>
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
                                </div>
                            </div>
                        );
                    })}
            </div>
        </React.Fragment>
    );
}
