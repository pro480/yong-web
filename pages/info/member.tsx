import React, { useState } from "react";
import PageTitle from "../../src/components/PageTitle";
import {
    collection,
    DocumentData,
    query,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import {
    useFirestoreCollectionMutation,
    useFirestoreQuery,
    useFirestoreQueryData,
} from "@react-query-firebase/firestore";
import { db } from "../../firebase";
import NameCard from "../../src/components/NameCard";
import { Member, MemberTeam } from "../../typing";
import useAuth from "../../src/hooks/useAuth";
import MemberModal from "../../src/components/MemberModal";

function Member() {
    const { user } = useAuth();

    const memberConverter = {
        toFirestore(member: WithFieldValue<Member>): DocumentData {
            return {
                name: member.name,
                division: member.division,
                email: member.email,
                history: member.history,
                team: member.team,
                major: member.major,
                imageUrl: member.imageUrl,
            };
        },
        fromFirestore(
            snapshot: QueryDocumentSnapshot,
            options: SnapshotOptions
        ): Member {
            const member = snapshot.data(options)!;
            return {
                name: member.name,
                division: member.division,
                email: member.email,
                history: member.history,
                team: member.team,
                major: member.major,
                imageUrl: member.imageUrl,
            };
        },
    };

    // db는 ./firebase.ts 에 있는 db를 의미, "member"는 컬렉션의 이름, withConverter()는 typeScript 를 유용하게 사용하기 위함 없어도 큰 문제 X, 다만 에러방지의 어려움이 있음
    const membersRef = collection(db, "members").withConverter<Member>(
        memberConverter
    );
    // firebase 에서 불러온 정보를 reactQuery 에 담음
    const membersQuery = useFirestoreQuery<Member>(["members"], membersRef);

    // reactQuery 사용법임 (https://react-query-firebase.invertase.dev/firestore/querying-collections 참고)
    const memberSnapshot = membersQuery.data;

    const ShowMember = (organization: MemberTeam) => {
        const [modalOpen, setModalOpen] = useState(false);
        let orgName: string;

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
                        organization === "센터장"
                            ? "h-80"
                            : "flex h-fit flex-wrap gap-y-4"
                    }`}
                >
                    {memberSnapshot?.docs
                        .filter((docSnapshot) => {
                            const data = docSnapshot.data();
                            return data.team === organization;
                        })
                        .map((docSnapshot) => {
                            const data = docSnapshot.data();
                            return organization === "센터장" ? (
                                <NameCard
                                    key={docSnapshot.id}
                                    imageUrl={data.imageUrl}
                                    name={data.name}
                                    history={data.history}
                                    major={data.major}
                                    email={data.email}
                                    team={data.team}
                                />
                            ) : (
                                <div
                                    key={docSnapshot.id}
                                    className='h-52 w-1/2 p-2'
                                >
                                    <NameCard
                                        imageUrl={data.imageUrl}
                                        name={data.name}
                                        history={data.history}
                                        major={data.major}
                                        email={data.email}
                                        team={data.team}
                                    />
                                </div>
                            );
                        })}
                    {modalOpen && (
                        <MemberModal
                            team={organization}
                            setModalOpen={setModalOpen}
                            memberRef={membersRef}
                        />
                    )}
                </section>
            </React.Fragment>
        );
    };

    return (
        <div className='relative'>
            <PageTitle
                title='센터 구성원'
                description='센터 구성원 페이지입니다. 설명을 입력해주세요'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 구성원'
                secondLink='/info/member'
            />
            {ShowMember("센터장")}
            {ShowMember("연구협력 네트워크")}
            {ShowMember("연구 자문단")}
            {ShowMember("연구 윤리 자문단")}
            {ShowMember("데이터 분석팀")}
        </div>
    );
}

export default Member;

// addMutation.mutate({
//     team: organization,
//     email: "cys0926@naver.com",
//     major: "수학교육",
//     history: ["안녕"],
//     name: "최윤석",
//     imageUrl:
//         "https://p-yong21c.inha.ac.kr/sites/p-yong21c/atchmnfl/profl/298/temp_1645496176153100.jpg",
//     division: "",
// })
