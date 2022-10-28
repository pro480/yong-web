import React from "react";

function QnaTableHeader() {
    return (
        <thead>
            <tr className='w-full bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-600'>
                <th className='w-32 py-3 text-center'>답변 유무</th>
                <th className='py-3 text-center'> 제목</th>
                <th className='w-1/6 py-3 text-center'>작성자</th>
                <th className='w-1/6 py-3 text-center'>등록일</th>
                <th className='w-1/6 py-3 text-center'>첨부파일</th>
            </tr>
        </thead>
    );
}

export default QnaTableHeader;
