import Router, { useRouter, withRouter } from "next/router";
import { ImFileText2 } from "react-icons/im";
import Image from "next/image";
import { query } from "firebase/firestore";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

export default function Post() {
    const router = useRouter();
    const { title, type, writer, createdAt, fileUrl, content } = router.query;

    // ssr 적용
    // pathname에 docId를 넣어버려서 docId에서 정보를 가져오는 것도 가능할듯?

    return (
        <>
            <HeadMeta title={"EBA | "+title} description={"공지사항 게시물입니다"}/>
            <table className='w-full table-auto border-t border-t-black'>
                <thead>
                    <tr className='h-16 bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-700'>
                        <th className='text-center sm:text-sm md:text-lg lg:text-base'>
                            {title}
                        </th>
                    </tr>
                </thead>
            </table>

            <div className='relative w-full pb-10 text-[13px] font-light text-gray-600 sm:text-lg'>
                <tr>
                    <th
                        scope='row'
                        className='absolute right-40 flex pr-6 sm:right-60'
                    >
                        작성일 :
                    </th>
                    <td className='absolute right-28 flex sm:right-40'>
                        {createdAt}
                    </td>

                    <th
                        scope='row'
                        className='absolute right-10 flex sm:right-16'
                    >
                        작성자 :
                    </th>
                    <td className='absolute right-0 flex'>{writer}</td>
                </tr>
            </div>

            {type == "행사 소식" ? (
                <div className='flex justify-center pt-10'>
                    <Image
                        src={`${fileUrl}`}
                        width={1000}
                        height={1410}
                        alt='행사 소식 이미지'
                    />
                </div>
            ) : (
                <label className='relative flex h-12 w-full'>
                    <a
                        className='absolute right-1 flex hover:underline hover:underline-offset-2'
                        href={`${fileUrl}`}
                    >
                        <div className='flex cursor-pointer hover:scale-105'>
                            {fileUrl == "empty" ? (
                                <></>
                            ) : (
                                <>
                                    <text className='pr-2'>
                                        첨부파일 다운로드하기
                                    </text>
                                    <ImFileText2
                                        className='ml-2 cursor-pointer hover:scale-110'
                                        size={20}
                                    />
                                </>
                            )}
                        </div>
                    </a>
                </label>
            )}

            <table className='table'>
                <tbody className='text-lg font-light text-gray-600'>
                    <th scope='col' className='text-left'></th>
                    <tr>
                        <td className='pt-5'>{content}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
