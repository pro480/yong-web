import React, { useContext, useEffect } from "react";
import { ImMail4 } from "react-icons/im";
import { ExternalMember, Organization } from "../../../typing";
import { MemberTableContext } from "./MemberTable";
import useAuth from "../../hooks/useAuth";
import {
    MemberTableDeleteButton,
    MemberTableUpdateButton,
} from "./MemberTableButton";
import { QueryDocumentSnapshot } from "@firebase/firestore";

interface Props {
    organization: Organization;
    memberList: QueryDocumentSnapshot<ExternalMember>[] | undefined;
}

function MemberTableBody({ organization, memberList }: Props) {
    const { user } = useAuth();

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {memberList?.map((docSnapshot, index) => {
                const data = docSnapshot.data();
                return (
                    <tr
                        key={docSnapshot.id}
                        className='border-b border-gray-200 hover:bg-gray-100'
                    >
                        {organization === "연구 자문단" && (
                            <td className='text-center'>{data.division}</td>
                        )}
                        <td className='py-3 text-center'>{index + 1}</td>
                        <td className='text-center'>{data.name}</td>
                        <td className='text-center'>{data.department}</td>
                        <td className='relative flex items-center text-center'>
                            <div className='flex h-12 w-full items-center justify-center'>
                                <a
                                    className='flex w-fit justify-center self-center hover:underline hover:underline-offset-2'
                                    href={`mailto:${data.email}`}
                                >
                                    <div>{data.email}</div>
                                    <ImMail4 className='ml-2' size={20} />
                                </a>
                            </div>
                            {user && (
                                <div className='absolute right-2 flex gap-x-2 text-sm'>
                                    <MemberTableUpdateButton
                                        index={index + 1}
                                        data={data}
                                        docID={docSnapshot.id}
                                    />
                                    <MemberTableDeleteButton
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

export default MemberTableBody;
