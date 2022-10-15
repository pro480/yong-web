import React, { useState } from "react";
import { collection } from "@firebase/firestore";
import { db } from "../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { ImMail4 } from "react-icons/im";
import { ExternalMember, Organization } from "../../typing";
import externalMemberConverter from "../utils/firebase/externalMemberConverter";
import useAuth from "../hooks/useAuth";
import DeleteDocButton from "./firebaseMutaionButton/DeleteDocButton";
import MemberTableModal from "./MemberTableModal";

interface Props {
    organization: Organization;
}

function MemberTable({ organization }: Props) {
    const { user } = useAuth();
    const [selectedMember, setSelectedMember] = useState<
        ExternalMember | undefined
    >(undefined);
    const [selectedDocId, setSelectedDocId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const isAdvisor = organization === "연구 자문단";
    let count = 0;

    const externalMemberCollectionRef = collection(
        db,
        "externalMembers"
    ).withConverter<ExternalMember>(externalMemberConverter);

    const externalMembersQuery = useFirestoreQuery<ExternalMember>(
        ["externalMembers"],
        externalMemberCollectionRef,
        { subscribe: true }
    );

    return (
        <div>
            <table className='w-full table-auto border-t border-t-black'>
                <thead>
                    <tr className='bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                        {isAdvisor && (
                            <th className='w-[10%] text-center'>구분</th>
                        )}
                        <th className='w-[5%] px-6 py-3 text-center'>NO</th>
                        <th className='w-[20%] text-center'>성명</th>
                        <th className='w-[30%] text-center'>소속</th>
                        <th className='relative h-12 w-[35%]'>
                            이메일
                            {user && (
                                <button
                                    className='absolute right-3 top-1/2 -translate-y-1/2 border p-1'
                                    onClick={() => {
                                        setIsEditing((prev) => !prev);
                                        isEditing
                                            ? setSelectedMember(undefined)
                                            : null;
                                    }}
                                >
                                    {isEditing ? "취소" : "추가"}
                                </button>
                            )}
                        </th>
                    </tr>
                </thead>
                <tbody className='text-sm font-light text-gray-600'>
                    {externalMembersQuery.data?.docs.map((docSnapshot) => {
                        const data = docSnapshot.data();

                        if (data.organization === organization) {
                            count++;
                            return (
                                <tr
                                    key={docSnapshot.id}
                                    className='border-b border-gray-200 hover:bg-gray-100'
                                >
                                    {isAdvisor && (
                                        <td className='text-center'>
                                            {data.division}
                                        </td>
                                    )}
                                    <td className='py-3 text-center'>
                                        {count}
                                    </td>
                                    <td className='text-center'>{data.name}</td>
                                    <td className='text-center'>
                                        {data.department}
                                    </td>
                                    <td className='relative flex items-center text-center'>
                                        <div className='flex h-12 w-full items-center justify-center'>
                                            <a
                                                className='flex w-fit justify-center self-center self-center hover:underline hover:underline-offset-2'
                                                href={`mailto:${data.email}`}
                                            >
                                                <div>{data.email}</div>
                                                <ImMail4
                                                    className='ml-2'
                                                    size={20}
                                                />
                                            </a>
                                        </div>
                                        {user && (
                                            <div className='absolute right-2 flex gap-x-2 text-sm'>
                                                <button
                                                    className='border p-1'
                                                    onClick={() => {
                                                        setIsEditing(true);
                                                        setSelectedMember({
                                                            ...data,
                                                        });
                                                    }}
                                                >
                                                    수정
                                                </button>
                                                <DeleteDocButton
                                                    docID={docSnapshot.id}
                                                    collectionRef={
                                                        externalMemberCollectionRef
                                                    }
                                                />
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
            {isEditing && (
                <MemberTableModal
                    count={count}
                    isAdvisor={isAdvisor}
                    collectionRef={externalMemberCollectionRef}
                    setIsEditing={setIsEditing}
                    selectedMember={selectedMember}
                    organization={organization}
                    selectedDocId={selectedDocId}
                    setSelectedMember={setSelectedMember}
                />
            )}
        </div>
    );
}

export default MemberTable;
