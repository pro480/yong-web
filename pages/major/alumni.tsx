import React from "react";
import MemberList from "../../src/components/common/MemberList";
import useFirebase from "../../src/hooks/useFirebase";
import { GraduateMember } from "../../typing";

function Alumni() {
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<GraduateMember>("graduateMembers", ["graduateMembers"]);

    const memberList = collectionQuery.data?.docs;

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
