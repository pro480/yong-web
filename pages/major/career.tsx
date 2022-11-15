import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import styles from "../../src/styles/styles.module.css";


function Career() {
    return (
        <div className="relative pt-12">
            <main className='relative flex flex-col gap-y-12'>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative hidden items-center sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full'>
                            <h1 className='xs:text-lg sm:text-xl md:text-2xl font-bold'>
                                중등학교 교사
                            </h1>
                            <div className="border-b"></div>
                            <p className='mt-1 text-[0.925rem] xs:mt-2'>
                                교육학 전공 또는 희망하는 교과목에 대해 부전공이나 
                                복수전공을 하면 중등학교 2급 정교사 자격증을 얻을 수 있다. 
                                이후 임용고시를 통과하거나 소정의 공채과정을 통해서 중등학교의 
                                교사로서 취업할 수 있다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full'>
                            <h1 className='xs:text-lg sm:text-xl md:text-2xl font-bold'>
                                대학교수 및 교육연구전문가
                            </h1>
                            <div className="border-b"></div>
                            <p className='mt-1 text-[0.925rem] xs:mt-2'>
                                교육학은 다른 인문학 관련 학과에 비해서 대학과 연구기관의
                                수요가 많은 편이므로,대학원을 진학해서 박사학위를 취득한 후 
                                대학교수가 되거나 교육연구기관의 연구원이 되는 것이 이 분야의 
                                진출에 유리하다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full'>
                            <h1 className='xs:text-lg sm:text-xl md:text-2xl font-bold'>
                                기업체의 HRD 전문가
                            </h1>
                            <div className="border-b"></div>
                            <p className='mt-1 text-[0.925rem] xs:mt-2'>
                                HRD 및 교육공학 관련 교과목들을 통해 최근
                                기업체에서 활성화되고 있는 인적자원개발교육, 연수 
                                교육에 대한 교육적 지식을 쌓고, 또한 대학원에 진학하여 
                                전문적인 지식을 습득할 경우 취업에 유리하다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full'>
                            <h1 className='xs:text-lg sm:text-xl md:text-2xl font-bold'>
                                교육공무원 및 교육행정전문가
                            </h1>
                            <div className="border-b"></div>
                            <p className='mt-1 text-[0.925rem] xs:mt-2'>
                                교육 분야 행정고등고시, 공무원공채를 통해서
                                교육행정전문가로 진출할 수 있다. 최근 전문적인
                                지식을 갖춘 대학행정직원이 필요성이 대두됨에 따라
                                어학과 교육학적 지식을 함께 갖추는 것이 중요하다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full'>
                            <h1 className='xs:text-lg sm:text-xl md:text-2xl font-bold'>
                                상담전문가
                            </h1>
                            <div className="border-b"></div>
                            <p className='mt-1 text-[0.925rem] xs:mt-2'>
                                상담관련 과목의 이수를 통해 상담자로서의 전문적 자질과 
                                능력을 갖춘다면 국가차원의 청소년상담시설, 기업체의 
                                상담관련부서, 대학의 상담기관, 사설상담기관 등에서 
                                보다 원활한 상담 활동이 가능하다.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Career;


// 글자 수: 공백포함 120자 제한 권고 요청