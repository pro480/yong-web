import React, { useContext } from "react";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import { Card, GalleryCard } from "../../../typing";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import { GalleryDeleteButton, GalleryUpdateButton } from "./GalleryButton";
import { GalleryContext } from "./GalleryMain";

interface Props {
    card: Card;
    galleryList: QueryDocumentSnapshot<GalleryCard>[] | undefined;
}

function GalleryCardGrid({ card, galleryList }: Props) {
    const { user } = useAuth();
    const { pageNumber } = useContext(GalleryContext);
    return (
        <div>
            <main className='grid grid-cols-1 items-center gap-y-16 gap-x-14 self-center md:grid-cols-2 xl:grid-cols-3'>
                {galleryList
                    ?.sort(
                        (a, b) =>
                            Number(b.data().createdAt) -
                            Number(a.data().createdAt)
                    )
                    // 한 페이지당 원하는 자료 수 만큼 자르기
                    .slice(
                        (Number(pageNumber) - 1) * 9,
                        (Number(pageNumber) - 1) * 9 + 9
                    )
                    .map((docSnapshot, createdAt) => {
                        const data = docSnapshot.data();
                        const year = data.createdAt.slice(0, 4);
                        const month = data.createdAt.slice(4, 6);
                        const day = data.createdAt.slice(6, 8);
                        return (
                            <div
                                key={docSnapshot.id}
                                className='mx-auto flex h-64 w-80 flex-col items-center justify-end lg:h-72 lg:w-80'
                            >
                                {/*게시물 이미지*/}
                                <div className='relative h-[70%] w-full'>
                                    <Image
                                        src={data.imgUrl}
                                        alt='게시물 이미지'
                                        layout='fill'
                                        objectFit='contain'
                                        priority={true}
                                    />
                                </div>

                                <div className='flex flex-col '>
                                    {/*제목*/}
                                    <div className='text-center font-bold'>
                                        {data.title}
                                    </div>
                                    {/*작성날짜*/}
                                    <div className='text-center'>
                                        {`${year}-${month}-${day}`}
                                    </div>
                                    {user && (
                                        <div className='mt-5 flex space-x-5'>
                                            <GalleryUpdateButton
                                                data={data}
                                                docID={docSnapshot.id}
                                            />
                                            <GalleryDeleteButton
                                                docID={docSnapshot.id}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
            </main>
        </div>
    );
}

export default GalleryCardGrid;
