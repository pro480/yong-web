import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import MemberList from "../../src/components/common/MemberList";
import { InternalMember, Team } from "../../typing";
import useFirebase from "../../src/hooks/useFirebase";
import ClassificationTitle from "../../src/components/common/ClassificationTitle";
import { MemberAddButton } from "../../src/components/info/MemberButton";
import useAuth from "../../src/hooks/useAuth";

function Member() {
    const team: Team[] = ["센터장", "연구팀1", "연구팀2", "연구팀3"];
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<InternalMember>("internalMembers", ["internalMembers"]);
    const { user } = useAuth();

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

export default Member;
