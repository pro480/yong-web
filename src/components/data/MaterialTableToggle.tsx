import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Material, PaperMaterial, StudyMaterial } from "../../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc, } from "@firebase/firestore";
import { db, storage } from "../../../firebase";
import { MaterialTableContext } from "./MaterialTable";
import { MaterialTableCancelButton } from "./MaterialTableButton";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { UseMutationResult } from "react-query";
import moment from "moment";
import { fill } from "lodash";
import { ImFileText2 } from "react-icons/im";
import data from "../../../pages/data";

interface Inputs {
    title: string; // 자료명
    writer: string; // 작성자
    date: string; // 등록일
    materialFile: File[]; // 첨부파일
}

interface Props {
    material: Material;
}

function MaterialTableToggle({ material }: Props) {
    const today = moment();
    const { selectedMaterial, collectionRef, selectedDocId, selectedIndex, setIsEditing } = useContext(MaterialTableContext);
    const [editFile, setEditFile] = useState(false);
    const { register, reset, handleSubmit, formState: {errors} } = useForm<Inputs>({
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
        doc(
            collection(
                db, 
                material
            ), 
            `${selectedDocId}`
        ),
        { merge: true }
    );

    const onAddMaterial: SubmitHandler<Inputs> = (data) => {
        uploadFileAndAddDoc(data, addMutation);
    };

    function uploadFileAndAddDoc(data: Inputs, mutation: any) {
        let file = data.materialFile[0];
        const storageRef = ref(
            storage, 
            (material === "학습 자료") ? "documents/studyMaterials/" + file.name : "documents/paperMaterials/" + file.name
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
                getDownloadURL(uploadFile.snapshot.ref).then((downloadURL) => {
                    addMutation.mutate({
                        title: data.title, // 제목
                        writer: data.writer, // 작성자
                        // date: data.date, // 등록일
                        date: today.format(),
                        fileUrl: downloadURL, // 첨부파일 주소
                        material: material, // 학습 자료 | 논문
                    });
                });
                setIsEditing(false);
            }
        );
    };

    const onUpdateMaterial: SubmitHandler<Inputs> = (data) => {
        if (editFile) {
            uploadFileAndAddDoc(data, updateMutation);
        } else {
            updateMutation.mutate({
                title: data.title, // 제목
                writer: data.writer, // 작성자
            });
        }
        setIsEditing(false);
    };

    return (
        <form
            className='relative flex-col w-full items-center justify-around border-b border-gray-200 bg-GRAY_COLOR-200 '
            onSubmit={
                selectedMaterial
                    ? handleSubmit(onUpdateMaterial)
                    : handleSubmit(onAddMaterial)
            }
        >
            {/* input */}
            <div className="flex items-center justify-around h-10">
                <div className='w-[5%] text-center'>{selectedIndex + 1}</div>
                <label className='w-[30%]'>
                    <input
                        className=' w-full border border-gray-700 text-center'
                        placeholder='자료명'
                        {...register("title", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[15%]'>
                    <input
                        className='w-full border border-gray-700 text-center'
                        placeholder='작성자'
                        {...register("writer", {
                            required: true,
                        })}
                    />
                </label>

                {selectedMaterial?(
                    <label className='w-[15%] text-center'>
                        {selectedMaterial.date.substring(0,10)}
                    </label>
                ) : (
                    /*  input type:data로 받는 방법
                        <label className='w-[15%]'>
                            <input
                                className='w-full'
                                type='date'
                                defaultValue={today.format('YYYY-MM-DD')}
                                {...register("date", { 
                                    required: selectedMaterial ? false : true 
                                })}
                            />
                        </label>
                    */
                    
                    <label className='w-[15%] text-center'>
                        {today.format("YYYY-MM-DD")}
                    </label>
                )}

                {selectedMaterial && !editFile? (     
                    <label className='w-[20%] flex text-center text-xs'>
                        {/* 파일 아이콘 있는 버전
                        <a 
                            className='w-1/2 hover:underline hover:underline-offset-2'
                            href={selectedMaterial.fileUrl}
                        >
                            <ImFileText2 className='ml-2' size={20} />
                        </a> 
                        */}
                        {/* 파일 아이콘 없는 버전 */}
                        <div className="w-1/2"></div>
                        <button
                            className='w-1/2 z-50 border bg-GRAY_COLOR-600 text-sm'
                            onClick={() => setEditFile(true)}
                        >
                            파일 수정
                        </button>
                    </label>
                
                    
                ) : (
                    <label className='w-[20%] flex text-xs'>
                        <input
                            className='w-full'
                            type='file'
                            {...register("materialFile", { 
                                required: selectedMaterial ? false : true 
                            })}
                        />
                    </label>
                )}

                <label className='w-15 flex text-xs'>
                    <input type='submit' className=' border p-1' />
                    <MaterialTableCancelButton />
                </label> 
            </div>
        </form>
    );
}

export default MaterialTableToggle;