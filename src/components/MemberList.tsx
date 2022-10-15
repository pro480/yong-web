import React, { useState } from "react";
import NameCard from "./NameCard";
import MemberModal from "./MemberModal";
import useAuth from "../hooks/useAuth";
import { collection } from "@firebase/firestore";
import { db } from "../../firebase";
import memberConverter from "../utils/firebase/internalMemberConverter";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { InternalMember, Team } from "../../typing";

interface Props {
    team: Team;
}

function MemberList({ team }: Props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<
        InternalMember | undefined
    >(undefined);
    const [selectedDocument, setSelectedDocument] = useState<
        string | null | undefined
    >(null);
    const { user } = useAuth();
    let orgName: string;

    // db는 ./firebase.ts 에 있는 db를 의미, "member"는 컬렉션의 이름, withConverter()는 typeScript 를 유용하게 사용하기 위함 없어도 큰 문제 X, 다만 에러방지의 어려움이 있음
    const internalMembersRef = collection(
        db,
        "internalMembers"
    ).withConverter<InternalMember>(memberConverter);
    // firebase 에서 불러온 정보를 reactQuery 에 담음
    const internalMembersQuery = useFirestoreQuery<InternalMember>(
        ["internalMembers"],
        internalMembersRef,
        { subscribe: true }
    );

    // reactQuery 사용법임 (https://react-query-firebase.invertase.dev/firestore/querying-collections 참고)
    const memberSnapshot = internalMembersQuery.data;

    return (
        <React.Fragment>
            <header className='my-12 flex '>
                <h1 className='organizationTitle'>{team}</h1>
                <span className='w-full border-b'></span>
                {user && (
                    <button
                        className='w-16 border bg-PRIMARY_COLOR-100 text-white'
                        onClick={() => {
                            setModalOpen((prev) => !prev);
                        }}
                    >
                        {modalOpen ? "취소" : "추가"}
                    </button>
                )}
            </header>
            <section
                className={`${
                    team === "센터장" ? "h-fit" : "flex h-fit flex-wrap gap-y-4"
                }`}
            >
                {memberSnapshot?.docs
                    .filter((docSnapshot) => {
                        const data = docSnapshot.data();
                        return data.team === team;
                    })
                    .map((docSnapshot) => {
                        const memberData = docSnapshot.data();
                        return team === "센터장" ? (
                            <div key={docSnapshot.id} className='h-80 p-2'>
                                <NameCard
                                    member={memberData}
                                    documentID={docSnapshot.id}
                                    setSelectedDocument={setSelectedDocument}
                                    setSelectedMember={setSelectedMember}
                                    setModalOpen={setModalOpen}
                                />
                            </div>
                        ) : (
                            <div
                                key={docSnapshot.id}
                                className='h-52 w-1/2 p-2'
                            >
                                <NameCard
                                    member={memberData}
                                    documentID={docSnapshot.id}
                                    setSelectedDocument={setSelectedDocument}
                                    setSelectedMember={setSelectedMember}
                                    setModalOpen={setModalOpen}
                                />
                            </div>
                        );
                    })}
                {modalOpen && (
                    <MemberModal
                        memberRef={internalMembersRef}
                        selectedDocument={selectedDocument}
                        selectedMember={selectedMember}
                        team={team}
                        setModalOpen={setModalOpen}
                        setSelectedMember={setSelectedMember}
                    />
                )}
            </section>
        </React.Fragment>
    );
}

export default MemberList;
