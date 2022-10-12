import React, { useEffect, useRef, useState } from "react";
import { Member } from "../../typing";
import Image from "next/image";
import { ImMail4 } from "react-icons/im";

function NameCard(member: Member) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isBig, setIsBig] = useState(false);

    useEffect(() => {
        if (cardRef.current!.clientWidth > 800) {
            setIsBig(true);
        }
    }, []);

    console.log(isBig);

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
                    priority={true}
                />
            </div>
            {/*오른쪽 설명*/}
            <div className='flex h-full w-3/4 flex-col gap-y-3 py-2'>
                {/*이름, 관심분야, 이메일*/}
                <header
                    className={`flex w-full items-end ${
                        isBig ? "gap-x-6" : "gap-x-3"
                    }`}
                >
                    <h1
                        className={` ${
                            isBig ? "text-4xl" : "text-2xl"
                        } font-semibold text-PRIMARY_COLOR-500`}
                    >
                        {member.name}
                    </h1>
                    {member.major && (
                        <div
                            className={`flex ${
                                isBig ? "text-base" : "text-xs"
                            } text-PRIMARY_COLOR-500 `}
                        >
                            {member.major}
                        </div>
                    )}

                    <a
                        href={`mailto:${member.email}`}
                        className={`${
                            isBig ? "text-lg" : "text-sm"
                        }  hover:underline`}
                    >
                        {member.email}
                    </a>
                </header>

                <div className='flex h-full w-full flex-wrap text-sm'>
                    <div
                        className={`my-2 flex h-fit w-full items-center ${
                            isBig ? "text-xl" : "text-base"
                        } text-PRIMARY_COLOR-500`}
                    >
                        약력
                    </div>
                    <article className='flex w-full flex-wrap'>
                        {member.history.map((history, index) => (
                            <div
                                key={index}
                                className={`h-fit min-w-[50%] border-l-2 ${
                                    isBig ? "text-base" : "text-"
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
