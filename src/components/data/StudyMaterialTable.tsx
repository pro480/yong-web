import React, {
    createContext,
    Dispatch,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";
import { Material, StudyMaterial } from "../../../typing";
import StudyMaterialTableHeader from "./StudyMaterialTableHeader";
import StudyMaterialTableBody from "./StudyMaterialTableBody";
import StudyMaterialTableToggle from "./StudyMaterialTableToggle";
import useFirebase from "../../hooks/useFirebase";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from "@firebase/firestore";

interface Props {
    material: Material;
}

interface StudyMaterialTableContextProps {
    isEditing: boolean;
    setIsEditing: Dispatch<React.SetStateAction<boolean>>;
    setSelectedMaterial: Dispatch<React.SetStateAction<StudyMaterial | null>>;
    collectionQuery: UseQueryResult<
        QuerySnapshot<StudyMaterial>,
        FirestoreError
    >;
    selectedMaterial: StudyMaterial | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
    selectedDocId: string | null;
    collectionRef: CollectionReference<StudyMaterial>;
    deleteDocument: (docID: string) => void;
    selectedIndex: number;
    setSelectedIndex: Dispatch<React.SetStateAction<number>>;
}

export const StudyMaterialTableContext = createContext({} as StudyMaterialTableContextProps);

function StudyMaterialTable({ material }: Props) {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<StudyMaterial>("studyMaterial", ["studyMaterial"]);
    const [selectedMaterial, setSelectedMaterial] = useState<StudyMaterial | null>(
        null
    );
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [materialList, setMaterialList] = useState<
        QueryDocumentSnapshot<StudyMaterial>[] | undefined
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
        setSelectedMaterial,
        collectionQuery,
        collectionRef,
        deleteDocument,
        selectedDocId,
        setSelectedDocId,
        selectedIndex,
        setSelectedIndex,
    };

    if (collectionQuery.isLoading) {
        return <>로딩</>;
    }

    return (
        <StudyMaterialTableContext.Provider value={value}>
            <table className='w-full table-auto border-t border-t-black'>
                <StudyMaterialTableHeader material={material} />
                <StudyMaterialTableBody
                    material={material}
                    materialList={materialList}
                />
            </table>
            {isEditing && <StudyMaterialTableToggle material={material} />}
        </StudyMaterialTableContext.Provider>
    );
}

export default StudyMaterialTable;
