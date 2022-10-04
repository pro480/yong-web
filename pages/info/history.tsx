import React, { useState } from "react";
import PageTitle from "../../src/components/PageTitle";
import { useForm } from "react-hook-form";
import Banner from "../../src/components/Banner";

interface Inputs {
    date: string;
    task: string;
}

function History() {
    let initialHistory = [
        { date: "2020-02-02", task: "연혁 1" },
        { date: "2020-04-12", task: "연혁 2" },
        { date: "2020-05-12", task: "연혁 3" },
        { date: "2020-06-12", task: "연혁 4" },
    ];

    const [history, setHistory] = useState(initialHistory);
    const [isEditing, setIsEditing] = useState(false);

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = (data: { date: string; task: string }) => {
        setHistory([...history, data]);
    };

    return (
        <div>
            <PageTitle
                title='센터 연혁'
                description='센터 연혁 페이지의 설명을 입력해주세요.'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 연혁'
                secondLink='/info/history'
            />
            <div className='h-[200px] bg-gray-300 flex justify-center items-center'>
                연구소의 이미지를 넣어주세요
            </div>
            <section className='my-12 flex border-b'>
                <h1 className='pl-10 pr-32 text-2xl font-bold'>2022</h1>
                <div>
                    <p className='mb-8 flex h-fit items-center'>
                        <h3 className='mr-5 text-lg font-semibold text-gray-700'>
                            03월
                        </h3>
                        연혁을 입력해주세요.
                    </p>
                    <p className='mb-8 flex h-fit items-center'>
                        <h3 className='mr-5 text-lg font-semibold text-gray-700'>
                            06월
                        </h3>
                        연혁을 입력해주세요.
                    </p>
                </div>
            </section>
            <section className='my-12 flex border-b'>
                <h1 className='pl-10 pr-32 text-2xl font-bold'>2021</h1>
                <div>
                    <p className='mb-8 flex h-fit items-center'>
                        <h3 className='mr-5 text-lg font-semibold text-gray-700'>
                            03월
                        </h3>
                        연혁을 입력해주세요.
                    </p>
                    <p className='mb-8 flex h-fit items-center'>
                        <h3 className='mr-5 text-lg font-semibold text-gray-700'>
                            06월
                        </h3>
                        연혁을 입력해주세요.
                    </p>
                </div>
            </section>
            <section className='my-12 flex border-b'>
                <h1 className='pl-10 pr-32 text-2xl font-bold'>2020</h1>
                <div>
                    <p className='mb-8 flex h-fit items-center'>
                        <h3 className='mr-5 text-lg font-semibold text-gray-700'>
                            03월
                        </h3>
                        연혁을 입력해주세요.
                    </p>
                    <p className='mb-8 flex h-fit items-center'>
                        <h3 className='mr-5 text-lg font-semibold text-gray-700'>
                            06월
                        </h3>
                        연혁을 입력해주세요.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default History;

// <ul>
//     {history.map((item, index) => (
//         <li key={index} className='flex gap-x-4'>
//             <div>{item.date}</div>
//             <div>{item.task}</div>
//             {isEditing && (
//                 <button
//                     className='border'
//                     onClick={() => {
//                         let editHistory = [...history];
//                         editHistory.splice(index, 1);
//                         console.log(editHistory);
//                         setHistory(editHistory);
//                     }}
//                 >
//                     삭제
//                 </button>
//             )}
//         </li>
//     ))}
// </ul>
//
// <div className='flex gap-x-4'>
//     {isEditing ? (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input
//                 {...register("date", { required: true })}
//                 placeholder='날짜'
//                 className='border'
//                 type='date'
//             />
//             <input
//                 {...register("task", { required: true })}
//                 placeholder='사건'
//                 className='border'
//             />
//             <input
//                 className='border border-black'
//                 type='submit'
//                 value='연혁 추가'
//             />
//             <button
//                 className='border border-black'
//                 onClick={() => setIsEditing(false)}
//             >
//                 취소
//             </button>
//         </form>
//     ) : (
//         <button
//             className='border border-black'
//             onClick={() => setIsEditing(true)}
//         >
//             수정
//         </button>
//     )}
// </div>
