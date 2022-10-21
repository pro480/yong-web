import React from "react";
import PageTitle from "../../../src/components/PageTitle";
import FirstDepthBanner from "../../../src/components/FirstDepthBanner";
import analyticsImage from "../../../public/images/banner/researchBanner.jpg";
import NameCard from "../../../src/components/NameCard";
import { collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { InternalMember } from "../../../typing";
import memberConverter from "../../../src/utils/firebase/internalMemberConverter";
import { useFirestoreQuery } from "@react-query-firebase/firestore";

function Analytics() {
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

    const memberSnapshot = internalMembersQuery.data;

    return (
        <div>
            <PageTitle
                title='연구원'
                description='교육빅데이터응용연구센터의 데이터분석 연구팀입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='연구원'
                thirdLink='/info/organization/analytics'
            />

            <section className='flex h-fit flex-wrap'>
                {memberSnapshot?.docs.map((docSnapshot) => {
                    const member = docSnapshot.data();
                    if (member.team !== "센터장") {
                        return (
                            <div
                                key={docSnapshot.id}
                                className='h-52 w-1/2 p-2'
                            >
                                <NameCard member={member} />
                            </div>
                        );
                    }
                })}
            </section>
        </div>
    );
}

export default Analytics;
