import React from "react";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function ThesisRow(items: any) {
    return (
        <React.Fragment>
            <tr
                key={items.key}
                className='border-b border-gray-200 hover:bg-gray-100'
            >
                <td className='py-4 text-center'>{items.number}</td>
                <td className='px-12 text-left'>{items.title}</td>
                <td className='text-center'>{items.writer}</td>
                <td className='text-center'>{items.createAt}</td>
                <td>
                    <LinkIcon className='mx-auto h-6 w-6' />
                </td>
            </tr>
        </React.Fragment>
    );
}
