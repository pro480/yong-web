import React, { useState } from "react";
import GalleryCard from "../../src/components/GalleryCard";
import useAuth from "../../src/hooks/useAuth";
import GalleryToggle from "../../src/components/GalleryToggle";
import {GalleryProps} from "../../typing";
import {collection} from "@firebase/firestore";
import {db} from "../../firebase"
import {useFirestoreQuery} from "@react-query-firebase/firestore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import galleryPostConverter from "../utils/firebase/galleryPostConverter"


function Gallery() {
    const [onToggle, setToggleOpen] = useState(false);
    const { user } = useAuth();
    const galleryDatasRef = collection(db,"galleryDatas").withConverter<GalleryProps>(galleryPostConverter);
    const galleryDatasQuery = useFirestoreQuery<GalleryProps>(
        ["galleryDatas"],
        galleryDatasRef,
        {subscribe: true}
    )

    const gallerypostSnapshot = galleryDatasQuery.data;

    // @ts-ignore
    return (
        <div>
            <main>
                {/*검색창*/}
                <div className='mt-5 flex h-9 items-center justify-end space-x-5'>
                    <div className='flex'>
                        {user && (
                            <button
                                className='border p-1'
                                onClick={() => {
                                    setToggleOpen((prev) => !prev);
                                }}
                            >
                                {onToggle ? "취소" : "추가"}
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
                {onToggle &&
                    <GalleryToggle
                        galleryRef={galleryDatasRef}
                        setToggleOpen={setToggleOpen}/>}

                <div className=' my-5 grid grid-cols-1 items-center gap-y-16 gap-x-12 self-center md:grid-cols-2 xl:grid-cols-3'>
                    <GalleryCard
                        imgUrl={''}
                        title='test1'
                        createdAt='2022-10-21'
                        isBanner={false}
                    />
                </div>
            </main>
        </div>
    );
}

export default Gallery;
