import React, { useState } from "react";
import PageTitle from "../../src/components/PageTitle";
import {
    collection,
    DocumentData,
    query,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { db } from "../../firebase";
import NameCard from "../../src/components/NameCard";
import { Member } from "../../typing";

function Member() {
    const postConverter = {
        toFirestore(member: WithFieldValue<Member>): DocumentData {
            return {
                name: member.name,
                division: member.division,
                email: member.email,
                history: member.history,
                team: member.team,
                major: member.major,
                imageUrl: member.imageUrl,
            };
        },
        fromFirestore(
            snapshot: QueryDocumentSnapshot,
            options: SnapshotOptions
        ): Member {
            const member = snapshot.data(options)!;
            return {
                name: member.name,
                division: member.division,
                email: member.email,
                history: member.history,
                team: member.team,
                major: member.major,
                imageUrl: member.imageUrl,
            };
        },
    };

    const membersRef = query(collection(db, "member")).withConverter<Member>(
        postConverter
    );
    const membersQuery = useFirestoreQueryData<Member>(["member"], membersRef);

    console.log(membersQuery);

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
            <header className='flex pb-12 '>
                <h1 className='organizationTitle'>Center Leader</h1>
                <span className='w-full border-b'></span>
            </header>
            <section className='h-64'>
                {membersQuery.data
                    ?.filter((member) => member.team === "센터장")
                    .map((member, index) => (
                        <NameCard
                            key={index}
                            imageUrl={member.imageUrl}
                            name={member.name}
                            history={member.history}
                            major={member.major}
                            email={member.email}
                            team={member.team}
                        />
                    ))}
            </section>

            <header className='flex py-12 '>
                <h1 className='organizationTitle'>Center Leader</h1>
                <span className='w-full border-b'></span>
            </header>
            <section className='h-fit'>
                {membersQuery.data
                    ?.filter((member) => member.team === "데이터 분석팀")
                    .map((member, index) => (
                        <div key={index} className='h-52 w-1/2'>
                            <NameCard
                                imageUrl={member.imageUrl}
                                name={member.name}
                                history={member.history}
                                major={member.major}
                                email={member.email}
                                team={member.team}
                            />
                        </div>
                    ))}
            </section>

            {/*연구 자문단 소개란*/}
            {/*<section className='pb-12'>*/}
            {/*    <header className='flex pb-12 '>*/}
            {/*        <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR-500 pb-2 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*            Research Advisory Group*/}
            {/*        </h1>*/}
            {/*        <span className='w-full border-b'></span>*/}
            {/*    </header>*/}
            {/*    <article className='flex flex-wrap'>*/}
            {/*        <div className='flex w-1/2'>*/}
            {/*            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>*/}
            {/*                구성원 사진을*/}
            {/*                <br />*/}
            {/*                넣어주세요.*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*                    Yong Sang Lee*/}
            {/*                </h1>*/}
            {/*                <div className='text-sm'>*/}
            {/*                    이곳은 구성원 소개란 입니다.*/}
            {/*                    <br />*/}
            {/*                    구성원 소개글을 작성해주세요.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='flex w-1/2'>*/}
            {/*            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>*/}
            {/*                구성원 사진을*/}
            {/*                <br />*/}
            {/*                넣어주세요.*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*                    Yong Sang Lee*/}
            {/*                </h1>*/}
            {/*                <div className='text-sm'>*/}
            {/*                    이곳은 구성원 소개란 입니다.*/}
            {/*                    <br />*/}
            {/*                    구성원 소개글을 작성해주세요.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </article>*/}
            {/*</section>*/}
            {/*연구 윤리 자문단 소개란*/}
            {/*<section className='pb-12'>*/}
            {/*    <header className='flex pb-12 '>*/}
            {/*        <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR-500 pb-2 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*            Research Ethics Advisory Group*/}
            {/*        </h1>*/}
            {/*        <span className='w-full border-b'></span>*/}
            {/*    </header>*/}
            {/*    <article className='flex flex-wrap'>*/}
            {/*        <div className='flex w-1/2'>*/}
            {/*            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>*/}
            {/*                구성원 사진을*/}
            {/*                <br />*/}
            {/*                넣어주세요.*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*                    Yong Sang Lee*/}
            {/*                </h1>*/}
            {/*                <div className='text-sm'>*/}
            {/*                    이곳은 구성원 소개란 입니다.*/}
            {/*                    <br />*/}
            {/*                    구성원 소개글을 작성해주세요.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='flex w-1/2'>*/}
            {/*            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>*/}
            {/*                구성원 사진을*/}
            {/*                <br />*/}
            {/*                넣어주세요.*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*                    Yong Sang Lee*/}
            {/*                </h1>*/}
            {/*                <div className='text-sm'>*/}
            {/*                    이곳은 구성원 소개란 입니다.*/}
            {/*                    <br />*/}
            {/*                    구성원 소개글을 작성해주세요.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </article>*/}
            {/*</section>*/}

            {/*연구협력 네트워크 소개란*/}
            {/*<section className='pb-12'>*/}
            {/*    <header className='flex pb-12 '>*/}
            {/*        <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR-500 pb-2 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*            {" "}*/}
            {/*            Research Collaboration Network*/}
            {/*        </h1>*/}
            {/*        <span className='w-full border-b'></span>*/}
            {/*    </header>*/}
            {/*    <article className='flex flex-wrap'>*/}
            {/*        <div className='flex w-1/2'>*/}
            {/*            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>*/}
            {/*                구성원 사진을*/}
            {/*                <br />*/}
            {/*                넣어주세요.*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*                    Yong Sang Lee*/}
            {/*                </h1>*/}
            {/*                <div className='text-sm'>*/}
            {/*                    이곳은 구성원 소개란 입니다.*/}
            {/*                    <br />*/}
            {/*                    구성원 소개글을 작성해주세요.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='flex w-1/2'>*/}
            {/*            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>*/}
            {/*                구성원 사진을*/}
            {/*                <br />*/}
            {/*                넣어주세요.*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*                    Yong Sang Lee*/}
            {/*                </h1>*/}
            {/*                <div className='text-sm'>*/}
            {/*                    이곳은 구성원 소개란 입니다.*/}
            {/*                    <br />*/}
            {/*                    구성원 소개글을 작성해주세요.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </article>*/}
            {/*</section>*/}

            {/*데이터 분석팀 소개란*/}
            {/*<section className='pb-12'>*/}
            {/*    <header className='flex pb-12 '>*/}
            {/*        <h1 className='h-full whitespace-nowrap border-b border-b-PRIMARY_COLOR-500 pb-2 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*            Data Analytics Team*/}
            {/*        </h1>*/}
            {/*        <span className='w-full border-b'></span>*/}
            {/*    </header>*/}
            {/*    <article className='flex flex-wrap'>*/}
            {/*        <div className='flex w-1/2'>*/}
            {/*            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>*/}
            {/*                구성원 사진을*/}
            {/*                <br />*/}
            {/*                넣어주세요.*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*                    Yong Sang Lee*/}
            {/*                </h1>*/}
            {/*                <div className='text-sm'>*/}
            {/*                    이곳은 구성원 소개란 입니다.*/}
            {/*                    <br />*/}
            {/*                    구성원 소개글을 작성해주세요.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='flex w-1/2'>*/}
            {/*            <div className='mr-12 flex h-40 w-40 items-center justify-center bg-gray-300'>*/}
            {/*                구성원 사진을*/}
            {/*                <br />*/}
            {/*                넣어주세요.*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h1 className='pb-5 text-2xl font-semibold text-PRIMARY_COLOR-500'>*/}
            {/*                    Yong Sang Lee*/}
            {/*                </h1>*/}
            {/*                <div className='text-sm'>*/}
            {/*                    이곳은 구성원 소개란 입니다.*/}
            {/*                    <br />*/}
            {/*                    구성원 소개글을 작성해주세요.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </article>*/}
            {/*</section>*/}
        </div>
    );
}

export default Member;
