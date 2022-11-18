import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Thesis } from "../../../typing";
import moment from "moment";
import { addDoc, updateDoc, doc } from "firebase/firestore";
import { ThesisTableContext } from "./ThesisTable";

export default function ThesisToggle() {
    const today = moment();
    const { register, handleSubmit } = useForm<Thesis>();
    const { collectionRef, selectedDocId, selectedThesis, setIsEditing } =
        useContext(ThesisTableContext);

    const onAddThesis: SubmitHandler<Thesis> = async (data: Thesis) => {
        const docData = {
            createdAt: today.format("YYYYMMDDHHmmss"),
            type: data.type,
            researcher: data.researcher,
            title: data.title,
            year: data.year,
            writer: data.writer,
        };

        await addDoc(collectionRef, docData);
    };

    const onUpdateThesis: SubmitHandler<Thesis> = async (data: Thesis) => {
        const dataRef = doc(collectionRef, selectedDocId);

        const docData = {
            type: data.type,
            researcher: data.researcher,
            title: data.title,
            year: data.year,
            writer: data.writer,
        };

        await updateDoc(dataRef, docData);
    };

    return (
        <form
            className='relative w-full flex-col items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 text-xs sm:text-sm '
            onSubmit={
                selectedDocId == ""
                    ? handleSubmit(onAddThesis)
                    : handleSubmit(onUpdateThesis)
            }
        >
            {/* input */}
            <div className='flex h-10 items-center justify-around'>
                <label className='w-[60%] px-1'>
                    <input
                        className=' w-full border border-gray-700 text-center'
                        placeholder='논문 제목을 입력해 주세요'
                        {...register("title", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[18%] px-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='작성자를 입력해 주세요'
                        {...register("writer", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[20%] px-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='논문 발행년도를 입력해 주세요'
                        {...register("year", {
                            required: true,
                        })}
                    />
                </label>
            </div>
            <div className='flex h-10 items-center justify-around'>
                <label className='w-[45%] px-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='학회지를 입력해 주세요'
                        {...register("type", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[45%] px-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='연구자를 입력해 주세요'
                        {...register("researcher", {
                            required: true,
                        })}
                    />
                </label>
                <button
                    className=' border border-gray-400 bg-gray-100 p-1 lg:flex'
                    onClick={() => {
                        setIsEditing((prev) => !prev);
                    }}
                >
                    취소
                </button>
                <button
                    className=' border border-gray-400 bg-gray-100 p-1 lg:flex'
                    type='submit'
                >
                    제출
                </button>
            </div>
        </form>
    );
}
