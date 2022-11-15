import React from 'react';
import Image from "next/image";
import useFirebase from "../../hooks/useFirebase";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

function ForumCard() {
    const ref = query(collection(db, "갤러리 데이터"), orderBy("createdAt", "desc"), limit(2));

    const collectionQuery = useFirestoreQuery(["gallery_createdAt"], ref);

    console.log(collectionQuery.data?.docs.map((snapshot) => {
        const data = snapshot.data()
        return data
    }))
    return (
        <div>
            hi
        </div>
    );
}

export default ForumCard;