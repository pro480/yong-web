import React, { createContext, Dispatch, useState } from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import { ForwardIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import ProgressResearchCard from "../../src/components/research/ProgressResearchCard";
import useFirebase from "../../src/hooks/useFirebase";
import { GraduateMember, InternalMember, Project } from "../../typing";
import CompletedResearchCard from "../../src/components/research/CompletedResearchCard";
import { useRouter } from "next/router";
import useAuth from "../../src/hooks/useAuth";
import { UseQueryResult } from "react-query";
import {
    CollectionReference,
    FirestoreError,
    QuerySnapshot,
} from "@firebase/firestore";
import ProjectToggle from "../../src/components/research/ProjectToggle";

interface ProjectContextProps {
    modalOpen: boolean;
    setModalOpen: Dispatch<React.SetStateAction<boolean>>;
    selectedProject: Project | null;
    setSelectedProject: Dispatch<React.SetStateAction<Project | null>>;
    selectedDocId: string | null;
    setSelectedDocId: Dispatch<React.SetStateAction<string | null>>;
    collectionQuery: UseQueryResult<QuerySnapshot<Project>, FirestoreError>;
    collectionRef: CollectionReference<Project>;
    deleteDocument: (docID: string) => void;
}

export const ProjectContext = createContext<ProjectContextProps>(
    {} as ProjectContextProps
);

function Business() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
    const { user } = useAuth();
    const { collectionRef, collectionQuery, deleteDocument } =
        useFirebase<Project>("projects", ["projects"]);
    const router = useRouter();

    const completed = router.query.completed || "false";

    const value = {
        modalOpen,
        setModalOpen,
        selectedProject,
        setSelectedProject,
        selectedDocId,
        setSelectedDocId,
        collectionQuery,
        collectionRef,
        deleteDocument,
    };

    return (
        <ProjectContext.Provider value={value}>
            <div className='flex flex-col'>
                {/* 필터 */}
                <div className='flex pb-10 text-sm md:text-base'>
                    <div
                        className='w-32 cursor-pointer border px-4 py-3 text-center  hover:border-t-2 hover:border-b-0 hover:border-t-black '
                        onClick={(e) => {
                            router.replace({ query: { completed: false } });
                        }}
                    >
                        진행 중
                    </div>
                    <div
                        className='w-32 cursor-pointer border px-4 py-3 text-center hover:border-t-2 hover:border-b-0 hover:border-t-black'
                        onClick={(e) => {
                            router.replace({ query: { completed: true } });
                        }}
                    >
                        완료
                    </div>
                    <span className='w-full border-b'></span>
                </div>

                {user && (
                    <button
                        className='w-16 border bg-PRIMARY_COLOR-100 text-white'
                        onClick={() => setModalOpen((prev) => !prev)}
                    >
                        {modalOpen ? "취소" : "추가"}
                    </button>
                )}

                {/* 프로젝트 집합 */}
                <div className='flex flex-col'>
                    {completed === "false"
                        ? collectionQuery.data?.docs.map((snapshot) => {
                              const project = snapshot.data();
                              if (!project.completed) {
                                  return (
                                      <ProgressResearchCard
                                          key={snapshot.id}
                                          docID={snapshot.id}
                                          project={project}
                                      />
                                  );
                              }
                          })
                        : collectionQuery.data?.docs.map((snapshot) => {
                              const project = snapshot.data();
                              if (project.completed) {
                                  return (
                                      <CompletedResearchCard
                                          key={snapshot.id}
                                          docID={snapshot.id}
                                          project={project}
                                      />
                                  );
                              }
                          })}
                </div>
                {modalOpen && <ProjectToggle />}
            </div>
        </ProjectContext.Provider>
    );
}

export default Business;
