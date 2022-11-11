import React, {
    createContext,
    Dispatch,
    useLayoutEffect,
    useState,
} from "react";
import { Material, StudyMaterial, PaperMaterial } from "../../../typing";
import MaterialTableHeader from "./MaterialTableHeader";
import MaterialTableBody from "./MaterialTableBody";
import MaterialTableToggle from "./MaterialTableToggle";
import useFirebase from "../../hooks/useFirebase";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";
import useAuth from "../../hooks/useAuth";

interface Props<M> {
    material: Material;
}

interface MaterialTableContextProps<M> {
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    selectedMaterial: M | null;
    collectionRef: CollectionReference<M>;
    collectionQuery: UseQueryResult<QuerySnapshot<M>, FirestoreError>;
    selectedDocId: string | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
    setSelectedMaterial: Dispatch<React.SetStateAction<M | null>>;
    deleteDocument: (docID: string) => void;
    selectedIndex: number;
    setSelectedIndex: Dispatch<React.SetStateAction<number>>;
}

export const MaterialTableContext = createContext<
    MaterialTableContextProps<StudyMaterial | PaperMaterial>
>({} as MaterialTableContextProps<StudyMaterial | PaperMaterial>);


function MaterialTable<M extends StudyMaterial | PaperMaterial>({ material }: Props<M>) {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<StudyMaterial | PaperMaterial>(material, [material]);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState<
        StudyMaterial | PaperMaterial | null
    >(null);
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [materialList, setMaterialList] = useState<
        QueryDocumentSnapshot<StudyMaterial | PaperMaterial>[] | undefined
    >(collectionQuery.data?.docs);
    useLayoutEffect(() => {
        const newMaterialList = collectionQuery.data?.docs.filter(
            (docSnapshot) => docSnapshot.data().material === material
        );
        setMaterialList(newMaterialList);
    }, [collectionQuery.isSuccess]);

    const value = {
        isEditing,
        setIsEditing,
        selectedMaterial,
        collectionRef,
        collectionQuery,
        selectedDocId,
        setSelectedMaterial,
        setSelectedDocId,
        deleteDocument,
        selectedIndex,
        setSelectedIndex,
    };

    return (
        <MaterialTableContext.Provider value={value}>
            <table className='w-full table-auto border-t border-t-black'>
                <MaterialTableHeader material={material} />
                <MaterialTableBody
                    material={material}
                    materialList={materialList}
                />
            </table>
            {isEditing && <MaterialTableToggle material={material} />}
        </MaterialTableContext.Provider>
    );
}

export default MaterialTable;