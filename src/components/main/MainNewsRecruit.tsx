import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
    title: string;
    href: string;
}

function MainNewsRecruit({ title, href }: Props) {
    // 연구원 모집
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if (window.innerWidth > 1020) {
            setHeight(310);
        } else if (window.innerWidth > 820) {
            setHeight(800);
        } else if (window.innerWidth > 500) {
            setHeight(450);
        } else {
            setHeight(300);
        }

        const handleScreen = () => {
            if (window.innerWidth > 1020) {
                setHeight(310);
            } else if (window.innerWidth > 820) {
                setHeight(800);
            } else if (window.innerWidth > 500) {
                setHeight(450);
            } else {
                setHeight(300);
            }
        };
        window.addEventListener("resize", handleScreen);
        return () => {
            window.removeEventListener("resize", handleScreen);
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <Link href={href}>
            <div className='group flex min-h-[310px] w-full cursor-pointer flex-col gap-y-3 rounded-tr-3xl rounded-bl-3xl bg-GRAY_COLOR-200 px-7 py-7 transition-colors duration-[350ms] ease-in-out hover:bg-PRIMARY_COLOR-400 lg:w-auto lg:flex-1'>
                <div className='text-xl font-black text-PRIMARY_COLOR-700 group-hover:text-white'>
                    {title}
                </div>

                <div className='relative w-full border-b before:absolute before:-bottom-[4px] before:w-20 before:-translate-y-1/2 before:border-b-[4px] before:border-PRIMARY_COLOR-500 group-hover:before:border-white'></div>

                <div className=''>
                    <div className='flex w-full justify-center '>
                        <Document
                            className='border'
                            file='/recruit.pdf' // 여기는 가지고 계신 pdf 주소
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {/* height, width는 number 타입으로 vh, %는 먹지 않습니다. */}
                            <Page
                                pageNumber={pageNumber}
                                className='w-full'
                                height={height}
                            />
                        </Document>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MainNewsRecruit;
