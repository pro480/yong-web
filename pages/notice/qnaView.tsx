import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import { QNA } from "../../typing";
import { Button } from "react-bootstrap";
import { collection, doc, DocumentSnapshot, getDoc } from "firebase/firestore";
import {
    useFirestoreDocument,
    useFirestoreQuery,
} from "@react-query-firebase/firestore";
import { db } from "../../firebase";

export default function qnaView() {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    // 참고 사이트 : https://react-query-firebase.invertase.dev/firestore/querying-documents
    const ref = doc(db, "qna", `${id}`);
    const qna = useFirestoreDocument(["qna", `${id}`], ref);
    const snapshot = qna.data;

    return (
        <div>
            {/* <PageTitle
                title='Q&A 보기'
                description=''
                firstDepth='자료실'
                firstLink='/notice'
                secondDepth='Q&A View'
                secondLink='/notice/qnaView'
            /> */}
            <React.Fragment>
                <main>
                    {/*내용 입력 테이블*/}

                    <table className='w-full table-auto border-t border-t-black'>
                        <thead></thead>
                        <tbody className='font-bold'>
                            <tr className='border border-gray-500'>
                                <td className='w-[15%] border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                    <label htmlFor='title'>제목 *</label>
                                </td>
                                <td className='h-[50px] w-[180%] p-2'>
                                    {snapshot?.data().title}
                                </td>
                            </tr>
                            <tr className='border border-gray-500'>
                                <td className='w-[15%] border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                    <label htmlFor='writer'>작성자 *</label>
                                </td>
                                <td className='h-[50px] w-[180%] p-2'>
                                    {snapshot?.data().writer}
                                </td>
                            </tr>
                            <tr className='border border-gray-500'>
                                <td className='border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                    <label htmlFor='content'>내용 *</label>
                                </td>
                                <td className='h-[300px] w-[238%] p-2'>
                                    {snapshot?.data().content}
                                </td>
                            </tr>
                            <tr className='border border-gray-500'>
                                <td className='border border-gray-500 bg-PRIMARY_COLOR-500/40 text-center'>
                                    <label htmlFor='fileUrl'>첨부 파일</label>
                                </td>
                                <td className='h-[50px] w-[180%] p-2'>
                                    {snapshot?.data().fileUrl}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button
                        className='float-right my-3 mr-5 rounded bg-PRIMARY_COLOR-300 py-2 px-4 font-bold text-white hover:bg-PRIMARY_COLOR-500'
                        href='./qna'
                    >
                        취소
                    </Button>
                    <Button
                        type='submit'
                        className='float-right my-3 mr-1 rounded bg-PRIMARY_COLOR-300 py-2 px-4 font-bold text-white hover:bg-PRIMARY_COLOR-500'
                    >
                        완료
                    </Button>
                </main>
            </React.Fragment>
        </div>
    );
}
