import React, {useState} from "react";
import Image from "next/image";
import useAuth from "../hooks/useAuth";
import {GalleryProps} from "../../typing";


function GalleryCard({ imgUrl, title, createdAt, isBanner }: GalleryProps) {
    const {user} = useAuth();
    const [isModified, setModify] = useState(false)
    function changeMod() {
        setModify(!isModified)
    }
    return (
        <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
            <div className=' relative flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                <Image
                    src={imgUrl}
                    alt='갤러리 이미지'
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <div className='my-2 flex h-[120px] flex-col items-center justify-around'>
                <div className='text-lg'>{title}</div>
                <div className='text-sm text-GRAY_COLOR-500'>{createdAt}</div>
                {user && (
                    <button
                        className='font-light border-t border-black'
                        onClick={changeMod}
                    >
                        수정
                    </button>
                )}
            </div>
        </div>
    );
}

export default GalleryCard;
