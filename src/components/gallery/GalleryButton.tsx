import React, { useContext } from "react";
import { GalleryBoardContext } from "./GalleryBoard";
import { GalleryPost } from "../../../typing";

function GalleryAddButton() {
    const { toggleOpen, setToggleOpen } = useContext(GalleryBoardContext);

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

function GalleryUpdateButton({ docId, data }: { data:GalleryPost, docId: string }) {
    const { setSelectedPost, setSelectedDocId, setToggleOpen } = useContext(GalleryBoardContext);
    return (
        <div>
            <button
                className='border-t border-black font-light'
                onClick={() => {
                    setSelectedPost(data);
                    setSelectedDocId(docId);
                    setToggleOpen(true);
                }}
            >
                수정
            </button>
        </div>
    );
}

function GalleryDeleteButton({ docId }: { docId: string }) {
    const { deleteDocument } = useContext(GalleryBoardContext);
    return (
        <div>
            <button
                className='border-t border-black font-light'
                onClick={() => deleteDocument(docId)}
            >
                삭제
            </button>
        </div>
    );
}

function GalleryCancelButton() {
    const { setToggleOpen } = useContext(GalleryBoardContext);
    return (
        <button
            className='border-t border-black font-light'
            onClick={() => {
                setToggleOpen(false);
            }}
        >
            취소
        </button>
    );
}

export {
    GalleryAddButton,
    GalleryUpdateButton,
    GalleryDeleteButton,
    GalleryCancelButton,
};
