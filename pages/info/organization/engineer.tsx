import React from "react";
import PageTitle from "../../../src/components/common/Layout/PageTitle";
import NameCard from "../../../src/components/info/NameCard";
import { InternalMember } from "../../../typing";
import useFirebase from "../../../src/hooks/useFirebase";

function Engineer() {
    const {  collectionQuery } = useFirebase<InternalMember>(
        "internalMembers",
        ["internalMembers"]
    );

    const memberList = collectionQuery.data?.docs.filter(
        (docSnapshot) => docSnapshot.data().team !== "센터장"
    );

    return (
        <div>
            <section className='grid grid-cols-1 gap-y-6 gap-x-4 px-2 md:px-5 lg:grid-cols-2 xl:gap-x-8'>
                {memberList?.map((docSnapshot) => {
                    const member = docSnapshot.data();
                    return (
                        <div
                            key={docSnapshot.id}
                            className='h-32 sm:h-40 md:h-48 lg:h-36 xl:h-44'
                        >
                            <NameCard
                                documentID={docSnapshot.id}
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
