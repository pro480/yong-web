import React from "react";
import { MaterialTableAddButton } from "./StudyMaterialTableButton";
import { Material } from "../../../typing";
import useAuth from "../../hooks/useAuth";

interface Props {
    material: Material;
}

function StudyMaterialTableHeader({ material }: Props) {
    const { user } = useAuth();
    return (
        <thead>
            <tr className='bg-PRIMARY_COLOR-500/40 h-12 text-sm uppercase leading-normal text-gray-600'>
                {material === "학습 자료"}
                <th className='w-[5%] text-center'>NO</th>
                <th className='w-[30%] text-center'>제목</th>
                <th className='w-[15%] text-center'>작성자</th>
                <th className='w-[15%] text-center'>등록일</th>
                <th className='relative w-[25%]'>
                    첨부파일
                    {user && <MaterialTableAddButton />}
                </th>
            </tr>
        </thead>
    );
}

export default StudyMaterialTableHeader;
