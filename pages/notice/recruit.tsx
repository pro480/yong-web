import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { db, storage } from "../../firebase";
import useAuth from "../../src/hooks/useAuth";
import {
    useFirestoreCollectionMutation,
    useFirestoreQuery,
} from "@react-query-firebase/firestore";
import { collection } from "@firebase/firestore";
import moment from "moment";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Recruit() {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [width, setWidth] = useState(0);
    const { user } = useAuth();
    const collectionRef = collection(db, "recruit");
    const collectionQuery = useFirestoreQuery(["recruit"], collectionRef, {
        subscribe: true,
    });

    const pdfUrl = collectionQuery.data?.docs
        .sort((a, b) => b.data().createdAt - a.data().createdAt)[0]
        .data().imageUrl;

    const inputRef = useRef<HTMLInputElement>(null);
    const addMutation = useFirestoreCollectionMutation(collectionRef);

    useEffect(() => {
        if (window.innerWidth > 1020) {
            setWidth(1000);
        } else if (window.innerWidth > 820) {
            setWidth(800);
        } else {
            setWidth(450);
        }

        const handleScreen = () => {
            if (window.innerWidth > 1020) {
                setWidth(1000);
            } else if (window.innerWidth > 820) {
                setWidth(800);
            } else {
                setWidth(450);
            }
        };
        window.addEventListener("resize", handleScreen);
        return () => {
            window.removeEventListener("resize", handleScreen);
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function uploadRecruit(data: File, mutation: any) {
        let file = data;
        const storageRef = ref(
            storage,
            "files/recruit" + moment().format("YYYYMMDDHHmmss")
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
                        imageUrl: downloadURL, // 사진 주소
                        createdAt: moment().format("YYYYMMDDHHmmss"),
                    });
                });
            }
        );
    }

    return (
        <div>
            <HeadMeta
                title={"EBA | 연구원 모집"}
                description={"EBA센터 연구원 모집 공고입니다"}
            />
            {user && (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <button
                        className='w-16 border bg-PRIMARY_COLOR-100 text-white'
                        onClick={(e) => {
                            e.preventDefault();
                            if (inputRef.current !== null) {
                                inputRef.current.click();
                            }
                        }}
                    >
                        변경
                    </button>
                    <input
                        type='file'
                        name='image'
                        multiple
                        hidden
                        ref={inputRef}
                        onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                uploadRecruit(e.target.files[0], addMutation);
                            }
                        }}
                    />
                </form>
            )}
            <div className='flex w-full justify-center '>
                <Document
                    className='border'
                    file={pdfUrl} // 여기는 가지고 계신 pdf 주소
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {/* height, width는 number 타입으로 vh, %는 먹지 않습니다. */}
                    <Page
                        pageNumber={pageNumber}
                        className='w-full'
                        width={width}
                    />
                </Document>
            </div>
        </div>
    );
}

export default Recruit;
