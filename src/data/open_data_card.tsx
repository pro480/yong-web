import Image from "next/image";
import React from "react";

interface Props {
    imgUrl: string;
    title_KO: string;
    description: string;
    href: string;
}

export function OpenDataCard({ imgUrl, title_KO, description, href }: Props) {
    return (
        <article className='mx-auto h-96 w-80 border hover:scale-110'>
            <div className='h-[40%] border px-4'>
                <a
                    className='relative block h-full cursor-pointer'
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Image
                        src={imgUrl}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                        alt='로고'
                        priority={true}
                    />
                </a>
            </div>
            <div className='flex h-[60%] flex-col items-center justify-center gap-y-4 bg-PRIMARY_COLOR-500/30  py-3 px-2'>
                <h1 className='text-lg font-semibold'>{title_KO}</h1>
                <p className='text-sm'>{description}</p>
            </div>
        </article>
    );
}
