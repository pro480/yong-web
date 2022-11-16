/* eslint-disable @next/next/no-img-element */
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
    isBig
}: Props<T>) {
    const { user } = useAuth();

    return (
        <section className='pb-1 w-full flex us:flex-col xs:flex-row xs:justify-between'>
            {/*이미지 사이즈*/}
            {/* <div className='relative us:mt-7 xs:my-auto xs:relative us:w-[70%] xs:w-[40%] sm:w-[25%]'> */}
            <div className='relative xs:mt-7 us:w-[50%] xs:w-[40%] sm:w-[25%]'>
                <Image
                    src={member.imageUrl}
                    alt='멤버사진'
                    layout='fill'
                    objectFit='contain'
                    priority={true}
                />
            </div>
            {/*오른쪽 설명*/}
            <main className='xs:w-[45%] sm:w-[65%] xs:self-center text-PRIMARY_COLOR-500 sx:text-xs sm:text-sm md:text-base'>
                {/*이름, 관심분야, 이메일*/}
                <header className='xs:flex-wrap w-full pb-1 xs:items-center'>
                    <h1 className={`pb-1 font-semibold text-PRIMARY_COLOR-800 ${
                                    isBig
                                        ? "us:text-xl md:text-2xl lg:text-3xl"
                                        : "sm:text-xl             lg:text-2xl"
                    }`}>
                        {member.name}
                    </h1>
                    <div className=''>{member.major}</div>

                    <a
                        href={`mailto:${member.email}`}
                        className='text-PRIMARY_COLOR-800 hover:underline'
                    >
                        {member.email}
                    </a>
                </header>

                {/* <div className={ (document.body.offsetWidth < 440) ? 'hidden' : ''}> 모바일 사이즈 약력 삭제 */}
                <div className='us:hidden xs:contents'>
                    <div className={`flex pb-1 justify-between text-base md:text-lg xl:text-xl ${
                                    isBig
                                        ? "pt-3"
                                        : "pt-1"
                    }`}>
                        약력{" "}
                        {isEditable && user && (
                            <div className='flex gap-x-5 pl-5'>
                                <MemberUpdateButton<T>
                                    member={member}
                                    documentID={documentID}
                                />
                                <MemberDeleteButton documentID={documentID} />
                            </div>
                        )}
                    </div>

                    <article className={`flex flex-wrap w-full xs:gap-x-10 sm:gap-x-0 ${
                                    isBig
                                        ? "gap-y-3"
                                        : "gap-y-2"
                    }`}>
                        {/* 'flex flex-wrap w-full xs:gap-x-10 sm:gap-x-0 gap-y-2' > */}
                        {/* 줄바꿈 단어별로 되게 break, white-space 안됨..., 아랫줄 침범하는것 
                            브라우저별 호환성 이슈 있는상태 https://velog.io/@otterp/tailwind-%EC%97%90%EC%84%9C-keep-all-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 */}
                        {member.history.map((history, index) => (
                            <div
                                key={index}
                                className='break-keep h-fit min-w-[47%] border-l-2 border-l-PRIMARY_COLOR-200 ml-2 pl-2'
                            >
                                {history}
                            </div>
                        ))}
                    </article>
                </div>
            </main>
        </section>
    );
}

export default NameCard;
