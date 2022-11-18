import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
    image: StaticImageData;
    content: string;
}

function TaskCard({ image, content }: Props) {
    return (
        <section className=' flex h-32  w-full  items-center justify-center gap-x-1.5 rounded-md border p-3 shadow-sm shadow-PRIMARY_COLOR-100   sm:h-40 sm:gap-x-3  sm:p-6 xl:w-full'>
            <div className='flex h-2/3 w-8 items-center justify-center'>
                <Image
                    src={image}
                    objectFit='contain'
                    objectPosition='center'
                />
            </div>
            <h1 className='flex flex-1 px-2  text-left text-xs font-bold text-PRIMARY_COLOR-700 sm:text-2xl'>
                <div className=' leading-relaxed'>{content}</div>
            </h1>
        </section>
    );
}

export default TaskCard;
