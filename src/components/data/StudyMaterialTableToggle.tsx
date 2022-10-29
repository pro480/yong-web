import React, { useContext, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Material } from "../../../typing";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocumentMutation,
} from "@react-query-firebase/firestore";
import { collection, doc } from "@firebase/firestore";
import { db, storage } from "../../../firebase";
import { StudyMaterialTableContext } from "./StudyMaterialTable";
import { MaterialTableCancelButton } from "./StudyMaterialTableButton";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

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
    const { selectedMaterial, collectionRef, selectedDocId, selectedIndex } =
        useContext(StudyMaterialTableContext);

    const { register, reset, handleSubmit } = useForm<Inputs>({
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
        doc(collection(db, "studyMaterial"), `${selectedDocId}`),
        { merge: true }
    );
    
    const [editFile, setEditFile] = useState(false);

    const onAddMaterial: SubmitHandler<Inputs> = (data) => {
        console.log(data.materialFile);
        let file = data.materialFile[0];
        const storageRef = ref(storage, "documents/studyMaterials/" + file.name);
        const uploadFile = uploadBytesResumable(storageRef, file);

        uploadFile.on(
            "state_changed",
            (snapshot) => {
                // 파일 업로드가 얼마나 진행됐는지 알려주는 상태
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
            // 여기서부터...
            () => {
                // 업로드가 성공하면 업로드 주소를 가져오고 addMutation.mutate 함수를 실행해 문서를 추가한다
                getDownloadURL(uploadFile.snapshot.ref).then((downloadURL) => {
                    addMutation.mutate({
                        title: data.title, // 제목
                        writer: data.writer, // 작성자
                        date: data.date, // 등록일
                        fileUrl: downloadURL, // 첨부파일 주소
                        material: material,
                    });
                });
            }
        );
    };

    const onUpdateMaterial: SubmitHandler<Inputs> = (data) => {
        if (editFile) {
            let file = data.materialFile[0];
            const storageRef = ref(storage, "documents/studyMaterials/" + file.name);
            const uploadFile = uploadBytesResumable(storageRef, file);

            uploadFile.on(
                "state_changed",
                (snapshot) => {
                    // 파일 업로드가 얼마나 진행됐는지 알려주는 상태
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
                    getDownloadURL(uploadFile.snapshot.ref).then(
                        (downloadURL) => {
                            updateMutation.mutate({
                                title: data.title, // 제목
                                writer: data.writer, // 작성자
                                date: data.date, // 등록일
                            });
                        }
                    );
                }
            );
        } else {
            updateMutation.mutate({
                title: data.title, // 제목
                writer: data.writer, // 작성자
                date: data.date, // 등록일
            });
        }
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
            {/* {material === "학습 자료"} */}
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
                <label className='w-[15%]'>
                    <input
                        className=' w-full border border-gray-700 text-center' 
                        type='date'
                        {...register("date", {
                            required: true,
                        })}
                    />
                </label>
                <label className='w-[20%] flex text-xs'>
                    <input
                        className='w-full'
                        type='file'
                        {...register("materialFile", { required: true })}
                    />
                </label>
                <label className='w-15 flex text-xs'>
                    <input type='submit' className=' border p-1' />
                    <MaterialTableCancelButton />
                </label> 
            </div>
        </form>
    );
}

export default MaterialTableToggle;


{/* <div className="w-[20%]">
    {selectedMaterial && !editFile ? (
        <div className='relative w-1/4 flex-col border p-2'>
            <button
                className='absolute right-2 bottom-2 z-50 border bg-GRAY_COLOR-600 text-sm'
                onClick={() => setEditFile(true)}
            >
                파일 선택
            </button>
        </div>
    ) : (
        <div className='w-1/4 flex-col border p-2'>
            <label>
                <input
                    type='file'
                    {...register("fileTitle", { required: true })}
                />
            </label>
        </div>
    )}
</div> */}