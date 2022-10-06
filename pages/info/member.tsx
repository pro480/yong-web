import React from "react";
import PageTitle from "../../src/components/PageTitle";

function Member() {
    return (
        <div>
            <PageTitle
                title='센터 구성원'
                description='센터 구성원 페이지입니다. 설명을 입력해주세요'
                firstDepth='센터 소개'
                firstLink='/info'
                secondDepth='센터 구성원'
                secondLink='/info/member'
            />
            {/*센터장 소개란*/}
            <section className='pb-12'>
                <header className='flex pb-12 '>
                    <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                        Center Leader
                    </h1>
                    <span className='w-full border-b'></span>
                </header>
                <div className='flex'>
                    <div className='mr-12 flex h-60 w-60 items-center justify-center bg-gray-300'>
                        구성원 사진을
                        <br />
                        넣어주세요.
                    </div>
                    <div>
                        <h1 className='pb-12 text-3xl font-semibold text-PRIMARY_COLOR'>
                            Yong Sang Lee
                        </h1>
                        <div>
                            이곳은 구성원 소개란 입니다.
                            <br />
                            <br />
                            구성원 소개글을 작성해주세요.
                        </div>
                    </div>
                </div>
            </section>
            {/*연구 자문단 소개란*/}
            <section className='pb-12'>
                <header className='flex pb-12 '>
                    <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                        Research Advisory Group
                    </h1>
                    <span className='w-full border-b'></span>
                </header>
                <article className='flex flex-wrap'>
                    <div className='flex w-1/2'>
                        <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                            구성원 사진을
                            <br />
                            넣어주세요.
                        </div>
                        <div>
                            <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                                Yong Sang Lee
                            </h1>
                            <div className="text-sm">
                                이곳은 구성원 소개란 입니다.
                                <br />
                                구성원 소개글을 작성해주세요.
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/2'>
                        <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                            구성원 사진을
                            <br />
                            넣어주세요.
                        </div>
                        <div>
                            <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                                Yong Sang Lee
                            </h1>
                            <div className="text-sm">
                                이곳은 구성원 소개란 입니다.
                                <br />
                                구성원 소개글을 작성해주세요.
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            {/*연구 윤리 자문단 소개란*/}
            <section className='pb-12'>
                <header className='flex pb-12 '>
                    <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                        Research Ethics Advisory Group
                    </h1>
                    <span className='w-full border-b'></span>
                </header>
                <article className='flex flex-wrap'>
                    <div className='flex w-1/2'>
                        <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                            구성원 사진을
                            <br />
                            넣어주세요.
                        </div>
                        <div>
                            <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                                Yong Sang Lee
                            </h1>
                            <div className="text-sm">
                                이곳은 구성원 소개란 입니다.
                                <br />
                                구성원 소개글을 작성해주세요.
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/2'>
                        <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                            구성원 사진을
                            <br />
                            넣어주세요.
                        </div>
                        <div>
                            <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                                Yong Sang Lee
                            </h1>
                            <div className="text-sm">
                                이곳은 구성원 소개란 입니다.
                                <br />
                                구성원 소개글을 작성해주세요.
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/*연구협력 네트워크 소개란*/}
            <section className='pb-12'>
                <header className='flex pb-12 '>
                    <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                        {" "}
                        Research Collaboration Network
                    </h1>
                    <span className='w-full border-b'></span>
                </header>
                <article className='flex flex-wrap'>
                    <div className='flex w-1/2'>
                        <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                            구성원 사진을
                            <br />
                            넣어주세요.
                        </div>
                        <div>
                            <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                                Yong Sang Lee
                            </h1>
                            <div className="text-sm">
                                이곳은 구성원 소개란 입니다.
                                <br />
                                구성원 소개글을 작성해주세요.
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/2'>
                        <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                            구성원 사진을
                            <br />
                            넣어주세요.
                        </div>
                        <div>
                            <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                                Yong Sang Lee
                            </h1>
                            <div className="text-sm">
                                이곳은 구성원 소개란 입니다.
                                <br />
                                구성원 소개글을 작성해주세요.
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/*데이터 분석팀 소개란*/}
            <section className='pb-12'>
                <header className='flex pb-12 '>
                    <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR pb-2 text-2xl font-semibold text-PRIMARY_COLOR'>
                        Data Analytics Team
                    </h1>
                    <span className='w-full border-b'></span>
                </header>
                <article className='flex flex-wrap'>
                    <div className='flex w-1/2'>
                        <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                            구성원 사진을
                            <br />
                            넣어주세요.
                        </div>
                        <div>
                            <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                                Yong Sang Lee
                            </h1>
                            <div className="text-sm">
                                이곳은 구성원 소개란 입니다.
                                <br />
                                구성원 소개글을 작성해주세요.
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/2'>
                        <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>
                            구성원 사진을
                            <br />
                            넣어주세요.
                        </div>
                        <div>
                            <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR'>
                                Yong Sang Lee
                            </h1>
                            <div className="text-sm">
                                이곳은 구성원 소개란 입니다.
                                <br />
                                구성원 소개글을 작성해주세요.
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Member;
