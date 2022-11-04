import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { ReportContext } from "./Report";
import { ReportDeleteButton } from "./ReportButtons";

export default function ReportItem() {
    const { researchList } = useContext(ReportContext);
    const { user } = useAuth();

    return (
        <React.Fragment>
            <div className='my-5 grid grid-cols-1 items-center gap-y-16 gap-x-1 self-center md:grid-cols-2 xl:grid-cols-4'>
                {researchList?.map((docSnapshot) => {
                    const items = docSnapshot.data();
                    return (
                        <div
                            key={docSnapshot.id}
                            className='flex h-[450px] w-[250px] flex-col justify-between border-4 border-white hover:border-4 '
                        >
                            <div className=' flex h-[297px] w-[237px] items-center justify-center bg-GRAY_COLOR-500'>
                                <div className='relative w-[full] '>
                                    {/* <Image
                                src={items.imgUrl}
                                layout='fill'
                                objectFit='contain'
                                alt='연구 보고서'
                                priority={true}
                                quality={50}
                                /> */}
                                </div>
                            </div>
                            <div className=' flex flex-col justify-around p-1'>
                                <div className=' text-xl'>{items.title}</div>

                                <div className=' text-lg'>{items.type}</div>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className=' text-sm text-GRAY_COLOR-500'>
                                            연구자 |{" "}
                                            <span> {items.researcher} </span>
                                        </div>
                                        <div className=' text-sm text-GRAY_COLOR-500'>
                                            발행 년도 |{" "}
                                            <span>{items.year}</span>
                                        </div>
                                    </div>
                                    <div className='mx-2 h-[30px] w-[40px] cursor-pointer bg-PRIMARY_COLOR-300 text-center text-white hover:bg-PRIMARY_COLOR-600'>
                                        <span>pdf</span>
                                    </div>
                                    {user ? (
                                        <ReportDeleteButton
                                            docId={docSnapshot.id}
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}
