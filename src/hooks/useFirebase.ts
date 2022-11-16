import {
    collection,
    deleteDoc,
    doc,
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import { db } from "../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

export default function useFirebase<T>(
    path: string,
    queryKey: (string | boolean)[]
) {
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

    return { converter, collectionRef, collectionQuery, deleteDocument };
}
