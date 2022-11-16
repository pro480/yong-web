import React from "react";
import { News, CenterNews, EventNews } from "../../../typing";
import useAuth from "../../hooks/useAuth";
import {
    NewsTableDeleteButton,
    NewsTableUpdateButton,
} from "./NewsTableButton";
import { QueryDocumentSnapshot } from "@firebase/firestore";
import Link from "next/link";

interface Props<N> {
    news: News;
    newsList: QueryDocumentSnapshot<CenterNews | EventNews>[] | undefined;
}

function NewsTableBody<N extends CenterNews | EventNews>({ news, newsList }: Props<N>) {
    const { user } = useAuth();

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {newsList?.map((docSnapshot, index) => {
                const data = docSnapshot.data();
                return (
                    <tr
                        key={docSnapshot.id}
                        className='border-b text-xs sm:text-sm border-gray-200 hover:bg-gray-100'
                    >
                        <td className='text-center'>{index + 1}</td>
                        <td className='text-center cursor-pointer hover:scale-105'>
                            <Link 
                                href={{
                                    pathname: `/notice/${news}${index+1}`,
                                    query: {
                                        title: data.title,
                                        type: data.news,
                                        writer: data.writer,
                                        createAt: data.date.substring(0,10),
                                        fileUrl: data.fileUrl,
                                        content: data.content,
                                    },
                                }}
                                // as로 바뀌면서 새로고침하는 경우 쿼리 값이 사라지는 현상 => ssr?
                                as={`/notice/${news}${index+1}`}
                            >
                                <a className="font-bold">{data.title}</a>
                            </Link>                
                        </td> 
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
                                    <NewsTableUpdateButton
                                        index={index + 1}
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
