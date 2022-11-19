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
    isBig,
}: Props<T>) {
    const { user } = useAuth();

    return (
        <section
            className={`flex flex-col pb-1 xs:justify-between sm:flex-row sm:gap-x-4`}
        >
            {/*이미지 사이즈*/}
            <div
                className={`relative before:float-left before:pt-[128.57%]   ${
                    isBig ? "sm:w-1/3 md:w-1/4 lg:w-1/5" : "sm:w-1/3 md:w-1/4"
                }`}
            >
                <Image
                    src={member.imageUrl}
                    alt='멤버사진'
                    layout='fill'
                    objectFit='contain'
                    priority={isBig}
                />
            </div>
            {/*오른쪽 설명*/}
            <main
                className={`sm:flex-1 ${
                    isBig ? "text-base lg:text-lg" : "text-xs lg:text-sm "
                } text-PRIMARY_COLOR-500`}
            >
                {/*이름, 관심분야, 이메일*/}
                <header
                    className={`flex w-full flex-wrap items-center xs:items-center ${
                        isBig ? "gap-x-4 py-2" : "gap-x-2 py-1"
                    }`}
                >
                    <h1
                        className={`font-semibold text-PRIMARY_COLOR-800 ${
                            isBig ? "text-lg lg:text-xl" : "text-sm lg:text-lg"
                        }`}
                    >
                        {member.name}
                    </h1>
                    <div className=''>{member.major}</div>

                    <a
                        href={`mailto:${member.email}`}
                        className='w-full text-PRIMARY_COLOR-800 hover:underline'
                    >
                        {member.email}
                    </a>
                </header>

                {/*모바일 사이즈 약력 삭제 */}
                <div
                    className={`hidden flex-col xs:flex ${
                        isBig
                            ? "text-sm sm:gap-y-2 sm:text-xs md:gap-y-1 md:text-sm lg:text-base"
                            : "text-xs lg:text-sm"
                    }`}
                >
                    <div
                        className={` hidden justify-between text-base sm:flex ${
                            isBig ? "lg:text-lg" : ""
                        }`}
                    >
                        <span>약력</span>
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

                    <article
                        className={`flex w-full flex-wrap ${
                            isBig
                                ? "gap-y-2 gap-x-3 sm:gap-y-3 md:gap-y-2 "
                                : "gap-y-1 gap-x-1.5 "
                        }`}
                    >
                        {/* 'flex flex-wrap w-full xs:gap-x-10 sm:gap-x-0 gap-y-2' > */}
                        {/* 줄바꿈 단어별로 되게 break, white-space 안됨..., 아랫줄 침범하는것 
                            브라우저별 호환성 이슈 있는상태 https://velog.io/@otterp/tailwind-%EC%97%90%EC%84%9C-keep-all-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 */}
                        {member.history.map((history, index) => (
                            <div
                                key={index}
                                className={` h-fit min-w-[47%] break-keep border-l-2 border-l-PRIMARY_COLOR-200 lg:min-w-[40%] ${
                                    isBig ? "pl-1" : "pl-1"
                                }`}
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
