import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { ThesisContext } from "./ThesisMain";
import { ThesisDeleteButton, ThesisUpdateButton } from "./ThesisButton";

export default function ThesisTableBody() {
    const { user } = useAuth();
    const { pageNumber, thesisList } = useContext(ThesisContext);
    const pageOffset = (Number(pageNumber) - 1) * 5;
    let No = pageOffset;

    return (
        <tbody className='text-sm font-light text-gray-600'>
            {thesisList
                ?.sort(
                    (a, b) =>
                        Number(b.data().createdAt) - Number(a.data().createdAt)
                )
                .slice(
                    (Number(pageNumber) - 1) * 5,
                    (Number(pageNumber) - 1) * 5 + 5
                )
                .map((docSnapshot) => {
                    const data = docSnapshot.data();

                    return (
                        <div
                            key={docSnapshot.id}
                            className='m-10 grid w-[1000px] cursor-pointer  grid-cols-4 border border-PRIMARY_COLOR-400 text-lg hover:border-4 hover:border-PRIMARY_COLOR-300'
                        >
                            {/* 제목 */}
                            <div className='col-span-4 flex border-b border-PRIMARY_COLOR-100'>
                                <div className='text-bold w-[10%]  border-b border-PRIMARY_COLOR-300 bg-PRIMARY_COLOR-100 text-center text-black'>
                                    제목
                                </div>
                                <div className='w-[90%] p-1'>{data.title}</div>
                            </div>
                            {/* 학회지 */}
                            <div className='col-span-4 flex border-b border-PRIMARY_COLOR-100'>
                                <div className='w-[10%] border-b border-PRIMARY_COLOR-300 bg-PRIMARY_COLOR-100 text-center text-black'>
                                    학회지
                                </div>
                                <div className='w-[90%] p-1'>{data.type}</div>
                            </div>

                            {/* 연구자 */}
                            <div className='col-span-2 flex '>
                                <div className='w-[20%] bg-PRIMARY_COLOR-100 text-center text-black'>
                                    연구자
                                </div>
                                <div className='w-[80%] p-1'>
                                    {data.researcher}
                                </div>
                            </div>

                            {/* 발행년도 */}
                            <div className='col-span-2 flex'>
                                <div className='w-[20%] bg-PRIMARY_COLOR-100 text-center text-black'>
                                    발행년도
                                </div>
                                <div className='w-[80%] p-1'>{data.year}</div>
                                {user && (
                                    <ThesisUpdateButton
                                        data={data}
                                        docId={docSnapshot.id}
                                    />
                                )}
                                {user && (
                                    <ThesisDeleteButton
                                        docId={docSnapshot.id}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
        </tbody>
    );
}
