import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { collection, doc } from "@firebase/firestore";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { db, storage } from "../../../firebase";
import Image from "next/image";
import { Course, Team } from "../../../typing";
import { MemberListContext } from "../common/MemberList";
import { MemberCancelButton } from "./MemberButton";

interface Props {
    team: Team;
}
interface Inputs {
    name: string; // 이름
    email: string; // 개인 이메일
    major: string; //전공
    imageFile: File[]; // 사진 주소
    department: string; // 소속 (ex.인하대학교 교육학과 교수)
    history: string[]; // 약력
    team: Team; // 소속 조직
    course?: Course;
}

function MemberToggle({ team }: Props) {
    const [historyList, setHistoryList] = useState<string[]>([""]);
    const [editImage, setEditImage] = useState(false);
    const { selectedMember, collectionRef, selectedDocId, setModalOpen } =
        useContext(MemberListContext);

    useEffect(() => {
        if (selectedMember) {
            let newHistoryList = [...selectedMember.history];
            setHistoryList(newHistoryList);
            reset(selectedMember);
        }
    }, [selectedMember]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: useMemo(() => {
            if (selectedMember) {
                return selectedMember;
            }
        }, [selectedMember]),
    });

    // firebase members 컬렉션에 문서 추가하기 위한 작업
    const addMutation = useFirestoreCollectionMutation(collectionRef);
    // firebase members 컬렉션에 있는 특정 문서를 수정하기 위한 작업
    const updateMutation = useFirestoreDocumentMutation(
        doc(
            collection(
                db,
                team === "동문" ? "graduateMembers" : "internalMembers"
            ),
            `${selectedDocId}`
        ),
        { merge: true }
    );

    const onAddMember: SubmitHandler<Inputs> = (data) => {
        uploadImageAndAddDoc(data, addMutation);
    };

    function uploadImageAndAddDoc(data: Inputs, mutation: any) {
        let file = data.imageFile[0];
        const storageRef = ref(
            storage,
            data.team ? "images/internalMembers/" : "images/alumni/" + file.name
        );
        const uploadImage = uploadBytesResumable(storageRef, file);

        uploadImage.on(
            "state_changed",
            (snapshot) => {
                // 이미지 업로드가 얼마나 진행됐는지 알려주는 상태
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },

            (error) => {
                // 아래는 에러 처리 코드, 여기서는 3가지 경우만 했지만 아래 사이트를 참고하면 모든 에러를 볼 수 있다.
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized":
                        // 유저에게 업로드 권한이 없는 경우, firebase storage 의 Rules 를 확인하자
                        console.log(error);
                        break;
                    case "storage/canceled":
                        // 유저가 업로드를 취소한 경우
                        console.log(error);
                        break;
                    case "storage/unknown":
                        // 알수 없는 에러, 아마도 서버측 에러?
                        console.log(error);
                        break;
                }
            },
            () => {
                // 업로드가 성공하면 업로드 주소를 가져오고 addMutation.mutate 함수를 실행해 문서를 추가한다
                getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
                    mutation.mutate({
                        name: data.name, // 이름
                        email: data.email, // 개인 이메일
                        major: data.major, //전공
                        imageUrl: downloadURL, // 사진 주소
                        department: data.department, // 소속 (ex.인하대학교 교육학과 교수)
                        history: data.history.slice(0, historyList.length), // 약력
                        team: data.team, // 소속 조직
                        course: data.course ? data.course : null,
                    });
                });
                setModalOpen(false);
            }
        );
    }

    const onUpdateMember: SubmitHandler<Inputs> = (data) => {
        if (editImage) {
            uploadImageAndAddDoc(data, updateMutation);
        } else {
            updateMutation.mutate({
                name: data.name, // 이름
                email: data.email, // 개인 이메일
                major: data.major, //전공
                department: data.department, // 소속 (ex.인하대학교 교육학과 교수)
                course: data.course,
                team: data.team, // 소속 조직
                history: data.history.slice(0, historyList.length),
            });
            setModalOpen(false);
        }
    };

    // 약력 입력란 추가
    const addHistory = () => {
        if (historyList.length < 8) {
            let newHistoryList = [...historyList];
            newHistoryList.push("");
            setHistoryList(newHistoryList);
        }
    };

    // 약력 입력란 삭제
    const deleteHistory = () => {
        if (historyList.length > 1) {
            let newHistoryList = [...historyList];
            newHistoryList.pop();
            setHistoryList(newHistoryList);
        }
    };

    return (
        // Props로 받은 member가 있으면 해당 멤버를 업데이트 하고, 아니면 새로 추가한다.
        <form
            onSubmit={
                selectedMember
                    ? handleSubmit(onUpdateMember)
                    : handleSubmit(onAddMember)
            }
            className='min-h-44 relative flex w-full flex-wrap bg-gray-300 p-4'
        >
            {/*이미지 입력 란*/}
            {selectedMember && !editImage ? (
                <div className='relative h-80 w-1/4 flex-col border p-2'>
                    <Image
                        src={selectedMember.imageUrl}
                        layout='fill'
                        objectFit='cover'
                        alt="이미지입력"
                    />
                    <button
                        className='absolute right-2 bottom-2 z-50 border bg-GRAY_COLOR-600 text-sm'
                        onClick={() => setEditImage(true)}
                    >
                        이미지 수정
                    </button>
                </div>
            ) : (
                <div className='h-full w-1/4 flex-col border p-2'>
                    <label>
                        이미지 파일의 이름은 이름과 동일하게 해주세요(ex.
                        이용상)
                        <input
                            type='file'
                            {...register("imageFile", { required: true })}
                        />
                        {errors.imageFile && (
                            <p className='text-sm text-SUB_COLOR-500'>
                                정확한 사진을 입력해주세요
                            </p>
                        )}
                    </label>
                </div>
            )}

            {/*우측 입력란*/}
            <div className='flex w-3/4 flex-col gap-y-2 p-2'>
                <div className='flex'>
                    <label>
                        이름
                        <input
                            className=' mx-2 h-7  border border-gray-700  pl-3'
                            type='name'
                            placeholder='이름'
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <p className='text-sm text-SUB_COLOR-500'>
                                정확한 이름을 입력하세요.
                            </p>
                        )}
                    </label>
                    <label>
                        관심분야
                        <input
                            className=' mx-2 h-7 border border-gray-700 pl-3'
                            type='major'
                            placeholder='관심 분야'
                            {...register("major")}
                        />
                        {errors.major && (
                            <p className='text-sm text-SUB_COLOR-500'>
                                정확한 관심분야를 입력하세요.
                            </p>
                        )}
                    </label>
                    <label>
                        이메일
                        <input
                            className='h-8 border border-gray-700  pl-3'
                            type='email'
                            placeholder='E-mail'
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className='text-sm text-SUB_COLOR-500'>
                                정확한 이메일을 입력하세요.
                            </p>
                        )}
                    </label>
                </div>
                <div>
                    <label className='flex'>
                        <div className='flex w-1/6 flex-col gap-y-2'>
                            약력 (최대 8개)
                            <button
                                className='flex w-fit border bg-PRIMARY_COLOR-50 px-2'
                                onClick={(e) => {
                                    e.preventDefault();
                                    addHistory();
                                }}
                            >
                                약력 추가
                            </button>
                            <button
                                className='flex w-fit border bg-PRIMARY_COLOR-50 px-2'
                                onClick={(e) => {
                                    e.preventDefault();
                                    deleteHistory();
                                }}
                            >
                                약력 삭제
                            </button>
                        </div>

                        <div className='w-5/6'>
                            {historyList.map((history, index) => (
                                <input
                                    key={index}
                                    className='m-1 h-7 w-[30%] border border-gray-700  pl-3'
                                    type='history'
                                    placeholder='약력'
                                    {...register(`history.${index}`, {
                                        required: true,
                                    })}
                                />
                            ))}
                        </div>
                    </label>{" "}
                    {errors.history && (
                        <p className='text-sm text-SUB_COLOR-500'>
                            정확한 약력을 입력하세요.
                        </p>
                    )}
                </div>
                <div>
                    <label>
                        소속
                        <input
                            className=' mx-2 h-7 w-96  border border-gray-700 pl-3'
                            placeholder='소속(ex. 인하대학교 교육학과 교수)'
                            {...register("department", { required: true })}
                        />
                    </label>
                    <label>
                        센터 조직
                        <input
                            className=' mx-2 h-7 border  border-gray-700 bg-gray-300  pl-3'
                            placeholder='연구팀'
                            value={team}
                            {...register("team", { required: true })}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        현재 과정
                        <select
                            className='mx-2 h-8 border border-gray-700  pl-3'
                            placeholder='현재 과정'
                            {...register("course", { required: true })}
                        >
                            <option value='학부연구생'>학부연구생</option>
                            <option value='석사 과정'>석사 과정</option>
                            <option value='박사 과정'>박사 과정</option>
                            <option value='교수'>교수</option>
                        </select>
                    </label>
                </div>
                <div className=' self-center'>
                    <input
                        className='mr-10 w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1'
                        type='submit'
                        value={selectedMember ? "편집" : "추가"}
                    />
                    <MemberCancelButton />
                </div>
            </div>
        </form>
    );
}

export default MemberToggle;
