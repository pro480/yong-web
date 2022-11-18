import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Material, PaperMaterial, StudyMaterial } from "../../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc } from "@firebase/firestore";
import { db, storage } from "../../../firebase";
import { MaterialTableContext } from "./MaterialTable";
import { MaterialTableCancelButton } from "./MaterialTableButton";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { UseMutationResult } from "react-query";
import moment from "moment";
import { fill } from "lodash";
import { ImFileText2 } from "react-icons/im";
import { IconButton } from "@material-tailwind/react";

interface Inputs {
    title: string; // 자료명
    writer: string; // 작성자
    createdAt: string; // 등록일
    content: string;
    materialFile: File[]; // 첨부파일
}

interface Props {
    material: Material;
}

function MaterialTableToggle({ material }: Props) {
    const today = moment();
    const {
        selectedMaterial,
        collectionRef,
        selectedDocId,
        selectedIndex,
        setIsEditing,
    } = useContext(MaterialTableContext);
    const [editFile, setEditFile] = useState(false);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: useMemo(() => {
            if (selectedMaterial) {
                return selectedMaterial;
            }
        }, [selectedMaterial]),
    });

    useEffect(() => {
        if (selectedMaterial) {
            reset(selectedMaterial);
        }
    }, [selectedMaterial]);

    const addMutation = useFirestoreCollectionMutation(collectionRef);
    const updateMutation = useFirestoreDocumentMutation(
        doc(collection(db, material), `${selectedDocId}`),
        { merge: true }
    );

    const onAddMaterial: SubmitHandler<Inputs> = (data) => {
        uploadFileAndAddDoc(data, addMutation);
    };

    function uploadFileAndAddDoc(data: Inputs, mutation: any) {
        let file = data.materialFile[0];
        if (file) {
            const storageRef = ref(
                storage,
                material === "학습 자료"
                    ? "documents/studyMaterials/" + file.name
                    : "documents/paperMaterials/" + file.name
            );
            const uploadFile = uploadBytesResumable(storageRef, file);

            uploadFile.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% now");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Uploading");
                            break;
                    }
                },

                (error) => {
                    switch (error.code) {
                        case "storage/unauthorized":
                            console.log(error);
                            break;
                        case "storage/canceled":
                            console.log(error);
                            break;
                        case "storage/unknown":
                            console.log(error);
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadFile.snapshot.ref).then(
                        (downloadURL) => {
                            addMutation.mutate({
                                title: data.title, // 제목
                                writer: data.writer, // 작성자
                                createdAt: today.format("YYYYMMDDHHmmss"),
                                fileUrl: downloadURL, // 첨부파일 주소
                                content: data.content,
                                material: material, // 학습 자료 | 논문
                            });
                        }
                    );
                }
            );
        } else {
            addMutation.mutate({
                title: data.title, // 제목
                writer: data.writer, // 작성자
                createdAt: today.format("YYYYMMDDHHmmss"), // 등록일
                content: data.content, // 게시글 본문
                fileUrl: "empty", // 첨부파일 주소
                material: material,
            });
        }
        setIsEditing(false);
    }

    const onUpdateMaterial: SubmitHandler<Inputs> = (data) => {
        if (editFile) {
            uploadFileAndAddDoc(data, updateMutation);
        } else {
            updateMutation.mutate({
                title: data.title, // 제목
                writer: data.writer, // 작성자
                contetn: data.content, // 내용
            });
        }
        setIsEditing(false);
    };

    return (
        <form
            className='relative w-full flex-col items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 text-xs sm:text-sm '
            onSubmit={
                selectedMaterial
                    ? handleSubmit(onUpdateMaterial)
                    : handleSubmit(onAddMaterial)
            }
        >
            {/* input */}
            <div className='flex h-10 items-center justify-around'>
                <div className='w-[5%] text-center'>{selectedIndex + 1}</div>
                <label className='w-[45%] p-1'>
                    <input
                        className=' w-full border border-gray-700 text-center'
                        placeholder='자료명'
                        {...register("title", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[15%] p-1'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='작성자'
                        {...register("writer", {
                            required: true,
                        })}
                    />
                </label>

                {selectedMaterial ? (
                    <label className='w-[15%] text-right'>
                        {`${selectedMaterial.createdAt.slice(
                            0,
                            4
                        )}-${selectedMaterial.createdAt.slice(
                            4,
                            6
                        )}-${selectedMaterial.createdAt.slice(6, 8)}`}
                    </label>
                ) : (
                    <label className='w-[15%] text-right'>
                        {today.format("YYYY-MM-DD")}
                    </label>
                )}

                {selectedMaterial && !editFile ? (
                    <div className='flex w-[20%] items-center'>
                        <label className='items-left flex h-12 w-full justify-center self-center'>
                            {selectedMaterial.fileUrl == "empty" ? (
                                <input
                                    className='w-full self-center pl-5 text-xs'
                                    type='file'
                                    {...register("materialFile", {
                                        // required: selectedNews ? false : true
                                        required: false,
                                    })}
                                />
                            ) : (
                                <IconButton
                                    className='flex self-center text-black hover:underline hover:underline-offset-2'
                                    onClick={() => setEditFile(true)}
                                >
                                    <ImFileText2 className='ml-2' size={20} />
                                </IconButton>
                            )}
                        </label>
                        <label className='w-15 absolute right-2 z-50 hidden bg-gray-100 text-sm lg:flex'>
                            <input type='submit' className=' border p-1' />
                            <MaterialTableCancelButton />
                        </label>
                    </div>
                ) : (
                    <>
                        <label className='flex w-[20%] items-center text-right'>
                            <input
                                className='w-full pl-5 text-xs'
                                type='file'
                                {...register("materialFile", {
                                    required: false,
                                })}
                            />
                            <label className='w-15 absolute right-2 hidden bg-gray-100 text-sm lg:flex'>
                                <input type='submit' className=' border p-1' />
                            </label>
                        </label>
                    </>
                )}
            </div>
            <label>
                <textarea
                    defaultValue={
                        "작성할 내용이 있다면 작성해주세요. 없다면 바로 제출해주세요."
                    }
                    className='w-full border-gray-700 pl-5 text-sm'
                    {...register("content", {
                        required: true,
                    })}
                />
            </label>
        </form>
    );
}

export default MaterialTableToggle;

// 파일 추가할때 첨부파일이랑 제출/취소버튼 겹침
// 취소버튼은 헤더에도 포함된 기능이므로 중복된 기능 => 제거
// 제출버튼은 조건이 모두 만족되면 visible하게 설정해보기!
