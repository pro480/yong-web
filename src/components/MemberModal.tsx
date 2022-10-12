import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Member, MemberTeam } from "../../typing";
import { CollectionReference } from "@firebase/firestore";
import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../firebase";

interface Props {
    memberRef: CollectionReference<Member>;
    team: MemberTeam;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    member?: Member;
}
interface Inputs {
    imageUrl: File[];
    name: string;
    history: string[];
    email: string;
    team: MemberTeam;
    major?: string;
    division?: string;
}

function MemberModal({ memberRef, member, team, setModalOpen }: Props) {
    const [historyList, setHistoryList] = useState([0]);
    const membersRef = memberRef;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    // firebase members 컬렉션에 문서 추가하기 위한 작ㅇ버
    const addMutation = useFirestoreCollectionMutation(membersRef);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        let file = data.imageUrl[0];
        const storageRef = ref(storage, "images/" + file.name);
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
                    addMutation.mutate({
                        email: data.email,
                        major: data.major,
                        history: data.history
                            .slice(0, historyList.length)
                            .map((item) => item.trim())
                            .filter(Boolean),
                        team: data.team,
                        name: data.name,
                        imageUrl: downloadURL,
                        division: data.division,
                    });
                });
                setModalOpen(false);
            }
        );
    };

    // 약력 입력란 추가
    const addHistory = () => {
        let historyArr = [...historyList];
        let historyNum = historyArr.slice(-1)[0];
        if (historyNum < 7) {
            historyNum++;
            historyArr.push(historyNum);
            setHistoryList(historyArr);
        }
    };

    // 약력 입력란 삭제
    const deleteHistory = () => {
        let historyArr = [...historyList];
        let historyNum = historyArr.slice(-1)[0];
        if (historyNum > 0) {
            historyArr.pop();
            setHistoryList(historyArr);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='min-h-44 relative flex w-full flex-wrap bg-gray-300 p-4'
        >
            {/*이미지 입력 란*/}
            <div className='h-full w-1/4 flex-col border p-2'>
                <label>
                    이미지
                    <input
                        className=''
                        type='file'
                        {...register("imageUrl", { required: true })}
                    />
                    {errors.imageUrl && (
                        <p className='text-sm text-SUB_COLOR-500'>
                            정확한 사진을 입력해주세요
                        </p>
                    )}
                </label>
            </div>
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
                            {historyList?.map((item, index) => (
                                <input
                                    key={index}
                                    className=' m-1 h-7 w-[30%] border border-gray-700  pl-3'
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
                            className=' mx-2 h-7 border  border-gray-700 bg-gray-300  pl-3'
                            placeholder='소속'
                            value={team}
                            {...register("team", { required: true })}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        구분
                        <select
                            className='mx-2 h-8 border border-gray-700  pl-3'
                            placeholder='소속'
                            {...register("division", { required: true })}
                        >
                            <option value='대학'>대학</option>
                            <option value='연구기관'>연구기관</option>
                        </select>
                    </label>
                </div>
                <div className=' self-center'>
                    <input
                        className='mr-10 w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1'
                        type='submit'
                        value='센터 구성원 추가'
                    />
                    <button
                        onClick={() => setModalOpen(false)}
                        className='w-fit cursor-pointer self-center border bg-PRIMARY_COLOR-50 px-6 py-1'
                    >
                        취소
                    </button>
                </div>
            </div>
        </form>
    );
}

export default MemberModal;
