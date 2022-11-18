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
import moment from "moment";

interface Props<M> {
    material: Material;
    materialList:
        | QueryDocumentSnapshot<StudyMaterial | PaperMaterial>[]
        | undefined;
}

function MaterialTableBody<M extends StudyMaterial | PaperMaterial>({
    material,
    materialList,
}: Props<M>) {
    const { user } = useAuth();
    const { pageNumber } = useContext(MaterialTableContext);
    const pageOffset = (Number(pageNumber) - 1) * 10;
    let No = pageOffset;

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {materialList
                ?.sort(
                    (a, b) =>
                        Number(b.data().createdAt) - Number(a.data().createdAt)
                )
                .slice(
                    (Number(pageNumber) - 1) * 10,
                    (Number(pageNumber) - 1) * 10 + 10
                )
                .map((docSnapshot) => {
                    const data = docSnapshot.data();
                    const year = data.createdAt.slice(0, 4);
                    const month = data.createdAt.slice(4, 6);
                    const day = data.createdAt.slice(6, 8);
                    No = No + 1;
                    return (
                        <tr
                            key={docSnapshot.id}
                            className='border-b border-gray-200 text-xs hover:bg-gray-100 sm:text-sm'
                        >
                            <td className='text-center'>{No}</td>

                            {data.content ==
                            "작성할 내용이 있다면 작성해주세요. 없다면 바로 제출해주세요." ? (
                                <td className='text-center'>{data.title}</td>
                            ) : (
                                <Link
                                    href={{
                                        pathname: `/notice/${material}${No}`,
                                        query: {
                                            title: data.title,
                                            type: data.material,
                                            writer: data.writer,
                                            createdAt: moment(
                                                data.createdAt.slice(0, 8)
                                            ).format("YYYY-MM-DD"),
                                            fileUrl: data.fileUrl,
                                            content: data.content,
                                        },
                                    }}
                                    as={`/notice/${material}${No}`}
                                >
                                    <td className='cursor-pointer text-center hover:scale-105'>
                                        <a className='font-bold'>
                                            {data.title}
                                        </a>
                                    </td>
                                </Link>
                            )}

                            <td className='text-center'>{data.writer}</td>
                            <td className='text-right'>{`${year}-${month}-${day}`}</td>
                            <td className='relative flex items-center text-center'>
                                <div className='flex h-12 w-full items-center justify-center'>
                                    <a
                                        className='flex hover:underline hover:underline-offset-2'
                                        href={data.fileUrl}
                                    >
                                        {data.fileUrl == "empty" ? (
                                            <></>
                                        ) : (
                                            <ImFileText2
                                                className='ml-2 cursor-pointer hover:scale-110'
                                                size={20}
                                            />
                                        )}
                                    </a>
                                </div>
                                {user && (
                                    <div className='w-15 absolute right-2 hidden text-sm lg:flex'>
                                        <MaterialTableUpdateButton
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
