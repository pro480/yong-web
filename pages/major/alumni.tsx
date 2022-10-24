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
