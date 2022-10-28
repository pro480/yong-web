import React from "react";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import { GraduateMember, InternalMember } from "../../../typing";
import { MemberDeleteButton, MemberUpdateButton } from "./MemberButton";

interface Props<T> {
    isBig: boolean;
    isEditable: boolean;
    member: T;
    documentID: string;
}

function NameCard<T extends InternalMember | GraduateMember>({
    isEditable,
    member,
    documentID,
}: Props<T>) {
    const { user } = useAuth();

    return (
        <section className='flex h-full w-full flex-wrap justify-between'>
            {/*이미지 사이즈*/}
            <div className='xs:w-[40%] relative sm:w-[25%] '>
                <Image
                    src={member.imageUrl}
                    layout='fill'
                    objectFit='contain'
                    alt='멤버사진'
                    priority={true}
                    quality={50}
                />
            </div>
            {/*오른쪽 설명*/}
            <main className='h-[90%] xs:w-[50%] sm:w-[70%] flex-col self-center text-xs text-PRIMARY_COLOR-500 sm:text-sm md:text-base'>
                {/*이름, 관심분야, 이메일*/}
                <header className='flex w-full items-center gap-x-5'>
                    <h1 className='flex-1 whitespace-nowrap text-lg font-semibold text-PRIMARY_COLOR-800 sm:text-xl md:text-2xl'>
                        {member.name}
                    </h1>
                    <div className='flex-1 whitespace-nowrap truncate hover:overflow-visible'>{member.major}</div>

                    <a
                        href={`mailto:${member.email}`}
                        className='flex-1 whitespace-nowrap truncate hover:overflow-visible text-PRIMARY_COLOR-800 hover:underline md:text-xs lg:text-sm'
                    >
                        {member.email}
                    </a>
                </header>

                <div className='flex xs:pd-10 sm:pd-20 justify-between text-base md:text-lg xl:text-xl'>
                    약력{" "}
                    {isEditable && user && (
                        <div className='flex h-fit gap-x-5'>
                            <MemberUpdateButton<T>
                                member={member}
                                documentID={documentID}
                            />
                            <MemberDeleteButton documentID={documentID} />
                        </div>
                    )}
                </div>

                <article className='flex w-full flex-wrap xs:gap-x-10 sm:gap-x-0 gap-y-3 '>
                    {member.history.map((history, index) => (
                        <div
                            key={index}
                            className='h-fit min-w-[50%] border-l-2 border-l-PRIMARY_COLOR-200 pl-2'
                        >
                            {history}
                        </div>
                    ))}
                </article>
            </main>
        </section>
    );
}

export default NameCard;
