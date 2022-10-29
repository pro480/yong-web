import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
import {GalleryPost} from "../../../typing";
import {QueryDocumentSnapshot} from "@firebase/firestore";
import GalleryCard from "./GalleryCard";


interface Props{
    postList: QueryDocumentSnapshot<GalleryPost>[]|undefined;
}

function GalleryBody ({postList}:Props) {
    const {user} = useAuth();

    return (
        <div>
            {postList?.map((docSnapshot)=>{
                const data = docSnapshot.data();
                return(
                    <div
                        key={docSnapshot.id}
                    >
                        <GalleryCard
                            isEditable={true}
                            docId={docSnapshot.id}
                            data={data}
                        />
                    </div>
                )
            })}
        </div>

    );
}

export default GalleryBody;
