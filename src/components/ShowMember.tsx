import { Member, MemberTeam } from "../../typing";
import React, { useState } from "react";
import NameCard from "./NameCard";
import MemberModal from "./MemberModal";
import useAuth from "../hooks/useAuth";
import { collection } from "@firebase/firestore";
import { db } from "../../firebase";
import memberConverter from "../utils/firebase/memberConverter";
import {
    useFirestoreDocumentDeletion,
    useFirestoreQuery,
} from "@react-query-firebase/firestore";

interface Props {
    organization: MemberTeam;
}

function ShowMember({ organization }: Props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState<Member | undefined>(
        undefined
    );
    const [selectedDocument, setSelectedDocument] = useState<
        string | null | undefined
    >(null);
    const { user } = useAuth();
    let orgName: string;

    // db는 ./firebase.ts 에 있는 db를 의미, "member"는 컬렉션의 이름, withConverter()는 typeScript 를 유용하게 사용하기 위함 없어도 큰 문제 X, 다만 에러방지의 어려움이 있음
    const membersRef = collection(db, "members").withConverter<Member>(
        memberConverter
    );
    // firebase 에서 불러온 정보를 reactQuery 에 담음
    const membersQuery = useFirestoreQuery<Member>(["members"], membersRef);

    // reactQuery 사용법임 (https://react-query-firebase.invertase.dev/firestore/querying-collections 참고)
    const memberSnapshot = membersQuery.data;

    switch (organization) {
        case "센터장":
            orgName = "Center Leader";
            break;
        case "연구협력 네트워크":
            orgName = "Research Collaboration Network";
            break;
        case "연구 자문단":
            orgName = "Research Advisory Group";
            break;
        case "연구 윤리 자문단":
            orgName = "Research Ethics Advisory Group";
            break;
        default:
            orgName = "Data Analytics Team";
    }

    return (
        <React.Fragment>
            <header className='my-12 flex '>
                <h1 className='organizationTitle'>{orgName}</h1>
                <span className='w-full border-b'></span>
                {user && organization !== "센터장" && (
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
                    organization === "센터장"
                        ? "h-fit"
                        : "flex h-fit flex-wrap gap-y-4"
                }`}
            >
                {memberSnapshot?.docs
                    .filter((docSnapshot) => {
                        const data = docSnapshot.data();
                        return data.team === organization;
                    })
                    .map((docSnapshot) => {
                        const memberData = docSnapshot.data();
                        return organization === "센터장" ? (
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
                        selectedDocument={selectedDocument}
                        selectedMember={selectedMember}
                        team={organization}
                        memberRef={membersRef}
                        setModalOpen={setModalOpen}
                        setSelectedMember={setSelectedMember}
                    />
                )}
            </section>
        </React.Fragment>
    );
}

export default ShowMember;
