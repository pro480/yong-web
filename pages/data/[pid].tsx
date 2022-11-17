import { withRouter } from "next/router";
import useAuth from "../../src/hooks/useAuth";

function Post({ router: { query } }: any) {
    const { user } = useAuth();
    return (
        <div>
            <table className='w-full table-auto border-t border-t-black'>
                <thead>
                    <tr className='h-16 bg-PRIMARY_COLOR-500/40 text-sm uppercase leading-normal text-gray-700'>
                        <th className='text-center sm:text-sm md:text-lg lg:text-base'>
                            {query.title}
                        </th>
                    </tr>
                </thead>
            </table>

            <div className='relative w-full pb-10 text-sm font-light text-gray-600 sm:text-lg'>
                <tr>
                    <th
                        scope='row'
                        className='absolute right-40 flex pr-6 sm:right-60'
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
                <div className='m-5 grid w-[1050px]  grid-cols-4 border border-gray-400 text-lg '>
                    {/* 제목 */}
                    <div className='col-span-4 flex border-b border-gray-300'>
                        <div className='text-bold w-[10%]  border-b border-gray-300 bg-gray-200 p-2 text-center text-black'>
                            제목
                        </div>
                        <div className='w-[90%] p-2'>{query.title}</div>
                    </div>

                    {/* 학회지 */}
                    <div className='col-span-4 flex border-b border-gray-300 '>
                        <div className='w-[10%] border-b border-gray-300 bg-gray-200 p-2 text-center text-black'>
                            학회지
                        </div>
                        <div className='w-[90%] p-2'>{query.type}</div>
                    </div>

                    {/* 연구자 */}
                    <div className='col-span-2 flex '>
                        <div className='w-[20%] bg-gray-200 p-2 text-center text-black'>
                            연구자
                        </div>
                        <div className='w-[80%] p-2'>{query.researcher}</div>
                    </div>

                    {/* 발행년도 */}
                    <div className='col-span-2 flex'>
                        <div className='w-[20%] bg-gray-200 p-2 text-center text-black'>
                            발행년도
                        </div>
                        <div className='w-[80%] p-2'>{query.year}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Post);
