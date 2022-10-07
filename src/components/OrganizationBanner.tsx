import React from "react";

interface Props {
    title: string;
    description: string;
}

function OrganizationBanner({ title, description }: Props) {
    return (
        <div className='relative mb-10 flex h-80 flex-col items-center justify-center bg-gray-300 text-PRIMARY_COLOR'>
            <div className='absolute top-5 text-black'>
                해당 조직에 대한 이미지가 들어갈 공간입니다
            </div>
            <div className='text-4xl font-bold'>{title}</div>
            <div className='absolute bottom-10'>{description}</div>
        </div>
    );
}

export default OrganizationBanner;
