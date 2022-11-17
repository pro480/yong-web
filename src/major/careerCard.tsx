import styles from "../styles/styles.module.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import React from "react";

interface Props {
    title: string;
    content: string;
}

export function CareerCard({ title, content }: Props) {
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                <div className='relative hidden w-36 items-center sm:flex'>
                    <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                        <FaChalkboardTeacher className='h-full w-full' />
                    </div>
                </div>

                <div className='w-full'>
                    <h1 className='font-bold xs:text-lg sm:text-xl md:text-2xl'>
                        {title}
                    </h1>
                    <div className='border-b'></div>
                    <p className='mt-1 text-[0.925rem] xs:mt-2'>{content}</p>
                </div>
            </div>
        </div>
    );
}
