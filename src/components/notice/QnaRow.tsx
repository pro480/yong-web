import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { QnaDeleteButton } from "./QnaButton";
import { QnaContext } from "../../../pages/notice/qna";
import QnaAnswer from "./QnaAnswer";
import QnaAnswerSubmit from "./QnaAnswerSubmit";

export default function QnaRow() {
    const { user } = useAuth();
    const { qnaList, pageNumber } = useContext(QnaContext);

    return (
        <div className='pb-14'>
            {qnaList
                ?.sort(
                    (a, b) =>
                        Number(b.data().createAt) - Number(a.data().createAt)
                )
                // 한 페이지에 표현될 갯수만큼 자르기
                .slice(
                    (Number(pageNumber) - 1) * 10,
                    (Number(pageNumber) - 1) * 10 + 10
                )
                .map((docSnapshot) => {
                    const items = docSnapshot.data();
                    const year = items.createAt.slice(0, 4);
                    const month = items.createAt.slice(4, 6);
                    const day = items.createAt.slice(6, 8);

                    return (
                        <div key={docSnapshot.id}>
                            <div className='flex w-full flex-col border-t border-gray-300 pb-6 text-[14px] sm:flex-row sm:pt-2 sm:text-sm md:text-sm lg:pt-4 lg:pb-11 xl:text-base'>
                                <div className='opacity-0 sm:p-2 sm:opacity-100'>
                                    <div className='h-[20px] w-[29px] rounded-md bg-PRIMARY_COLOR-200 text-center text-[12px] text-white  md:h-[24px] md:w-[35px] md:text-[14px] xl:mx-3 xl:h-[28px] xl:w-[50px] xl:text-base'>
                                        <span>질문</span>
                                    </div>
                                </div>
                                <div className='flex w-full flex-col'>
                                    <div className='flex justify-between'>
                                        <div className=' py-2 font-semibold text-gray-700 md:px-2'>
                                            {items.title}
                                        </div>
                                        <div className='py-2 pr-5 text-[10px] text-gray-400 sm:text-[12px] lg:px-2 lg:text-sm'>{`${year}년 ${month}월 ${day}일`}</div>
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <div className=' opacity-90'>
                                            {items.content}
                                        </div>
                                        {user && (
                                            <QnaDeleteButton
                                                docId={docSnapshot.id}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            {user && <QnaAnswerSubmit docId={docSnapshot.id} />}
                            {items.answer ? (
                                <QnaAnswer
                                    answer={items.answer}
                                    answerAt={items.answerAt}
                                />
                            ) : null}
                        </div>
                    );
                })}
        </div>
    );
}
