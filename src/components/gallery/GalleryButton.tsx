import React, {useContext} from 'react';
import {GalleryContext} from "../../../pages/data/gallery";
import {GalleryPost} from "../../../typing";

function GalleryAddButton() {
    const {toggleOpen, setToggleOpen} = useContext(GalleryContext);

    return (
        <div>
            <button
                className='h-fit border p-1'
                onClick={() => {
                    setToggleOpen((prev) => !prev);
                }}
            >
                {toggleOpen ? "취소" : "추가"}
            </button>
        </div>
    );
}


function GalleryUpdateButton<T extends GalleryPost>(
    {
      post,
      documentId,
    }:{
        post: T;
        documentId:string|null;
    }
){
    const { setSelectedPost ,setSelectedDocId, setToggleOpen} = useContext(GalleryContext);
    return(
        <div>
            <button
                className='font-light border-t border-black'
                onClick={()=>{
                    setSelectedPost(post);
                    setSelectedDocId(documentId);
                    setToggleOpen(true);
                }}
            >
                수정
            </button>
        </div>
    )

}

function GalleryDeleteButton({ documentId }: { documentId: string }){
    const {deleteDocument} = useContext(GalleryContext);
    return(
        <div>
            <button
                className='font-light border-t border-black'
                onClick={()=> deleteDocument(documentId)}
            >
                삭제
            </button>
        </div>

    )
}

export {
    GalleryAddButton,
    GalleryUpdateButton,
    GalleryDeleteButton
};