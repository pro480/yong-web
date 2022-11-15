import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
    image: StaticImageData;
    content: string;
}

function TaskCard({ image, content }: Props) {
    return (
        <section className='flex h-48 w-32 flex-col items-center justify-center rounded-md border  shadow-sm shadow-PRIMARY_COLOR-100 sm:h-60 sm:w-1/3 md:w-1/4 xl:w-56'>
            <div className='flex h-2/3 w-16 items-center justify-center'>
                <Image
                    src={image}
                    objectFit='contain'
                    objectPosition='center'
                />
            </div>
            <h1 className='flex flex-1 px-2 text-center text-xs font-bold text-PRIMARY_COLOR-700 sm:text-base'>
                {content}
            </h1>
        </section>
    );
}

export default TaskCard;
