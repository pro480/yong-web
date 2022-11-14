import React, { useContext, useEffect } from "react";
import { ImMail4, ImFileText2 } from "react-icons/im";
import { Material, PaperMaterial, StudyMaterial } from "../../../typing";
import { MaterialTableContext } from "./MaterialTable";
import useAuth from "../../hooks/useAuth";
import {
    MaterialTableDeleteButton,
    MaterialTableUpdateButton,
} from "./MaterialTableButton";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import MoreInfo from "./xStudyMaterialTooltips"; // using tooltips

interface Props<M> {
    material: Material;
    // materialList:
    //     | QueryDocumentSnapshot<StudyMaterial | PaperMaterial>[]
    //     | undefined;
}

function MaterialTableBody<M extends StudyMaterial | PaperMaterial>({
    material,
}: Props<M>) {
    const { user } = useAuth();
    const { materialList, pageNumber } = useContext(MaterialTableContext);

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {materialList
                ?.sort((a, b) => Number(b.data().date) - Number(a.data().date))
                .slice(
                    (Number(pageNumber) - 1) * 8,
                    (Number(pageNumber) - 1) * 8 + 8
                )
                .map((docSnapshot, index) => {
                    const data = docSnapshot.data();
                    const year = data.date.slice(0, 4);
                    const month = data.date.slice(4, 6);
                    const day = data.date.slice(6, 8);

                    return (
                        <tr
                            key={docSnapshot.id}
                            className='border-b border-gray-200 text-xs hover:bg-gray-100 sm:text-sm md:text-base'
                        >
                            <td className='py-3 text-center'>{index + 1}</td>
                            <td className='text-center'>{data.title}</td>
                            <td className='text-center'>{data.writer}</td>
                            <td className='text-center'>
                                {`${year}-${month}-${day}`}
                            </td>
                            <td className='relative flex items-center text-center'>
                                <div className='flex h-12 w-full items-center justify-center'>
                                    <a
                                        className='flex w-fit justify-center self-center hover:underline hover:underline-offset-2'
                                        href={data.fileUrl}
                                    >
                                        <ImFileText2
                                            className='ml-2'
                                            size={20}
                                        />
                                    </a>
                                </div>
                                {user && (
                                    <div className='absolute right-2 hidden gap-x-2 text-sm md:flex'>
                                        <MaterialTableUpdateButton
                                            index={index + 1}
                                            data={data}
                                            docID={docSnapshot.id}
                                        />
                                        <MaterialTableDeleteButton
                                            docID={docSnapshot.id}
                                        />
                                    </div>
                                )}
                            </td>
                        </tr>
                    );
                })}
        </tbody>
    );
}

export default MaterialTableBody;
