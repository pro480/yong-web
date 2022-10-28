import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import { ForwardIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import ResearchCard from "../../src/components/research/ResearchCard";

function Index() {
    type projectInProgress = {
        imageUrl: string;
        title: string;
        summary: string;
        consignment: string;
        startedAt: string;
        endedAt: string;
        description: string;
    };

    type completedProject = {
        imageUrl: string;
        title: string;
        summary: string;
        consignment: string;
        startedAt: string;
        endedAt: string;
        description: string;
    };

    const projects = [
        {
            url: "이미지를 넣어주세요",
            title_KO: "연구 프로젝트 1",
            summary: "프로젝트1 요약 내용입니다",
            description:
                "프로젝트에 관련한 내용 본문입니다. 내용을 입력해주세요.",
            center: "교육빅데이터 응용 연구센터",
            startedAt: "2022-10-01",
            endedAt: "2022-10-10",
            completed: false,
        },
        {
            url: "이미지를 넣어주세요",
            title_KO: "연구 프로젝트 2",
            summary: "프로젝트2 요약 내용입니다",
            description:
                "프로젝트에 관련한 내용 본문입니다. 내용을 입력해주세요.",
            center: "교육빅데이터 응용 연구센터",
            startedAt: "2022-10-01",
            endedAt: "2022-10-10",
            completed: false,
        },
        {
            url: "이미지를 넣어주세요",
            title_KO: "연구 프로젝트 3",
            summary: "프로젝트3 요약 내용입니다",
            description:
                "프로젝트에 관련한 내용 본문입니다. 내용을 입력해주세요.",
            center: "교육빅데이터 응용 연구센터",
            startedAt: "2022-10-01",
            endedAt: "2022-10-10",
            completed: true,
        },
    ];

    return (
        <div>

            <div className='flex flex-col gap-y-10'>
                {/* 필터 */}
                <div className='border-b-2 border-PRIMARY_COLOR-500 p-3'>
                    {/* 필터 카테고리 */}
                    <div className='pb-5'>
                        <h1 className='h-full whitespace-nowrap text-2xl font-semibold text-PRIMARY_COLOR-500'>
                            Filter
                        </h1>
                    </div>

                    {/* 진행여부 */}
                    <div className='flex gap-x-5'>
                        <button className='h-[50px] w-[100px] rounded-[70px] border-[3px] border-PRIMARY_COLOR-500 bg-PRIMARY_COLOR-500/20 font-semibold hover:bg-PRIMARY_COLOR-500'>
                            진행 중
                        </button>

                        <button className='h-[50px] w-[100px] rounded-[70px] border-[3px] border-gray-400 bg-gray-100 font-semibold hover:bg-gray-400'>
                            완료
                        </button>
                    </div>
                </div>

                {/* 프로젝트 집합 */}

                <div className='flex flex-col gap-y-8'>
                    {projects.map((project) => (
                        <ResearchCard
                            key={project.title_KO}
                            title={project.title_KO}
                            url={project.url}
                            summary={project.summary}
                            center={project.center}
                            startedAt={project.startedAt}
                            endedAt={project.endedAt}
                            completed={project.completed}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Index;
