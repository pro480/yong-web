import GalleryMain from "../../src/components/data/GalleryMain";
import React from "react";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Gallery(){
    return(
        <div>
            <HeadMeta title={"EBA | 갤러리"} description={"EBA센터 갤러리입니다"}/>
            <GalleryMain card='갤러리 게시물'/>
        </div>
    )
}

export default Gallery;