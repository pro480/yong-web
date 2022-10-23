import {
    collection,
    CollectionReference,
    deleteDoc,
    doc,
    DocumentData,
    DocumentReference,
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import { db, storage } from "../../firebase";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentDeletion,
    useFirestoreQuery,
} from "@react-query-firebase/firestore";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

interface InputProps {
    imageFile: File[];
}

export default function useFirebase<T>(path: string, queryKey: string[]) {
    const converter = {
        toFirestore(data: WithFieldValue<T>): DocumentData {
            return data as DocumentData;
        },
        fromFirestore: (
            snap: QueryDocumentSnapshot,
            options: SnapshotOptions
        ) => snap.data(options) as T,
    };

    const collectionRef = collection(db, path).withConverter<T>(converter);

    const collectionQuery = useFirestoreQuery<T>([...queryKey], collectionRef, {
        subscribe: true,
    });

    const deleteDocument = (docID: string) => {
        const docRef = doc(db, path, docID);
        deleteDoc(docRef)
            .then(() => {
                console.log("문서 삭제!");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const addDocument = (inputs: any) => {
        const addMutation = useFirestoreCollectionMutation(collectionRef);
        return addMutation.mutate(inputs);
    };

    return { converter, collectionRef, collectionQuery, deleteDocument };
}
