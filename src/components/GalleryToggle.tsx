import React, { useState } from "react";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

interface Inputs{
    name: string;
    title: string;
    imgUrl: File[];
    isBanner:boolean;
}


function GalleryToggle() {
    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const databaseRef = collection(db, "galleryDatas");
    const addData = () => {
        addDoc(databaseRef, {
            title: title,
            imgUrl: imgUrl,
        });
    };
    return (
        <div>
            <div className='mt-3 flex h-80 flex-col rounded-md bg-GRAY_COLOR-500'>
                <div className='flex h-80 items-center justify-center space-x-2'>
                    {/* 이미지 썸네일 */}
                    <div className='relative h-4/5 w-1/3 border-2 '>
                        <Image
                            src=''
                            alt='업로드된 사진 미리보기'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>

                    <div className='flex flex-col space-y-5 px-5'>
                        {/*이미지 파일 업로드*/}
                        <input
                            placeholder='이미지 파일을 넣어주세요'
                            onChange={(e) => setImgUrl(e.target.value)}
                            value={imgUrl}
                            type='file'
                            className='file:rounded-[10px] file:border file:bg-PRIMARY_COLOR-100'
                        />
                        {/* 제목 입력 */}
                        <label>
                            제목
                            <input
                                placeholder='게시물의 제목을 입력해주세요'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                type='text'
                                className='w-80 bg-GRAY_COLOR-200 text-black'
                            />
                        </label>

                    </div>
                </div>

                {/* 게시, 취소 버튼*/}
                <div className='mr-4 flex h-20 justify-end space-x-4 pb-1'>
                    <button
                        className='h-8 w-20 border-4 border-GRAY_COLOR-800 bg-PRIMARY_COLOR-100'
                        onClick={addData}
                    >
                        게시
                    </button>
                    <button className='h-8 w-20 border-4 border-GRAY_COLOR-800'>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GalleryToggle;
