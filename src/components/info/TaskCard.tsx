import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
    image: StaticImageData;
    title: string;
    content: string;
}

function TaskCard({ title, content, image }: Props) {
    return (
        <section className='flex w-full py-10 '>
            <Image src={image} height={200} width={200} />
            <article className='ml-10'>
                <h1 className='text-3xl font-bold text-PRIMARY_COLOR-700'>
                    {title}
                </h1>
                <div className='mt-10 text-lg font-semibold text-PRIMARY_COLOR-500 '>
                    {content}
                </div>
            </article>
        </section>
    );
}

export default TaskCard;
