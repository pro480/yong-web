import React from "react";
import Image from "next/image";
import {BuildingOfficeIcon} from "@heroicons/react/24/solid"
import {TruckIcon} from "@heroicons/react/24/solid";

function Location() {
    return (
        <div>
            <div className='flex flex-col space-y-28'>
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
                        <a className='text-4xl'>상세 주소</a>
                    </div>

                    <div className='flex flex-col text-2xl'>
                        <span>인천광역시 남구 인하로 100  // 연구실 상세 위치를 입력해주세요</span>
                        <span>
                            INHA UNIVERSITY, 100 Inha-ro, Michuhol-gu, Incheno
                            22212, KOREA
                        </span>
                    </div>
                </div>

                <div className='flex flex-col space-y-5 font-bold'>
                    <div className='flex space-x-5 border-b-8 mb-5 pb-3 text-PRIMARY_COLOR-700'>
                        <TruckIcon className='h-full w-10 bg'/>
                        <a className='text-4xl mb-5'>대중교통안내</a>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div className='flex items-center space-x-16'>
                            <span className='text-2xl'>버스 노선도 안내</span>
                            <div className='flex flex-col text-xl space-y-10'>
                                <a>광역 ||
                                    <a> 1601(서울역), 9200(강남역)</a>
                                </a>
                                <a>시내 ||
                                    <a> 5, 5-1, 8, 9, 13, 27, 46, 111-2</a>
                                </a>
                                <a>타지역 ||
                                    <a> 3001(광명역)</a>
                                </a>
                                <a>마을 ||
                                    <a> 511 / 515 / 516 / 518(주안역), 512(제물포역), 517 / 519(동인천역)</a>
                                </a>
                                <a>급행 ||
                                    <a> 908(송도신도시공영차고지)</a>
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-5 mt-5'>
                            <div className='flex items-center space-x-16'>
                                <span className='text-2xl'>지하철 노선 안내</span>
                                <div className='flex flex-col text-xl space-y-10'>
                                    <a>1호선 ||
                                        <a> 1번 출구 :마을버스 511, 515, 516, 518 / 시내버스 5-1, 46</a>
                                    </a>
                                    <a>수인-분당선 ||
                                        <a> 4번 출구 :운동장 방향 // 5번 출구 :정문 방향</a>
                                    </a>
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
