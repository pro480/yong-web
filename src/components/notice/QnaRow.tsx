import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { QnaDeleteButton } from "./QnaButton";
import { QnaContext } from "../../../pages/notice/qna";
import QnaAnswer from "./QnaAnswer";
import QnaAnswerSubmit from "./QnaAnswerSubmit";

export default function QnaRow() {
    const { user } = useAuth();
    const { qnaList } = useContext(QnaContext);

    return (
        <div className='pb-14'>
            {qnaList
                ?.sort(
                    (a, b) =>
                        Number(b.data().createAt) - Number(a.data().createAt)
                )
                .map((docSnapshot) => {
                    const items = docSnapshot.data();
                    const year = items.createAt.slice(0, 4);
                    const month = items.createAt.slice(4, 6);
                    const day = items.createAt.slice(6, 8);

                    return (
                        <div key={docSnapshot.id}>
                            <div className=' flex h-[120px] w-full border-t border-gray-300'>
                                <div className='p-2'>
                                    <div className='mx-3 h-[28px] w-[50px]  rounded-md bg-PRIMARY_COLOR-200 text-center text-white'>
                                        <span>질문</span>
                                    </div>
                                </div>
                                <div className='flex w-full flex-col'>
                                    <div className='flex justify-between'>
                                        <div className=' p-2 font-semibold text-gray-700'>
                                            {items.title}
                                        </div>
                                        <div className=' p-2 pr-5 text-sm text-gray-400'>{`${year}년 ${month}월 ${day}일`}</div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='opacity-90'>
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
