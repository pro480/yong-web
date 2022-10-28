import React, {useContext} from 'react';
import useAuth from "../../hooks/useAuth";
import {GalleryAddButton} from "./GalleryButton";
import {GalleryBoardContext} from "./GalleryBoard";
import GallerySearch from "./GallerySearch";

function GalleryHeader() {
    const {user} = useAuth()
    const {setIsEditing} = useContext(GalleryBoardContext);
    return (
        <div>
            <div>
                {/* 게시물 추가 버튼 */}
                {user && <GalleryAddButton/>}
                {/*검색창*/}
                <GallerySearch />
            </div>
        </div>
    );
}

export default GalleryHeader;