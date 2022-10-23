import React from "react";
import PageTitle from "../../../src/components/common/Layout/PageTitle";
import NameCard from "../../../src/components/info/NameCard";
import { collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { InternalMember } from "../../../typing";
import memberConverter from "../../../src/utils/firebase/internalMemberConverter";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import useFirebase from "../../../src/hooks/useFirebase";

function Engineer() {
    const { collectionRef, collectionQuery } = useFirebase<InternalMember>(
        "internalMembers",
        ["internalMembers"]
    );

    const memberList = collectionQuery.data?.docs.filter(
        (docSnapshot) => docSnapshot.data().team !== "센터장"
    );

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

            <section className='grid grid-cols-1 gap-y-6 gap-x-4 px-2 md:px-5 lg:grid-cols-2 xl:gap-x-8'>
                {memberList?.map((docSnapshot) => {
                    const member = docSnapshot.data();
                    return (
                        <div
                            key={docSnapshot.id}
                            className='h-32 sm:h-40 md:h-48 lg:h-36 xl:h-44'
                        >
                            <NameCard
                                isEditable={false}
                                isBig={false}
                                member={member}
                            />
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default Engineer;
