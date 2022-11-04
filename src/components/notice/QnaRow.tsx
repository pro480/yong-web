import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { QnaAnswerButton, QnaDeleteButton } from "./QnaButton";
import { QnaContext } from "../../../pages/notice/qna";
import QnaAnswer from "./QnaAnswer";

export default function QnaRow() {
    const { user } = useAuth();
    const { qnaList } = useContext(QnaContext);

    return (
        <div className='pb-14'>
            {qnaList?.map((docSnapshot) => {
                const items = docSnapshot.data();
                const year = items.createAt.slice(0, 4);
                const month = items.createAt.slice(5, 7);
                const day = items.createAt.slice(8, 10);

                return (
                    <div key={docSnapshot.id}>
                        <div className='flex h-[100px] w-full border-t border-gray-300'>
                            <div className='p-2'>
                                <div className='mx-3 h-[28px] w-[50px]  rounded-md bg-PRIMARY_COLOR-200 text-center text-white'>
                                    <span>질문</span>
                                </div>
                                {user && <QnaAnswerButton />}
                            </div>
                            <div className='flex w-full flex-col'>
                                <div className='flex justify-between'>
                                    <div className='p-2'>{items.title}</div>
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
                        {items.answer ? (
                            <QnaAnswer answer={items.answer} />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
