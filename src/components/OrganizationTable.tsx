import React, { useEffect, useState } from "react";
import { collection, query, QueryDocumentSnapshot } from "@firebase/firestore";
import { db } from "../../firebase";
import { Member, MemberTeam } from "../../typing";
import memberConverter from "../utils/firebase/memberConverter";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { ImMail4 } from "react-icons/im";

interface Props {
    team: MemberTeam;
}

function OrganizationTable({ team }: Props) {
    const [members, setMembers] = useState<QueryDocumentSnapshot<Member>[]>();
    const isAdvisor = team === "연구 자문단";

    const membersRef = query(collection(db, "members")).withConverter<Member>(
        memberConverter
    );
    const membersQuery = useFirestoreQuery<Member>(["members"], membersRef);
    const memberSnapshot = membersQuery.data;

    useEffect(() => {
        setMembers(
            memberSnapshot?.docs.filter((docSnapshot) => {
                const data = docSnapshot.data();
                return data.team === team;
            })
        );
    }, [memberSnapshot]);

    let count = 0;
    return (
        <table className='w-full min-w-max table-auto border-t border-t-black'>
            <thead>
                <tr className='bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                    {isAdvisor && <th className='w-24 text-center'>구분</th>}
                    <th className='w-12 px-6 py-3 text-center'>NO</th>
                    <th className='w-1/5 text-center'>성명</th>
                    <th className='w-2/5 text-center'>소속</th>
                    <th className='w-1/8 text-center'>이메일</th>
                </tr>
            </thead>
            <tbody className='text-sm font-light text-gray-600'>
                {members?.map((docSnapshot, index) => {
                    const data = docSnapshot.data();
                    return (
                        <tr
                            key={index}
                            className='border-b border-gray-200 hover:bg-gray-100'
                        >
                            {isAdvisor && (
                                <td className='text-center'>{data.division}</td>
                            )}
                            <td className='py-3 text-center'>{index + 1}</td>
                            <td className='text-center'>{data.name}</td>
                            <td className='text-center'>{data.department}</td>
                            <td className='text-center'>
                                <div className='flex w-full items-center justify-center'>
                                    <a
                                        className='ju flex w-fit justify-center self-center self-center hover:underline hover:underline-offset-2'
                                        href='mailto:yong21c@inha.ac.kr'
                                    >
                                        <div>{data.email}</div>
                                        <ImMail4 className='ml-2' size={20} />
                                    </a>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default OrganizationTable;
