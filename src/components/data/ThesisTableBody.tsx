import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import Link from "next/link";
import { ThesisTableContext } from "./ThesisTable";
import moment from "moment";
import { ThesisDeleteButton, ThesisUpdateButton } from "./ThesisButton";

export default function ThesisTableBody() {
    const { user } = useAuth();
    const { pageNumber, thesisList } = useContext(ThesisTableContext);
    const pageOffset = (Number(pageNumber) - 1) * 10;
    let No = pageOffset;

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {thesisList
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
                    No = No + 1;
                    return (
                        <tr
                            key={docSnapshot.id}
                            className='border-b border-gray-200 text-xs text-[11px] hover:bg-gray-100 sm:text-sm'
                        >
                            <td className='text-center'>{No}</td>
                            <td className='cursor-pointer py-3 px-2 text-left hover:scale-105 '>
                                <Link
                                    href={{
                                        pathname: `/data/${"thesis"}${No}`,
                                        query: {
                                            title: data.title,
                                            type: data.type,
                                            researcher: data.researcher,
                                            createdAt: moment(
                                                data.createdAt.slice(0, 8)
                                            ).format("YYYY-MM-DD"),
                                            year: data.year,
                                            writer: data.writer,
                                        },
                                    }}
                                    // as로 바뀌면서 새로고침하는 경우 쿼리 값이 사라지는 현상 => ssr?
                                    as={`/data/${"thesis"}${No}`}
                                >
                                    <a className='font-bold'>{data.title}</a>
                                </Link>
                            </td>
                            <td className='text-center'>{data.writer}</td>
                            <td className='text-center'>
                                <div>
                                    {data.createdAt.slice(0, 4)}-
                                    {data.createdAt.slice(4, 6)}-
                                    {data.createdAt.slice(6, 8)}
                                </div>
                            </td>
                            {user && (
                                <td className='flex items-center text-center'>
                                    <ThesisUpdateButton
                                        data={data}
                                        docId={docSnapshot.id}
                                    />
                                    <ThesisDeleteButton
                                        docId={docSnapshot.id}
                                    />
                                </td>
                            )}
                        </tr>
                    );
                })}
        </tbody>
    );
}
