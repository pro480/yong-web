import React from "react";
import PageTitle from "../../src/components/PageTitle";
import { FaChalkboardTeacher } from "react-icons/fa";
import styles from "../../src/styles/styles.module.css";

function Vision() {
    return (
        <div>
            <PageTitle
                title='졸업 후 진로'
                description='졸업 후 진로에 대한 설명을 적어주세요'
                firstDepth='전공 소개'
                firstLink='/major'
                secondDepth='졸업 후 진로'
                secondLink='/major/vision'
            />
            <div className=' bg-gray-300'>
                아래 정보는 https://ed.pusan.ac.kr/ed/15379/subview.do 를 참고한
                것이며 교수님께서 아래 컨텐츠에 들어갈 내용을 주시면 내용을
                변경하도록 하겠습니다.
            </div>

            <div className='mb-12 mt-4 flex border'>
                <div className=' flex h-[200px] w-[400px] items-center justify-center bg-gray-300'>
                    이미지를 넣어주세요
                </div>
                <div className='w-full px-6 pt-5'>
                    <h1 className='mb-8 font-semibold'>취업진로분야</h1>
                    <p>
                        교육학과의 졸업 후 진로는 중등학교 교사, 대학교수,
                        평생교육사, 일반기업체, 기업교육전문가, 교육공무원,
                        교육행정가 전문가, 상담전문가, 사설 교육훈련 및
                        입시전문기관의 교육전문요원 등 매우 다양한 분야에 진출할
                        수 있다. 현재 교육학과 동문들은 다양한 분야에서 활동하고
                        있으며, 학문의 사회적 환원과 지역사회의 발전에 공헌하고
                        있다.
                    </p>
                </div>
            </div>

            <main className='flex flex-col gap-y-12'>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full pt-6'>
                            <h1 className='text-2xl font-bold'>
                                중등학교 교사
                            </h1>
                            <p className='mt-2'>
                                교육학 전공 또는 학생이 희망하는 교과목에 대해
                                부전공이나 복수전공을 하면 중등학교 2급 정교사
                                자격증을 얻을 수 있다.
                                <br /> 교사자격증을 획득한 다음 임용고시를
                                통과하거나 아니면 소정의 공채과정을 통해서
                                중등학교의 교사로서 취업할 수 있다 .
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full pt-6'>
                            <h1 className='text-2xl font-bold'>
                                대학교수 및 교육연구전문가
                            </h1>
                            <p className='mt-2'>
                                대학원을 진학해서 박사학위를 취득한 후
                                대학교수가 되거나 교육연구기관의 연구원이 될 수
                                있다. 교육학은 어떠한 인문학 관련 학과에 비해서
                                대학과 연구기관의 수요가 많은 편이므로,
                                상대적으로 이 분야의 진출이 유리하다 .
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full pt-6'>
                            <h1 className='text-2xl font-bold'>
                                기업체의 HRD 전문가
                            </h1>
                            <p className='mt-2'>
                                교육학과의 학부개설과목 중에는 HRD 및 교육공학
                                관련 교과목이 다수 있다. 이 과목들을 통해 최근
                                기업체에서 활성화되고 있는 인적자원개발교육,
                                연수 교육에 대한 교육적 지식을 쌓으면 기업체에
                                취업이 가능하며, 또한 대학원에 진학하여 전문적인
                                지식을 습득할 경우 이 분야의 취업에 더욱
                                유리하다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full pt-6'>
                            <h1 className='text-2xl font-bold'>
                                교육공무원 및 교육행정전문가
                            </h1>
                            <p className='mt-2'>
                                교육 분야 행정고등고시, 공무원공채를 통해서
                                교육행정전문가로 진출할 수 있다. 최근 전문적인
                                지식을 갖춘 대학행정직원이 필요성이 대두됨에
                                따라 어학과 교육학적 지식을 함께 갖춘다면 이
                                분야의 진출에 유리하다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full pt-6'>
                            <h1 className='text-2xl font-bold'>상담전문가</h1>
                            <p className='mt-2'>
                                교육학과에서 개설되는 상담관련 과목의 이수를
                                통해 상담자로서의 전문적 자질과 능력을 갖춘다면
                                국가차원의 청소년상담시설, 기업체의
                                상담관련부서, 대학의 상담기관, 사설상담기관
                                등에서 상담 활동이 가능하다. 상담전문가가 되기
                                위해서는 석사과정 이수는 필수적이다.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Vision;
