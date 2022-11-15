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
import { MaterialPageButton } from "./MaterialTableButton";

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

    pageNumber: number | null;
    setPageNumber: Dispatch<React.SetStateAction<number | null>>;
    materialList:
        | QueryDocumentSnapshot<StudyMaterial | PaperMaterial>[]
        | undefined;
}

export const MaterialTableContext = createContext<
    MaterialTableContextProps<StudyMaterial | PaperMaterial>
>({} as MaterialTableContextProps<StudyMaterial | PaperMaterial>);

function MaterialTable<M extends StudyMaterial | PaperMaterial>({
    material,
}: Props<M>) {
    const { collectionRef, collectionQuery, deleteDocument } = useFirebase<
        StudyMaterial | PaperMaterial
    >(material, [material]);
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

    const [pageNumber, setPageNumber] = useState<number | null>(1);

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

        materialList,
        pageNumber,
        setPageNumber,
    };

    return (
        <MaterialTableContext.Provider value={value}>
            {/* 전체 몇건 */}
            <h1 className='pb-5 pt-4 text-sm md:text-base'>
                전체{" "}
                <span className='ml-3 text-lg font-bold text-PRIMARY_COLOR-500 md:text-2xl'>
                    {materialList?.length}
                </span>{" "}
                건
            </h1>
            <table className='w-full table-auto border-t border-t-black'>
                <MaterialTableHeader material={material} />
                <MaterialTableBody
                    material={material}
                    materialList={materialList}
                />
            </table>
            {isEditing && <MaterialTableToggle material={material} />}
            <MaterialPageButton />
        </MaterialTableContext.Provider>
    );
}

export default MaterialTable;
