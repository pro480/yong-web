import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Vision() {
    return (
        <div>
            <PageTitle
                title='졸업 후 진로'
                description=''
                firstDepth='전공 소개'
                firstLink='/major'
                secondDepth='졸업 후 진로'
                secondLink='/major/vision'
            />

            {/* 비전 제목 */}
            <div className='pb-12'>
                <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                    Vision
                </h1>
            </div>

            {/* 비전 설명 1, 2 ,3  */}
            <div className='flex-col justify-center py-5 text-xl font-semibold'>
                <div className='box-content flex h-[400px] rounded-[70px] border-r-8 border-b-8'>
                    <div className='box-content w-1/3 rounded-[70px] bg-gray-200'>
                        <div className='grid place-items-center py-[180px]'>
                            비전 이미지 1
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>첫번째 비전 이미지</div>
                            <div>첫번째 비전 설명</div>
                        </div>
                    </div>
                </div>

                <div className='box-content flex h-[400px] rounded-[70px] border-r-8 border-b-8'>
                    <div className='box-content w-1/3 rounded-[70px] bg-gray-200'>
                        <div className='grid place-items-center py-[180px]'>
                            비전 이미지 1
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>첫번째 비전 이미지</div>
                            <div>첫번째 비전 설명</div>
                        </div>
                    </div>
                </div>
                <div className='box-content flex h-[400px] rounded-[70px] border-r-8 border-b-8'>
                    <div className='box-content w-1/3 rounded-[70px] bg-gray-200'>
                        <div className='grid place-items-center py-[180px]'>
                            비전 이미지 1
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>첫번째 비전 이미지</div>
                            <div>첫번째 비전 설명</div>
                        </div>
                    </div>
                </div>

                <div className='box-content flex h-[400px] rounded-[70px] border-r-8 border-b-8'>
                    <div className='box-content w-1/3 rounded-[70px] bg-gray-200'>
                        <div className='grid place-items-center py-[180px]'>
                            비전 이미지 1
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>첫번째 비전 이미지</div>
                            <div>첫번째 비전 설명</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;
