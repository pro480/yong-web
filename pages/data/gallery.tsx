import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Gallery() {
    type GalleryData = {
        mainPage: boolean;
        title: string;
        writer: string;
        createAt: string;
        imgUrl: string[];
        content: string;
    };

    return (
        <div>
            <PageTitle
                title='갤러리'
                description='갤러리 페이지의 설명을 입력해주세요.'
                firstDepth='자료실'
                firstLink='/data'
                secondDepth='갤러리'
                secondLink='/data/gallery'
            />

            <div>갤러리페이지는 무한 스크롤 방식으로 구현 할 예정입니다</div>
            <main>
                {/*카테고리*/}
                <div className='flex'>
                    <a className='w-24 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        전체
                    </a>
                    <a className='w-48 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        분류 1
                    </a>
                    <a className='w-48 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        분류 2
                    </a>
                    <a className='w-52 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        분류 3
                    </a>
                    <a className='w-52 cursor-pointer border px-4 py-3 text-center hover:border-t hover:border-t-2 hover:border-b-0 hover:border-t-black'>
                        분류 4
                    </a>

                    <span className='w-full border-b'></span>
                </div>
                {/*검색창*/}
                <div className='mt-5 flex h-9 items-center justify-end'>
                    <select className='h-full border pl-2 pr-7'>
                        <option>전체</option>
                        <option value='title '>제목</option>
                        <option value='content'>내용</option>
                    </select>

                    <input className='ml-6 h-full w-32 border' />
                    <MagnifyingGlassIcon className='h-full bg-PRIMARY_COLOR-500 p-1 text-white' />
                </div>
                <div className=' my-5 grid grid-cols-1 items-center gap-y-16 gap-x-12 self-center md:grid-cols-2 xl:grid-cols-3'>
                    <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
                        <div className=' flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                            이미지가 들어갈 공간입니다{" "}
                        </div>
                        <div className=' my-2 flex h-[120px] flex-col items-center justify-around'>
                            <div className=' text-lg'>이미지 제목</div>
                            <div className=' text-sm text-GRAY_COLOR-500'>
                                이미지 날짜
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
                        <div className=' flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                            이미지가 들어갈 공간입니다{" "}
                        </div>
                        <div className=' my-2 flex h-[120px] flex-col items-center justify-around'>
                            <div className=' text-lg'>이미지 제목</div>
                            <div className=' text-sm text-GRAY_COLOR-500'>
                                이미지 날짜
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
                        <div className=' flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                            이미지가 들어갈 공간입니다{" "}
                        </div>
                        <div className=' my-2 flex h-[120px] flex-col items-center justify-around'>
                            <div className=' text-lg'>이미지 제목</div>
                            <div className=' text-sm text-GRAY_COLOR-500'>
                                이미지 날짜
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
                        <div className=' flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                            이미지가 들어갈 공간입니다{" "}
                        </div>
                        <div className=' my-2 flex h-[120px] flex-col items-center justify-around'>
                            <div className=' text-lg'>이미지 제목</div>
                            <div className=' text-sm text-GRAY_COLOR-500'>
                                이미지 날짜
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
                        <div className=' flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                            이미지가 들어갈 공간입니다{" "}
                        </div>
                        <div className=' my-2 flex h-[120px] flex-col items-center justify-around'>
                            <div className=' text-lg'>이미지 제목</div>
                            <div className=' text-sm text-GRAY_COLOR-500'>
                                이미지 날짜
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
                        <div className=' flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                            이미지가 들어갈 공간입니다{" "}
                        </div>
                        <div className=' my-2 flex h-[120px] flex-col items-center justify-around'>
                            <div className=' text-lg'>이미지 제목</div>
                            <div className=' text-sm text-GRAY_COLOR-500'>
                                이미지 날짜
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
                        <div className=' flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                            이미지가 들어갈 공간입니다{" "}
                        </div>
                        <div className=' my-2 flex h-[120px] flex-col items-center justify-around'>
                            <div className=' text-lg'>이미지 제목</div>
                            <div className=' text-sm text-GRAY_COLOR-500'>
                                이미지 날짜
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Gallery;
