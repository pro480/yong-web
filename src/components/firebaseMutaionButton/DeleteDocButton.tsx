import React from "react";
import {
    CollectionReference,
    doc,
} from "@firebase/firestore";
import { useFirestoreDocumentDeletion } from "@react-query-firebase/firestore";

interface Props {
    collectionRef: CollectionReference;
    docID: string;
}
function DeleteDocButton({ collectionRef, docID }: Props) {
    const ref = doc(collectionRef, `${docID}`);
    const deleteMutation = useFirestoreDocumentDeletion(ref);
    return <button onClick={() => deleteMutation.mutate()}>삭제</button>;
}

export default DeleteDocButton;
