import { useRouter } from 'next/router'
import { ImFileText2 } from 'react-icons/im';
import Image from "next/image";
import { query } from 'firebase/firestore';

function Post() {
    const router = useRouter()
    const {
        title, 
        type, 
        writer, 
        createAt, 
        fileUrl, 
        content, 
     } = router.query;

    // ssr 적용
    // pathname에 docId를 넣어버려서 docId에서 정보를 가져오는 것도 가능할듯?

    return (
        <>
        <table className='w-full table-auto border-t border-t-black'>
            <thead>
                <tr className='bg-PRIMARY_COLOR-500/40 h-16 text-sm uppercase leading-normal text-gray-700'>
                    <th className='text-center sm:text-sm lg:text-base md:text-lg'>{title}</th>
                </tr>
            </thead>
        </table>
        

        <div className='relative w-full text-sm sm:text-lg font-light text-gray-600 pb-10'>
            <tr>
                <th 
                    scope="row"
                    className='pr-6 absolute flex right-40 sm:right-60'>
                        작성일 :
                </th>
                <td
                    className='absolute flex right-28 sm:right-40'>
                        {createAt}
                </td>
            

                <th 
                    scope="row"
                    className='absolute flex right-10 sm:right-16'>
                        작성자 :
                </th>
                <td
                    className='absolute flex right-0'>
                        {writer}
                </td>

            </tr>
        </div>

        {type=="행사 소식" ? (
            <div className='pt-10 flex justify-center'>
                <Image 
                    src={`${fileUrl}`}
                    width={1000}
                    height={1410}
                    alt="행사 소식 이미지"
                />
            </div>
            
        ) : (

            <label className='relative flex h-12 cursor-pointer hover:scale-105 w-full'>
                <a
                    className='absolute flex hover:underline hover:underline-offset-2 right-1'
                    href={`${fileUrl}`}
                >
                    <text className='pr-2'>첨부파일 다운로드하기</text>
                    <ImFileText2 size={20} />
                </a>
            </label>
        )}       
            
        <table className="table">
            <tbody className='text-lg font-light text-gray-600'>
            <th 
                scope="col"
                className='text-left'>
            </th>
            <tr>
                <td className='pt-5'>
                    {content}
                </td>
            </tr>
            </tbody>
        </table>
      </>
    );
}

export default Post


