import React from "react";
import { ImFileText2 } from "react-icons/im";
import { Material, PaperMaterial, StudyMaterial } from "../../../typing";
import useAuth from "../../hooks/useAuth";
import {
    MaterialTableDeleteButton,
    MaterialTableUpdateButton,
} from "./MaterialTableButton";
import { QueryDocumentSnapshot } from "@firebase/firestore";

// using tooltips

interface Props<M> {
    material: Material;
    materialList: QueryDocumentSnapshot<StudyMaterial | PaperMaterial>[] | undefined;
}

function MaterialTableBody<M extends StudyMaterial | PaperMaterial>({ material, materialList }: Props<M>) {
    const { user } = useAuth();

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {materialList?.map((docSnapshot, index) => {
                const data = docSnapshot.data();
                return (
                    <tr
                        key={docSnapshot.id}
                        className='border-b text-xs sm:text-sm md:text-base border-gray-200 hover:bg-gray-100'
                    >
                        <td className='py-3 text-center'>{index + 1}</td>
                        <td className='text-center'>
                            {data.title}
                        </td> 
                        <td className='text-center'>{data.writer}</td>
                        <td className='text-center'>{data.date.substring(0,10)}</td>
                        <td className='relative flex items-center text-center'>
                            <div className='flex h-12 w-full items-center justify-center'>
                                <a
                                    className='flex w-fit justify-center self-center hover:underline hover:underline-offset-2'
                                    href={data.fileUrl}
                                >
                                    <ImFileText2 className='ml-2' size={20} />
                                </a>
                            </div>
                            {user && (
                                <div className='absolute hidden md:flex right-2 gap-x-2 text-sm'>
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
