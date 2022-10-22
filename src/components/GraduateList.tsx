import React, { useState } from "react";
import GraduateNameCard from "./GraduateNameCard";
// import MemberModal from "./MemberModal";
import GraduateModal from "./GraduateModal";
import useAuth from "../hooks/useAuth";
import { collection } from "@firebase/firestore";
import { db } from "../../firebase";
// import memberConverter from "../utils/firebase/internalMemberConverter";
import memberConverter from "../utils/firebase/graduateMemberConverter";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
// import { InternalMember, Team } from "../../typing";
import { GraduateMember, Classification } from "../../typing";

interface Props {
    // team: Team;
    classification: Classification;
}

// function GraduateList({ team }: Props) {
function GraduateList({ classification }: Props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<
        // InternalMember | undefined
        GraduateMember | undefined
    >(undefined);
    const [selectedDocument, setSelectedDocument] = useState<
        string | null | undefined
    >(null);
    const { user } = useAuth();
    let orgName: string;

    // db는 ./firebase.ts 에 있는 db를 의미, "member"는 컬렉션의 이름, withConverter()는 typeScript 를 유용하게 사용하기 위함 없어도 큰 문제 X, 다만 에러방지의 어려움이 있음
    // const internalMembersRef = collection(
    //     db,
    //     "internalMembers"
    // ).withConverter<InternalMember>(memberConverter);
    const graduateMembersRef = collection(
        db,
        "graduateMembers"
    ).withConverter<GraduateMember>(memberConverter);
    // firebase 에서 불러온 정보를 reactQuery 에 담음
    // const internalMembersQuery = useFirestoreQuery<InternalMember>(
    //     ["internalMembers"],
    //     internalMembersRef,
    //     { subscribe: true }
    // );
    const graduateMembersQuery = useFirestoreQuery<GraduateMember>(
        ["graduateMembers"],
        graduateMembersRef,
        { subscribe: true }
    );

    // reactQuery 사용법임 (https://react-query-firebase.invertase.dev/firestore/querying-collections 참고)
    // const memberSnapshot = internalMembersQuery.data;
    const memberSnapshot = graduateMembersQuery.data;

    return (
        <React.Fragment>
            <header className='my-12 flex '>
                <h1 className='organizationTitle'>{classification}</h1>
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
                className={
                    'flex h-fit flex-wrap gap-y-4'
                }
            >
                {memberSnapshot?.docs
                    .filter((docSnapshot) => {
                        const data = docSnapshot.data();
                        // return data.team === team;
                        return data.classification === classification;
                    })
                    .map((docSnapshot) => {
                        const memberData = docSnapshot.data();
                        return (
                            <div
                                key={docSnapshot.id}
                                className='h-52 w-1/2 p-2'
                            >
                                <GraduateNameCard
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
                    // <MemberModal
                    <GraduateModal
                        // memberRef={internalMembersRef}
                        memberRef={graduateMembersRef}
                        selectedDocument={selectedDocument}
                        selectedMember={selectedMember}
                        // team={team}
                        classification={classification}
                        setModalOpen={setModalOpen}
                        setSelectedMember={setSelectedMember}
                    />
                )}
            </section>
        </React.Fragment>
    );
}

export default GraduateList;