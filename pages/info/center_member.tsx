import React from "react";
import MemberList from "../../src/components/common/MemberList";
import { InternalMember, Team } from "../../typing";
import useFirebase from "../../src/hooks/useFirebase";
import ClassificationTitle from "../../src/components/common/ClassificationTitle";
import useAuth from "../../src/hooks/useAuth";

function Center_member() {
    const team: Team[] = ["센터장"];
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<InternalMember>("internalMembers", ["internalMembers"]);

    return (
        <div className='relative'>
            {team.map((team) => {
                const memberList = collectionQuery.data?.docs.filter(
                    (docSnapshot) => {
                        if (docSnapshot.data().team) {
                            return docSnapshot.data().team === team;
                        }
                    }
                );
                return (
                    <React.Fragment key={team}>
                        <ClassificationTitle title={team} />
                        <MemberList<InternalMember>
                            key={team}
                            deleteDocument={deleteDocument}
                            memberList={memberList}
                            collectionQuery={collectionQuery}
                            collectionRef={collectionRef}
                            isBig={team === "센터장"}
                            team={team}
                        />
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Center_member;
