import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function QnaRow(items: any) {
    console.log(items);
    const createAt = items.createAt.slice(0, 10);

    return (
        <React.Fragment>
            <tr key={1} className='border-b border-gray-200 hover:bg-gray-100'>
                <td className='bold text-center font-bold text-red-400'>
                    {items.isAnswered ? "답변 완료" : ""}
                </td>
                <td className='text-l cursor-pointer px-12 py-4 font-semibold'>
                    <Link
                        href={{
                            pathname: "/notice/qnaView",
                            query: { id: items.doc },
                        }}
                    >
                        {items.title}
                    </Link>
                </td>
                <td className='text-center'>{items.writer}</td>
                <td className='text-center'>{createAt}</td>
                <td>
                    <DocumentTextIcon
                        className='mx-auto h-8 w-8 cursor-pointer'
                        href={items.fileUrl}
                    />
                </td>
            </tr>
        </React.Fragment>
    );
}
