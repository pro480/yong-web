import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import GalleryCard from "../../src/components/GalleryCard";
import useAuth from "../../src/hooks/useAuth";
import Image from "next/image";



function Gallery() {
    const [onToggle, setToggle] = useState(false);
    //어드민
    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const {user} = useAuth();
    function changeToggle() {
        setToggle(!onToggle);
    }

    return (
        <div>
            <div>갤러리페이지는 무한 스크롤 방식으로 구현 할 예정입니다</div>
            <main>
                {/*검색창*/}
                <div className='mt-5 flex h-9 items-center justify-end space-x-5'>
                    <div className="flex">
                        {user && (
                            <button className='border p-1' onClick={changeToggle}>
                                {onToggle? "취소" : "추가"}
                            </button>
                        )}
                    </div>

                    <select className='h-full border pl-2 pr-7'>
                        <option>전체</option>
                        <option value='title '>제목</option>
                        <option value='content'>내용</option>
                    </select>

                    <input className='ml-6 h-full w-32 border' />
                    <MagnifyingGlassIcon className='h-full bg-PRIMARY_COLOR-500 p-1 text-white' />
                </div>

                {/* 게시물 추가 창 토글 */}
                {onToggle && (
                    <div className='flex flex-col h-80 bg-GRAY_COLOR-500 rounded-md mt-3'>
                        <div className="flex justify-center h-80 items-center space-x-2">
                            {/* 이미지 썸네일 */}
                            <div className='relative w-1/3 h-4/5 border-2 '>
                                <Image
                                    src=""
                                    alt="업로드된 사진 미리보기"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>

                            <div className='flex flex-col space-y-5 px-5'>
                                {/*이미지 파일 업로드*/}
                                <input
                                    placeholder='이미지 파일을 넣어주세요'
                                    onChange={(e)=>setImgUrl(e.target.value)}
                                    value={imgUrl}
                                    type='file'
                                    className='file:border file:rounded-[10px] file:bg-PRIMARY_COLOR-100'
                                />
                                {/* 제목 입력 */}
                                <input
                                    placeholder="게시물의 제목을 입력해주세요"
                                    onChange={(e)=>setTitle(e.target.value)}
                                    value={title}
                                    className='bg-GRAY_COLOR-200 w-80 text-black'

                                />
                            </div>
                        </div>

                        {/* 게시, 취소 버튼*/}
                        <div className='flex justify-end h-20 mr-4 pb-1 space-x-4'>
                            <button className='w-20 h-8 border-4 border-GRAY_COLOR-800 bg-PRIMARY_COLOR-100'>게시</button>
                            <button className='w-20 h-8 border-4 border-GRAY_COLOR-800'>취소</button>
                        </div>
                    </div>

                )}

                <div className=' my-5 grid grid-cols-1 items-center gap-y-16 gap-x-12 self-center md:grid-cols-2 xl:grid-cols-3'>
                    <GalleryCard
                        imgUrl=''
                        title='test1'
                        createdAt='2022-10-21'
                    />
                </div>
            </main>
        </div>
    );
}

export default Gallery;
