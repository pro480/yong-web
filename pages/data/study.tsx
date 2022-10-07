import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Study() {
    return (
    <div>
        <PageTitle
                title='학습 자료'
                description='학습 자료 페이지의 설명을 입력해주세요.'
                firstDepth='자료실'
                firstLink='/data'
                secondDepth='학습 자료'
                secondLink='/data/study'
            />

<div className=" h-full w-full flex-col justify-around ">
                <div className=" m-5 flex justify-between"> 
                    <span className="text-xl text-FOOTER_FONT_COLOR">
                        전체
                        <strong className=" text-PRIMARY_COLOR">N</strong>
                        건
                    </span>
                    
                
                </div>
                
                <table className="  table-auto">
                    <thead className="text-lg text-black bg-gray-200  border-y-2 border-black">
                        <tr>
                            <th scope="col" className="py-3 px-6 w-1/6">자료 번호</th>
                            <th scope="col" className="py-3 px-6 w-fit">자료 제목</th>
                            <th scope="col" className="py-3 px-6 w-1/6">조회수</th>
                            <th scope="col" className="py-3 px-6 w-1/12">파일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">1</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">2</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">3</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">4</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">5</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">6</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">7</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">8</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">9</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">10</th>
                            <th scope="row" className="py-3 px-6 font-medium ">2020 1학기 중간고사</th>
                            <th scope='row' className="py-3 px-6 font-medium ">0</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    

                            </th>
                        </tr>
                        
                    </tbody>
                </table>

                <div className=" m-5 flex justify-center items-center">
                            
                    <ul className="inline-flex items-center -space-x-px ">
                        <li>
                            <a href="#" aria-current="page" className="py-2 px-3 text-sm text-PRIMARY_COLOR border border-PRIMARY_COLOR bg-white hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR m-1"></a>
                        </li>
                        
                        <li>
                            <a href="#" aria-current="page" className="py-2 px-3 text-sm text-PRIMARY_COLOR border border-PRIMARY_COLOR bg-white hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR m-1">1</a>
                        </li>
                        
                        <li>
                            <a href="#" className="py-2 px-3 text-sm text-PRIMARY_FONT_COLOR border border-black bg-white hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR m-1">2</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 px-3 text-sm text-PRIMARY_FONT_COLOR border border-black bg-white hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR m-1">3</a>                        
                        </li>
                        
                        <li>
                            <a href="#" className="py-2 px-3 text-sm text-PRIMARY_FONT_COLOR border border-black bg-white hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR m-1">4</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 px-3 text-sm text-PRIMARY_FONT_COLOR border border-black bg-white hover:bg-FOOTER_FONT_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR m-1">5</a>
                        </li>
                       
                        
                    </ul>
                    

    

        
    
                </div>


            </div>




    </div>
    )
}

export default Study;
