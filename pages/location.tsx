import React from "react";
import Image from "next/image";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { TruckIcon } from "@heroicons/react/24/solid";
import LocationBox from "../src/components/location/location_box";

function Location() {
    return (
        <div>
            <div className='flex flex-col space-y-16 md:space-y-28'>
                <div className='relative h-96 w-full'>
                    <Image
                        src='https://bit.ly/3X0hGgF'
                        alt='센터 오시는 길'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='flex flex-col space-y-5 font-bold'>
                    <div className='mb-5 flex space-x-5 border-b-8 pb-3 text-PRIMARY_COLOR-700'>
                        <BuildingOfficeIcon className='bg h-full w-10' />
                        <a className='text-3xl md:text-4xl'>상세 주소</a>
                    </div>

                    <div className='flex flex-col space-y-5 text-xl md:text-2xl'>
                        <span>인천광역시 남구 인하로 100 </span>
                        <span>
                            INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheon
                            22212, KOREA
                        </span>
                    </div>
                </div>

                <div className='flex flex-col space-y-16 font-bold'>
                    <div className='mb-5 flex space-x-5 border-b-8 pb-3 text-PRIMARY_COLOR-700'>
                        <TruckIcon className='bg h-full w-10' />
                        <a className='mb-5 text-3xl md:text-4xl'>
                            대중교통안내
                        </a>
                    </div>

                    <div className='flex w-full flex-col space-y-14'>
                        {/* 버스 */}
                        <div className='flex h-fit w-full flex-col items-center justify-center space-x-16 xs:items-center sm:flex-row'>
                            <span className='mb-5 flex w-40 justify-center text-2xl'>
                                버스 안내
                            </span>

                            <div className='flex w-full flex-col space-y-10 sm:w-4/5'>
                                <LocationBox
                                    range={"광역"}
                                    howToCome={"1601(서울), 9200(강남역)"}
                                />
                                <LocationBox
                                    range={"시내"}
                                    howToCome={
                                        "5, 5-1, 8, 9, 13, 27, 46, 111-2"
                                    }
                                />
                                <LocationBox
                                    range={"시외"}
                                    howToCome={"3001(광명역)"}
                                />
                                <LocationBox
                                    range={"마을"}
                                    howToCome={
                                        "511,516(주안역), 512(제물포역), 519(동인천역)"
                                    }
                                />
                                <LocationBox
                                    range={"급행"}
                                    howToCome={"908(송도신도시공영차고지)"}
                                />
                            </div>
                        </div>

                        {/*구분선*/}
                        <div className='border'></div>

                        {/* 지하철 */}

                        <div className='flex w-full flex-col items-center justify-center space-x-16 xs:items-center sm:flex-row'>
                            <span className='mb-5 flex w-40 justify-center text-2xl'>
                                지하철 안내
                            </span>

                            <div className='flex w-full flex-col space-y-10 sm:w-4/5'>
                                <LocationBox
                                    range={"1호선"}
                                    howToCome={
                                        "1번 출구 - 511, 515, 516, 518, 5-1, 46"
                                    }
                                />
                                <LocationBox
                                    range={"수인/분당선"}
                                    howToCome={
                                        "4번 출구-운동장 방향, 5번 출구-정문 방향"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
