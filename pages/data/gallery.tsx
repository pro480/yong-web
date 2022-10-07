import React from "react";
import PageTitle from "../../src/components/PageTitle";


function Gallery() {
    return (
        <div>
            <PageTitle
                    title='갤러리'
                    description='갤러리 페이지의 설명을 입력해주세요.'
                    firstDepth='자료실'
                    firstLink='/data'
                    secondDepth='갤러리'
                    secondLink='/data/gallery'
                />
                <div className=" h-full w-full flex-col justify-around ">
                   <div className="  flex flex-wrap  ">
                        <div className=" h-[450px] w-[500px] container m-auto flex-col justify-between bg-gray-500"> 
                            <div className="m-5 bg-gray-300 flex items-center justify-center">이미지1을 넣어주세요</div>
                            <div className="m-5 h-[150px] flex items-center justify-center">설명1을 넣어주세요</div>
                        </div>
                        <div className=" h-1/2 w-[500px] container m-auto flex-col justify-between"> 
                            <div className="h-[300px] bg-gray-300 flex items-center justify-center">이미지2을 넣어주세요</div>
                            <div className="m-5 h-[150px] bg-gray-300 flex items-center justify-center">설명2을 넣어주세요</div>
                        </div>
                        <div className=" h-1/2 w-[500px] container m-auto flex-col justify-between"> 
                            <div className="h-[300px] bg-gray-300 flex items-center justify-center">이미지3을 넣어주세요</div>
                            <div className="m-5 h-[150px] bg-gray-300 flex items-center justify-center">설명3을 넣어주세요</div>
                        </div>
                        <div className=" h-1/2 w-[500px] container m-auto flex-col justify-between"> 
                            <div className="h-[300px] bg-gray-300 flex items-center justify-center">이미지4을 넣어주세요</div>
                            <div className="m-5 h-[150px] bg-gray-300 flex items-center justify-center">설명4을 넣어주세요</div>
                        </div>


                   </div>
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


export default Gallery;
