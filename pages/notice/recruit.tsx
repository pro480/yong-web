import React, { useEffect, useState } from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Recruit() {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        if (window.innerWidth > 1020) {
            setWidth(1000);
        } else if (window.innerWidth > 820) {
            setWidth(800);
        } else {
            setWidth(450);
        }

        const handleScreen = () => {
            if (window.innerWidth > 1020) {
                setWidth(1000);
            } else if (window.innerWidth > 820) {
                setWidth(800);
            } else {
                setWidth(450);
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
        <div>

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
                        width={width}
                    />
                </Document>
            </div>
        </div>
    );
}

export default Recruit;
