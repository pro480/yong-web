import React, { useContext, useEffect } from "react";
import { ImMail4, ImFileText2 } from "react-icons/im";
import { Material, StudyMaterial } from "../../../typing";
import { StudyMaterialTableContext } from "./StudyMaterialTable";
import useAuth from "../../hooks/useAuth";
import {
    MaterialTableDeleteButton,
    MaterialTableUpdateButton,
} from "./StudyMaterialTableButton";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import MoreInfo from "./StudyMaterialTooltips"; // using tooltips

interface Props {
    material: Material;
    materialList: QueryDocumentSnapshot<StudyMaterial>[] | undefined;
}

function MaterialTableBody({ material, materialList }: Props) {
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
                        {/* {material === "학습 자료"} */}
                        <td className='py-3 text-center'>{index + 1}</td>
                        <td className='text-center'>
                            {/* Tooltips - info */}
                            {data.title}
                            {/* <MoreInfo
                                title={data.title}
                                content="툴팁 박스 형태로 구현할 예정입니다."
                            /> */}
                        </td> 
                        <td className='text-center'>{data.writer}</td>
                        <td className='text-center'>{data.date}</td>
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
