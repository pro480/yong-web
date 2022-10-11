import React, { useRef } from "react";
import { Member } from "../../typing";
import Image from "next/image";
import { ImMail4 } from "react-icons/im";

function NameCard(member: Member) {
    const cardRef = useRef<HTMLDivElement>(null);
    const width = cardRef.current?.clientWidth;
    console.log(width);

    return (
        <div ref={cardRef} className='flex h-full gap-x-8'>
            {/*로고 사이즈*/}
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
            <div className='flex h-full w-full flex-col gap-y-3'>
                {/*이름, 이메일*/}
                <header className='relative flex w-full items-end gap-x-6'>
                    <h1 className='text-4xl font-semibold text-PRIMARY_COLOR-500'>
                        {member.name}
                    </h1>
                    <div className='flex text-PRIMARY_COLOR-500 '>
                        주요 관심 분야 : {member.major}
                    </div>
                    <a
                        href={`mailto:${member.email}`}
                        className='text-lg hover:underline'
                    >
                        {member.email}
                        <ImMail4
                            className='my-auto mx-auto ml-2 inline h-full'
                            size={16}
                        />
                    </a>
                </header>

                <div className='flex h-full w-full flex-wrap text-sm'>
                    <div className='my-2 flex h-fit w-full items-center text-xl text-PRIMARY_COLOR-500'>
                        약력
                    </div>
                    {member.history.map((history, index) => (
                        <div
                            key={index}
                            className='h-fit w-1/2 border-l-2 border-l-PRIMARY_COLOR-200 pl-2'
                        >
                            {history}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NameCard;
