import type { NextPage } from "next";
import MainPageBanner from "../src/components/main/MainPageBanner";
import ResearchReport from "../src/components/main/ResearchReport";
import MainNews from "../src/components/main/MainNews";
import MainForum from "../src/components/main/MainForum";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className='relative w-full'>
            <Head>
                <title>EBA | 교육 빅데이터 응용연구센터</title>
                <meta
                    name="description"
                    content={
                        "빅데이터(Big Data)와 인공지능(AI) 기반 교육 분야 연구의 허브"
                    }
                />
            </Head>
            <MainPageBanner />
            <ResearchReport />
            <MainNews />
            <MainForum />
        </div>
    );
};

export default Home;
