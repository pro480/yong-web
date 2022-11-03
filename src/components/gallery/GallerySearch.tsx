import React from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

function GallerySearch() {
    return (
        <div>
            <div className='flex h-9 space-x-5 justify-center items-center'>
                <select className='h-full border pl-2 pr-7'>
                    <option>전체</option>
                    <option value='title '>제목</option>
                    <option value='content'>내용</option>
                </select>

                <input className='ml-6 h-full w-32 border' />
                <MagnifyingGlassIcon className='h-full bg-PRIMARY_COLOR-500 p-1 text-white' />
            </div>
        </div>
    );
}

export default GallerySearch;