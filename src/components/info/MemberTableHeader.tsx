import React from "react";
import { MemberTableAddButton } from "./MemberTableButton";
import { Organization } from "../../../typing";
import useAuth from "../../hooks/useAuth";

interface Props {
    organization: Organization;
}

function MemberTableHeader({ organization }: Props) {
    const { user } = useAuth();
    return (
        <thead>
            <tr className='bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                {organization === "연구 자문단" && (
                    <th className='w-[10%] text-center'>구분</th>
                )}
                <th className='w-[5%] px-1 py-3 text-center xs:px-6'>NO</th>
                <th className='w-[20%] text-center'>성명</th>
                <th className='w-[55%] text-center xs:w-[30%]'>소속</th>
                <th className=' invisible absolute xs:visible xs:relative xs:h-12 xs:w-[35%]'>
                    이메일
                    {user && <MemberTableAddButton />}
                </th>
            </tr>
        </thead>
    );
}

export default MemberTableHeader;
