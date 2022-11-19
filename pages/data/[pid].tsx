import { withRouter } from "next/router";
import useAuth from "../../src/hooks/useAuth";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Post({ router: { query } }: any) {
    const { user } = useAuth();
    return (
        <div>
            <HeadMeta title={"EBA | "+query.title} description={"상세페이지입니다"}/>
            <table className='w-full table-auto border-t border-t-black'>
                <thead>
                    <tr className='h-16 bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-700'>
                        <th className='text-center sm:text-sm md:text-lg lg:text-base'>
                            {query.title}
                        </th>
                    </tr>
                </thead>
            </table>

            <div className='relative w-full pb-10 text-[13px] font-light text-gray-600 sm:text-lg'>
                <tr>
                    <th
                        scope='row'
                        className='absolute right-40 flex pr-6 sm:right-60 '
                    >
                        작성일 :
                    </th>
                    <td className='absolute right-28 flex sm:right-40'>
                        {query.createdAt}
                    </td>

                    <th
                        scope='row'
                        className='absolute right-10 flex sm:right-16'
                    >
                        작성자 :
                    </th>
                    <td className='absolute right-0 flex'>{query.writer}</td>
                </tr>
            </div>

            <div className='pt-10'>
                <div className='m-5 grid grid-cols-4 border  border-gray-400 text-[12px]  md:text-sm xl:text-lg '>
                    {/* 제목 */}
                    <div className='col-span-4 flex border-b border-gray-300 '>
                        <div className='text-bold w-[15%] border-b  border-gray-300 bg-gray-200 p-2 text-center text-black md:w-[12%] lg:w-[10%]'>
                            제목
                        </div>
                        <div className='w-[85%] p-2 md:w-[88%] lg:w-[90%]'>
                            {query.title}
                        </div>
                    </div>

                    {/* 유형 */}
                    <div className='col-span-2 flex border-b border-gray-300 '>
                        <div className='w-[30%] border-b border-gray-300 bg-gray-200 p-2 text-center text-black md:w-[24%] lg:w-[20%]'>
                            유형
                        </div>
                        <div className='w-[70%] p-2 md:w-[76%] lg:w-[80%]'>
                            논문
                        </div>
                    </div>

                    {/* 학회지 */}
                    <div className='col-span-2 flex border-b border-gray-300 '>
                        <div className='w-[38%] border-b border-gray-300 bg-gray-200 p-2 text-center text-black md:w-[30%] lg:w-[20%]'>
                            학회지
                        </div>
                        <div className='w-[62%] p-2 md:w-[70%] lg:w-[80%]'>
                            {query.type}
                        </div>
                    </div>

                    {/* 연구자 */}
                    <div className='col-span-2 flex '>
                        <div className='w-[30%] bg-gray-200 p-1 text-center text-[11px] text-black sm:text-sm md:w-[24%] md:text-sm lg:w-[20%] xl:text-lg'>
                            연구자
                        </div>
                        <div className='w-[70%] p-2 md:w-[76%] lg:w-[80%]'>
                            {query.researcher}
                        </div>
                    </div>

                    {/* 발행년도 */}
                    <div className='col-span-2 flex'>
                        <div className='w-[38%] bg-gray-200 p-1 text-center text-[11px] text-black sm:text-sm md:w-[30%] md:text-sm lg:w-[20%] xl:text-lg'>
                            발행년도
                        </div>
                        <div className='w-[62%] p-2 md:w-[70%] lg:w-[80%]'>
                            {query.year}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Post);
