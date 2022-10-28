import React, {useState} from "react";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import {GalleryPost} from "../../../typing";
import {GalleryUpdateButton, GalleryDeleteButton} from "./GalleryButton";

interface Props<T>{
    post: T;
    documentId : string;
    isEditable: boolean;
}


function GalleryCard <T extends GalleryPost>({ post, documentId,isEditable } : Props<T>) {
    const {user} = useAuth();

    return (
        <div className='flex h-[350px] w-[350px] flex-col justify-between border-4 border-white hover:border-4 hover:border-PRIMARY_COLOR-500'>
            <div className=' relative flex h-[216px] items-center justify-center bg-GRAY_COLOR-500'>
                <Image
                    src={post.imgUrl}
                    alt='게시물 이미지'
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <div className='my-2 flex h-[120px] flex-col items-center justify-around'>
                <div className='text-lg'>{post.title}</div>
                <div className='text-sm text-GRAY_COLOR-500'>{post.createdAt}</div>
                { isEditable && user && (
                    <div>
                        <GalleryUpdateButton
                            post={post}
                            documentId={documentId}
                        />

                        <GalleryDeleteButton
                            documentId={documentId}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default GalleryCard;
