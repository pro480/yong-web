import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import { FaChalkboardTeacher } from "react-icons/fa";
import styles from "../../src/styles/styles.module.css";
import MajorBanner from "../../src/components/major/MajorBanner";
import graduateCourseImage from "../../public/images/major/course.jpg"


function Vision() {
    return (
        <div className="relative">


            {/* 취업진로분야 -> 이미지로 대체
            - 적당한 관련 이미지를 찾지 못해서 샘플 이미지(course.jpg - 라이센스(courseLicense.pdf)로 대체
            - OrganizationBanner를 약간 변형시켜서 적용
            - 더욱 유연한 반응형 구현을 위해 tailwind.config.js에 xs속성을 추가했습니다.
            */}
            <MajorBanner
                title='취업 진로 분야'
                image={graduateCourseImage}
            />

            <main className='relative flex flex-col gap-y-12'>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative xs:hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full md:pt-6 xs:pt-0'>
                            <h1 className='text-2xl font-bold'>
                                중등학교 교사
                            </h1>
                            <p className='mt-2'>
                                교육학 전공 또는 학생이 희망하는 교과목에 대해
                                부전공이나 복수전공을 하면 중등학교 2급 정교사
                                자격증을 얻을 수 있다.
                                교사자격증을 획득한 다음 임용고시를
                                통과하거나 아니면 소정의 공채과정을 통해서
                                중등학교의 교사로서 취업할 수 있다 .
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className='relative xs:hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full md:pt-6 xs:pt-0'>
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
                        <div className='relative xs:hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full md:pt-6 xs:pt-0'>
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
                        <div className='relative xs:hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full md:pt-6 xs:pt-0'>
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
                        <div className='relative xs:hidden sm:flex w-36'>
                            <div className='absolute right-4 top-4 h-24 w-24 rounded-full bg-gray-300 p-6 '>
                                <FaChalkboardTeacher className='h-full w-full' />
                            </div>
                        </div>

                        <div className='w-full md:pt-6 xs:pt-0'>
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
