import React from "react";
import Image from "next/image";
import { GalleryDeleteButton, GalleryUpdateButton } from "./GalleryButton";
import { GalleryPost } from "../../../typing";
import useAuth from "../../hooks/useAuth";

interface Props<T> {
    docId: string;
    isEditable: boolean;
    data: T;
}

function GalleryCard<T extends GalleryPost>({
    isEditable,
    docId,
    data,
}: Props<T>) {
    const{user} = useAuth();

    return (
        <div>
            <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
                <div className=' relative flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                    <Image
                        src={data.imgUrl}
                        alt='게시물 이미지'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='my-2 flex h-[120px] flex-col items-center justify-around'>
                    <div className='text-lg'>{data.title}</div>
                    <div className='text-sm text-GRAY_COLOR-500'>
                        {data.createdAt}
                    </div>
                    {isEditable && user && (
                        <div>
                            <GalleryUpdateButton
                                data={data}
                                docId={docId}
                            />

                            <GalleryDeleteButton docId={docId} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GalleryCard;
