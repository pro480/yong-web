import React from "react";
import { MaterialTableAddButton } from "./MaterialTableButton";
import useAuth from "../../hooks/useAuth";
import { ThesisTableAddButton } from "./ThesisButton";

export default function ThesisTableHeader() {
    const { user } = useAuth();

    return (
        <thead>
            <tr className='h-12 bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                <th className='w-[5%]  text-center'>NO</th>
                <th className='w-[45%] text-center'>제목</th>
                <th className='w-[20%] text-center'>학회지</th>
                <th className='w-[15%] text-center'>연구자</th>
                <th className='relative'>
                    <span>발행년도</span>
                    {user && <ThesisTableAddButton />}
                </th>
            </tr>
        </thead>
    );
}
