import React, { useContext } from "react";
import { ImFileText2 } from "react-icons/im";
import { Thesis } from "../../../typing";
import useAuth from "../../hooks/useAuth";
import {
    MaterialTableDeleteButton,
    MaterialTableUpdateButton,
} from "./MaterialTableButton";
import { ThesisContext } from "./ThesisTable";
import {
    ThesisTableDeleteButton,
    ThesisTableUpdateButton,
} from "./ThesisButton";

export default function ThesisTableBody() {
    const { user } = useAuth();
    const { pageNumber, thesisList } = useContext(ThesisContext);
    const pageOffset = (Number(pageNumber) - 1) * 5;
    let No = pageOffset;

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {thesisList
                ?.sort(
                    (a, b) =>
                        Number(b.data().createdAt) - Number(a.data().createdAt)
                )
                .slice(
                    (Number(pageNumber) - 1) * 5,
                    (Number(pageNumber) - 1) * 5 + 5
                )
                .map((docSnapshot) => {
                    const data = docSnapshot.data();
                    No = No + 1;

                    return (
                        <tr
                            key={docSnapshot.id}
                            className='border-b border-gray-200 text-xs hover:bg-gray-100 sm:text-sm'
                        >
                            <td className=' text-center'>{No}</td>
                            <td className='pl-3 text-left'>{data.title}</td>
                            <td className='pl-2 text-center'>{data.type}</td>
                            <td className='text-center'>{data.researcher}</td>
                            <td className='relative flex items-center text-center'>
                                <div className='flex h-12 w-full items-center justify-center'>
                                    {data.year}
                                </div>
                                {user && (
                                    <div className='w-15 absolute right-2 hidden text-sm lg:flex'>
                                        <ThesisTableUpdateButton
                                            data={data}
                                            docId={docSnapshot.id}
                                        />

                                        <ThesisTableDeleteButton
                                            docId={docSnapshot.id}
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
