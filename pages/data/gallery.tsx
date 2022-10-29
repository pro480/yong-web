import React, { createContext, Dispatch, useState } from "react";
import GalleryBoard from "../../src/components/gallery/GalleryBoard";

function Gallery() {


    const gallerypostSnapshot = galleryDatasQuery.data;

    return (
        <div>
            <GalleryBoard/>
        </div>
    );
}

export default Gallery;
