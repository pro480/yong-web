import React, { useContext } from "react";
import moment from "moment";
import { Project } from "../../../typing";
import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import { ProjectContext } from "../../../pages/research/business";

interface Props {
    project: Project;
    docID: string;
}

function CompletedResearchCard({ project, docID }: Props) {
    const { user } = useAuth();
    const { deleteDocument } = useContext(ProjectContext);

    return (
        <div className='flex h-52 cursor-pointer border-b  border-PRIMARY_COLOR-500  py-8 pr-8 first:border-t hover:bg-gray-200'>
            <div className='flex h-full w-32 flex-col items-center justify-evenly'>
                <div className='text-3xl font-bold'>
                    {moment(project.startedAt).format("DD")}
                </div>
                <div className='text-base'>
                    {moment(project.startedAt).format("YYYY.MM")}
                </div>
                <span className='rotate-90'>~</span>
                <div className='text-3xl font-bold'>
                    {moment(project.endedAt).format("DD")}
                </div>
                <div className='text-base'>
                    {moment(project.endedAt).format("YYYY.MM")}
                </div>
            </div>
            {project.imageUrl && (
                <div className='relative h-32 w-32 self-center'>
                    <Image
                        src={project.imageUrl}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                    />
                </div>
            )}
            <div className='flex flex-1 flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                    <span className='flex items-center text-PRIMARY_COLOR-500'>
                        수탁 기관
                    </span>
                    <div className='h-4 border-r-2 border-PRIMARY_COLOR-500'></div>
                    {project.consignment.map((consignment, index) => (
                        <div key={index} className='flex items-center'>
                            {index > 0 && ","} {consignment}
                        </div>
                    ))}
                </div>
                <div className='text-2xl'>{project.title_KO}</div>
                <div className='overflow-hidden'>{project.description}</div>
            </div>
            {user && (
                <button
                    className='h-8 w-12 rounded-sm border hover:bg-PRIMARY_COLOR-200'
                    onClick={() => deleteDocument(docID)}
                >
                    삭제
                </button>
            )}
        </div>
    );
}

export default CompletedResearchCard;
