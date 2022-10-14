import React, { Dispatch, useRef } from "react";
import { Member } from "../../typing";
import Image from "next/image";
import useAuth from "../hooks/useAuth";
import { db } from "../../firebase";
import { collection, doc } from "@firebase/firestore";
import { useFirestoreDocumentDeletion } from "@react-query-firebase/firestore";
import memberConverter from "../utils/firebase/memberConverter";

interface Props {
    member: Member;
    documentID: string;
    setModalOpen: Dispatch<React.SetStateAction<boolean>>;
    setSelectedMember: Dispatch<React.SetStateAction<Member | undefined>>;
    setSelectedDocument: Dispatch<
        React.SetStateAction<string | null | undefined>
    >;
}

function NameCard({
    member,
    documentID,
    setSelectedMember,
    setModalOpen,
    setSelectedDocument,
}: Props) {
    const { user } = useAuth();

    const cardRef = useRef<HTMLDivElement>(null);
    const isCenterLeader = member.team === "센터장";
    const membersCollection = collection(db, "members").withConverter<Member>(
        memberConverter
    );
    const membersRef = doc(membersCollection, `${documentID}`);
    const deleteMutation = useFirestoreDocumentDeletion(membersRef);

    return (
        <div ref={cardRef} className='flex h-full  w-full gap-x-8'>
            {/*이미지 사이즈*/}
            <div className='relative flex h-full w-1/4 border'>
                <Image
                    src={member.imageUrl}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt='멤버사진'
                    priority={isCenterLeader}
                    quality={50}
                />
            </div>
            {/*오른쪽 설명*/}
            <div className='flex h-full w-3/4 flex-col gap-y-3 py-2'>
                {/*이름, 관심분야, 이메일*/}
                <header
                    className={`flex w-full items-end ${
                        isCenterLeader ? "gap-x-6" : "gap-x-3"
                    }`}
                >
                    <h1
                        className={` ${
                            isCenterLeader ? "text-4xl" : "text-2xl"
                        } font-semibold text-PRIMARY_COLOR-500`}
                    >
                        {member.name}
                    </h1>
                    {member.major && (
                        <div
                            className={`flex ${
                                isCenterLeader ? "text-base" : "text-xs"
                            } text-PRIMARY_COLOR-500 `}
                        >
                            {member.major}
                        </div>
                    )}

                    <a
                        href={`mailto:${member.email}`}
                        className={`${
                            isCenterLeader ? "text-lg" : "text-sm"
                        }  hover:underline`}
                    >
                        {member.email}
                    </a>
                </header>

                <div className='flex h-full w-full flex-wrap text-sm'>
                    <div
                        className={`my-2 flex h-fit w-full items-center justify-between ${
                            isCenterLeader ? "text-xl" : "text-base"
                        } text-PRIMARY_COLOR-500`}
                    >
                        <div className='whitespace-nowrap'>약력</div>
                        {user && (
                            <div className='flex gap-x-4 px-4'>
                                <button
                                    className='rounded-sm border bg-SUB_COLOR-400'
                                    onClick={() => {
                                        setSelectedMember(member);
                                        setSelectedDocument(documentID);
                                        setModalOpen(true);
                                    }}
                                >
                                    수정
                                </button>
                                <button
                                    className='rounded-sm border'
                                    onClick={() => deleteMutation.mutate()}
                                >
                                    삭제
                                </button>
                                {deleteMutation.isError && (
                                    <p>{deleteMutation.error.message}</p>
                                )}
                            </div>
                        )}
                    </div>
                    <article className='flex w-full flex-wrap'>
                        {member.history.map((history, index) => (
                            <div
                                key={index}
                                className={`h-fit min-w-[50%] border-l-2 ${
                                    isCenterLeader ? "text-base" : "text-"
                                } border-l-PRIMARY_COLOR-200 pl-2`}
                            >
                                {history}
                            </div>
                        ))}
                    </article>
                </div>
            </div>
        </div>
    );
}

export default NameCard;
