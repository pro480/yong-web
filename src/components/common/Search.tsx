import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Search() {
    return (
        <div className='mt-5 flex h-9 items-center justify-end'>
            <select className='h-full border pl-2 pr-7'>
                <option>전체</option>
                <option value='title '>제목</option>
                <option value='content'>내용</option>
            </select>

            <input className='ml-6 h-full w-32 border' />
            <MagnifyingGlassIcon className='h-full bg-PRIMARY_COLOR-500 p-1 text-white' />
        </div>
    );
}

export default Search;
