import type { NextPage } from "next";
import MainPageBanner from "../src/components/MainPageBanner";
import MainResearchProject from "../src/components/MainResearchProject";
import ResearchReport from "../src/components/ResearchReport";
import MainNews from "../src/components/MainNews";
import MainForum from "../src/components/MainForum";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>EBA | 교육 빅데이터 응용연구센터</title>
            </Head>
            <MainPageBanner />
            <MainResearchProject />
            <ResearchReport />
            <MainNews />
            <MainForum />
        </div>
    );
};

export default Home;
