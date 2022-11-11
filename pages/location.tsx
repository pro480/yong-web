import React from "react";
import Image from "next/image";
import {BuildingOfficeIcon} from "@heroicons/react/24/solid"
import {TruckIcon} from "@heroicons/react/24/solid";

function Location() {
    return (
        <div>
            <div className='flex flex-col space-y-16 md:space-y-28'>
                <div className='relative h-96 w-full '>
                    <Image
                        src='https://bit.ly/3Ume8TR'
                        alt='센터 오시는 길'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='flex flex-col space-y-5 font-bold'>
                    <div className='flex space-x-5 border-b-8 mb-5 pb-3 text-PRIMARY_COLOR-700'>
                        <BuildingOfficeIcon className='h-full w-10 bg'/>
                        <a className='text-3xl md:text-4xl'>상세 주소</a>
                    </div>

                    <div className='flex flex-col text-xl md:text-2xl space-y-5'>
                        <span>인천광역시 남구 인하로 100 </span>
                        <span>
                            INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheon
                            22212, KOREA
                        </span>
                    </div>
                </div>

                <div className='flex flex-col space-y-16 font-bold'>
                    <div className='flex space-x-5 border-b-8 mb-5 pb-3 text-PRIMARY_COLOR-700'>
                        <TruckIcon className='h-full w-10 bg'/>
                        <a className='text-3xl md:text-4xl mb-5'>대중교통안내</a>
                    </div>

                    {/* 버스 */}
                    <div className='flex flex-col space-y-5'>
                        <div className='flex h-fit flex-col sm:flex-row xs:items-center items-center space-x-16'>
                            <span className='w-2/5 mb-5 text-2xl'>버스 안내</span>
                            <div className='flex flex-col  md:text-xl space-y-10'>
                                <div className='flex w-80 xs:w-72 md:w-96 space-x-5 items-center'>
                                    <div className='w-1/5 text-sm'>광역</div>
                                    <div className='history_division absolute left-0 xs:relative xs:w-auto'></div>
                                    <a className='text-sm'> 1601(서울역), 9200(강남역)</a>
                                </div>
                                <div className='flex w-80 xs:w-72 md:w-96 space-x-5 items-center'>
                                    <a className='w-1/5 text-sm'>시내</a>
                                    <div className='history_division absolute left-0 xs:relative xs:w-auto xs:visible'></div>
                                    <a className='text-sm'> 5, 5-1, 8, 9, 13, 27, 46, 111-2</a>
                                </div>
                                <div className='flex w-80 xs:w-72 md:w-96 space-x-5 items-center'>
                                    <a className='w-1/5 text-sm'>시외</a>
                                    <div className='history_division absolute left-0 xs:relative xs:w-auto xs:visible'></div>
                                    <a className='text-sm'> 3001(광명역) </a>
                                </div>
                                <div className='flex w-80 xs:w-72 md:w-96 space-x-5 items-center'>
                                    <a className='w-1/5 text-sm'>마을</a>
                                    <div className='history_division absolute left-0 xs:relative xs:w-auto xs:visible'></div>
                                    <a className ='w-2/5 text-xs'>  511,516(주안역), 512(제물포역), 519(동인천역) </a>
                                </div>
                                <div className='flex xs:w-72 md:w-96 space-x-5 items-center'>
                                    <a className='w-1/5 text-sm'>급행</a>
                                    <div className='history_division absolute left-0 xs:relative xs:w-auto xs:visible'></div>
                                    <a className='text-sm'>908(송도신도시공영차고지)</a>
                                </div>
                            </div>
                        </div>

                        {/* 지하철 */}
                        <div className='flex flex-col space-y-5 mt-5'>
                            <div className='flex h-fit flex-col sm:flex-row xs:items-center items-center space-x-16'>
                                <span className='w-2/5 mb-5 text-2xl'>지하철 안내</span>
                                <div className='flex flex-col  md:text-xl space-y-10'>
                                    <div className='flex w-80 xs:w-80 md:w-96 space-x-5 items-center'>
                                        <a className='w-1/5 text-sm'>1호선</a>
                                        <div className='history_division absolute left-0 xs:relative xs:w-auto xs:visible'></div>
                                        <a className ='text-xs'> 1번 출구 - 511, 515, 516, 518, 5-1, 46</a>
                                    </div>
                                    <div className='flex w-80 xs:w-80 md:w-96 space-x-5 items-center'>
                                        <a className='w-1/5 text-sm'>수인/분당선</a>
                                        <div className='history_division absolute left-0 xs:relative xs:w-auto xs:visible'></div>
                                        <a className ='text-xs'> 4번 출구-운동장 방향, 5번 출구-정문 방향</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
