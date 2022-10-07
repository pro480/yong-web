import React from "react";
import PageTitle from "../../src/components/PageTitle";


function Index() {
    return (
        <div>
            <PageTitle
                    title='논문 및 연구 보고서'
                    description='논문 및 연구 보고서 페이지의 설명을 입력해주세요.'
                    firstDepth='자료실'
                    firstLink='/data'
                    secondDepth='논문 및 연구 보고서'
                    secondLink='/data'
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
                            <th scope="col" className="py-3 px-6 w-1/6">번호</th>
                            <th scope="col" className="py-3 px-6 w-fit">논문/연구 제목</th>
                            <th scope="col" className="py-3 px-6 w-1/6">논문/연구 저자</th>                        
                            <th scope="col" className="py-3 px-6 w-1/12">링크</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">1</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">2</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">3</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">4</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">5</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">6</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">7</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">8</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">9</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>
                        <tr className="border-b-2 border-gray-300">
                            <th scope='row' className="py-3 px-6 font-medium ">10</th>
                            <th scope="row" className="py-3 px-6 font-medium ">한국어 쓰기 평가를 위한 자동채점의 가능성 탐색</th>
                            <th scope='row' className="py-3 px-6 font-medium ">이용상</th>
                            <th scope = 'row' className="py-3 px-6 font-medium ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg></th>
                        </tr>

                    </tbody>
                </table>

                <div className=" m-5 flex justify-center items-center">
                            
                    <ul className="inline-flex items-center -space-x-px ">
                        
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


export default Index;
