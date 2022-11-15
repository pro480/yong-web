import React from "react";

interface Props {
    range : string,
    howToCome: string;
}

function LocationBox({ range, howToCome }: Props) {
    return(
            <div className='flex w-full relative items-center space-x-5'>
                <div className='w-1/6 sm:w-1/5 text-sm md:text-xl'>{range}</div>
                <div className='history_division absolute left-6 xs:left-6 sm:left-14 md:left-24'></div>
                <a className='text-sm md:text-lg'>
                    {howToCome}
                </a>
            </div>
        )
}

export default LocationBox;
