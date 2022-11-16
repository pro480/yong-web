import React, { useContext, useEffect } from "react";
import { ImMail4, ImFileText2, ImFilePlay } from "react-icons/im";
import { Material, PaperMaterial, StudyMaterial } from "../../../typing";
import { MaterialTableContext } from "./MaterialTable";
import useAuth from "../../hooks/useAuth";
import {
    MaterialTableDeleteButton,
    MaterialTableUpdateButton,
} from "./MaterialTableButton";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import MoreInfo from "./xStudyMaterialTooltips"; // using tooltips
import Link from "next/link";
import { IconBase } from "react-icons";

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
                        className='border-b text-xs sm:text-sm border-gray-200 hover:bg-gray-100'
                    >
                        <td className='text-center'>{index + 1}</td>

                        {data.content == "작성할 내용이 있다면 작성해주세요. 없다면 바로 제출해주세요."? (
                            <td className="text-center">{data.title}</td>
                        ) : (
                            <td className="text-center cursor-pointer hover:scale-105">
                                <Link 
                                    href={{
                                        pathname: `/notice/${material}${index+1}`,
                                        query: {
                                            title: data.title,
                                            type: data.material,
                                            writer: data.writer,
                                            createAt: data.date.substring(0,10),
                                            fileUrl: data.fileUrl,
                                            content: data.content,
                                        },
                                    
                                    }}
                                    as={`/notice/${material}${index+1}`}
                                >
                                    <a className="font-bold">{data.title}</a>
                                </Link>   
                            </td>
                        )}
                        
                                         
                       
                        <td className='text-center'>{data.writer}</td>
                        <td className='text-right'>{data.date.substring(0,10)}</td>
                        <td className='relative flex items-center text-center'>
                            <div className='flex h-12 w-full items-center justify-center'>
                                <a
                                    className='flex hover:underline hover:underline-offset-2'
                                    href={data.fileUrl}
                                >
                                    <ImFileText2 className='ml-2' size={20} />
                                </a>
                            </div>
                            {user && (
                                <div className='absolute w-15 hidden lg:flex right-2 text-sm'>
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
