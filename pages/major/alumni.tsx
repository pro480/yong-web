import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import MemberList from "../../src/components/common/MemberList";
import useFirebase from "../../src/hooks/useFirebase";
import { GraduateMember } from "../../typing";

function Alumni() {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<GraduateMember>("graduateMembers", ["graduateMembers"]);

    const memberList = collectionQuery.data?.docs;
    console.log(memberList);

    return (
        <div className='relative'>
            <PageTitle
                title='동문'
                description='동문 페이지입니다. 설명을 입력해주세요'
                firstDepth='센터 소개'
                firstLink='/major'
                secondDepth='동문'
                secondLink='/major/alumni'
            />

            <MemberList<GraduateMember>
                team='동문'
                memberList={memberList}
                collectionRef={collectionRef}
                collectionQuery={collectionQuery}
                isBig={false}
                deleteDocument={deleteDocument}
            />
        </div>
    );
}

export default Alumni;
