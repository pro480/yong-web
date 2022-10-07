import React, { useState } from "react";
import PageTitle from "../../src/components/PageTitle";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Recruit() {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    return (
        <div>
            <PageTitle
                title='연구원 모집'
                description='연구원 모집 페이지의 설명을 입력해주세요.'
                firstDepth='공지사항'
                firstLink='/notice'
                secondDepth='연구원 모집'
                secondLink='/notice/recruit'
            />

            <div className='flex w-full bg-gray-300'>
                해당 페이지는 교수님께서 작성하신 문서를 pdf로 업로드하면 pdf를
                보여주는 형식으로 진행 할 예정입니다.
                <br />
                아래는 pdf가 보이는 형태 예시입니다
            </div>
            <br />

            <div className='flex w-full justify-center '>
                <Document
                    className='border'
                    file='/test.pdf' // 여기는 가지고 계신 pdf 주소
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {/* height, width는 number 타입으로 vh, %는 먹지 않습니다. */}
                    <Page pageNumber={pageNumber} width={800} />
                </Document>
            </div>
        </div>
    );
}

export default Recruit;
