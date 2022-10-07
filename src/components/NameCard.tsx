import React from "react";

interface Props {
    img: string;
    name: string;
    introduce: string;
    
}

function AlumniLayout({
    img,
    name,
    introduce,
    
}: Props) {
    return (
        <div className='flex w-1/2'>
            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                {img}을
                <br />
                넣어주세요.
            </div>
            <div>
                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                    {name}
                </h1>
                <div className='text-sm'>
                    이곳은 동문 소개란 입니다.
                    <br />
                    {introduce}
                </div>
            </div>
        </div>
    );
}

export default AlumniLayout;
