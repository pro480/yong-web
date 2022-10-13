import React from "react";
import { ImMail4 } from "react-icons/im";
import PageTitle from "../../../src/components/PageTitle";
import OrganizationBanner from "../../../src/components/OrganizationBanner";
import { collection, query } from "@firebase/firestore";
import { db } from "../../../firebase";
import { Member } from "../../../typing";
import memberConverter from "../../../src/utils/firebase/memberConverter";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import OrganizationTable from "../../../src/components/OrganizationTable";

function Research() {
    const membersRef = query(collection(db, "members")).withConverter<Member>(
        memberConverter
    );

    const membersQuery = useFirestoreQuery<Member>(["members"], membersRef);

    const memberSnapshot = membersQuery.data;

    let count = 0;

    return (
        <div>
            <PageTitle
                title='연구 자문단'
                description='교육빅데이터응용연구센터의 연구 자문단입니다.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 조직'
                secondLink='/info/organization'
                thirdDepth='연구 자문단'
                thirdLink='/info/organization/research'
            />

            <OrganizationBanner
                title='Research Advisory Team'
                description='연구 자문단에 대한 설명을 적어주세요'
                imageUrl='/images/organization/researchBanner2.jpg'
            />

            <OrganizationTable team='연구 자문단' />
        </div>
    );
}

export default Research;
