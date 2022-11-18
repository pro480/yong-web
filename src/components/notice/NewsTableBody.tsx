import React, { useContext, useEffect } from "react";
import { ImMail4, ImFileText2 } from "react-icons/im";
import { News, CenterNews, EventNews } from "../../../typing";
import { NewsTableContext } from "./NewsTable";
import useAuth from "../../hooks/useAuth";
import {
    NewsTableDeleteButton,
    NewsTableUpdateButton,
} from "./NewsTableButton";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import Link from "next/link";
import moment from "moment";

interface Props<N> {
    news: News;
    newsList: QueryDocumentSnapshot<CenterNews | EventNews>[] | undefined;
}

function NewsTableBody<N extends CenterNews | EventNews>({
    news,
    newsList,
}: Props<N>) {
    const { user } = useAuth();
    const { pageNumber } = useContext(NewsTableContext);
    const pageOffset = (Number(pageNumber) - 1) * 10;
    let No = pageOffset;

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {newsList
                ?.sort(
                    (a, b) =>
                        Number(b.data().createdAt) - Number(a.data().createdAt)
                )
                .slice(
                    (Number(pageNumber) - 1) * 10,
                    (Number(pageNumber) - 1) * 10 + 10
                )
                .map((docSnapshot, index) => {
                    const data = docSnapshot.data();
                    No = No + 1;
                    return (
                        <tr
                            key={docSnapshot.id}
                            className='border-b border-gray-200 text-xs hover:bg-gray-100 sm:text-sm'
                        >
                            <td className='text-center'>{No}</td>

                            <Link
                                href={{
                                    pathname: `/notice/${news}${No}`,
                                    query: {
                                        title: data.title,
                                        type: data.news,
                                        writer: data.writer,
                                        createdAt: moment(
                                            data.createdAt.slice(0, 8)
                                        ).format("YYYY-MM-DD"),
                                        fileUrl: data.fileUrl,
                                        content: data.content,
                                    },
                                }}

                                // as={`/notice/${news}${index + 1}`}
                            >
                                <td className='cursor-pointer text-center hover:scale-105'>
                                    {" "}
                                    <a className='font-bold'>{data.title}</a>
                                </td>
                            </Link>

                            <td className='text-center'>{data.writer}</td>
                            <td className='text-right'>
                                {data.createdAt.slice(0, 4)}-
                                {data.createdAt.slice(4, 6)}-
                                {data.createdAt.slice(6, 8)}
                            </td>
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
                                        <NewsTableUpdateButton
                                            data={data}
                                            docID={docSnapshot.id}
                                        />
                                        <NewsTableDeleteButton
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

export default NewsTableBody;
