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
                        className='border-b text-xs sm:text-sm md:text-base border-gray-200 hover:bg-gray-100'
                    >
                        <td className='py-3 text-center'>{index + 1}</td>
                        <td className='text-center'>
                            {data.title}
                        </td> 
                        <td className='text-center'>{data.writer}</td>
                        <td className='text-center'>
                            {data.date}
                            {user && (
                                <div className='absolute hidden md:flex right-2 gap-x-2 text-sm'>
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
