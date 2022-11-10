import React from "react";
import { NewspaperIcon } from "@heroicons/react/24/outline";

function ReportCard() {
    return (
        <div className='mb-3 flex w-full items-center border p-1 xs:mb-5 xs:p-2  md:mb-3 md:w-[32%] md:items-start md:p-3 lg:p-4 desktop:w-[30%] desktop:p-5'>
            <div className=' flex aspect-1/1 h-[25px] items-center justify-center  rounded-full bg-yellow-500 xs:h-[30px] md:h-[25px] lg:h-[30px] desktop:h-[50px]'>
                <NewspaperIcon className='h-full p-1 desktop:p-2' />
            </div>
            <div className='relative mt-1 ml-2 h-full w-full xs:mt-2 xs:ml-5 md:mt-0 md:ml-2 md:h-[450px] lg:h-[500px] desktop:ml-4 desktop:h-[550px]'>
                <div className='py-0.5 text-[11px] font-bold xs:text-[11px]  md:py-0 md:text-lg  lg:py-1   desktop:py-2 desktop:text-2xl'>
                    한국어 쓰기 평가를 위한 자동채점의 가능성 탐색
                </div>
                <p className=' hidden overflow-hidden text-ellipsis  md:mt-4 md:flex md:h-[60%] md:text-[15px] lg:mt-7 lg:h-[70%]  desktop:mt-10 desktop:text-[18px]'>
                    이용상･신동광･김현정. 2022. 3. 30. 한국어 쓰기 평가를 위한
                    자동채점의 가능성 탐색. 이중언어학 86, 00-00. 본 연구에서는
                    SKA 쓰기 자동채점의 가능성을 탐색하기 위해 SKA 예비 평가
                    답안 및 채점 자료를 활용하여 기계학습을 통한 채점 모형 구축
                    및 점수 예측을 실시하였다. 기계학습은 대표적 지도학습
                    알고리듬 중 하나인 랜덤 포레스트를 사용하였으며, 채점 모형의
                    성능은 정확도, 정밀도, 재현율, F1, 카파 값을 통해
                    비교하였다. 연구 결과 채점 영역 중 ‘언어사용’ 영역과 ‘내용’
                    영역에서의 채점 모형의 성능은 양호하게 나타났으며 이는 본
                    연구에서 활용한 기계학습에 대한 데이터가 매우 적고, SKA 쓰기
                    시험 문항에 특화된 채점 자질이 개발되지 않았음에도 불구하고
                    도출된 결과로 매우 고무적이라 할 수 있다. 특히 본 연구의
                    채점 모형을 이용하여 예측한 점수와 채점자가 부여한 점수 간의
                    상관 분석 결과, 두명의 채점자가 부여한 점수 간에 상관보다는
                    작게 나타났으나 그 차이가 약 .10 정도로 향후 충분한
                    기계학습용 데이터 확보와 채점 자질 최적화 그리고 채점 모형의
                    정교화를 통해 충분히 극복될 수 있는 수준인 것으로
                    판단된다.(인하대학교･광주교육대학교･세종학당재단)
                </p>
                <div className='absolute bottom-0 right-0 hidden xs:flex xs:h-2 xs:text-[1px]    md:text-[5px]   lg:text-[10px] desktop:text-[14px]'>
                    연구자 : 이용상, 신동관, 김현정
                </div>
            </div>
        </div>
    );
}

export default ReportCard;
