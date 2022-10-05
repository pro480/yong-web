import type {NextPage} from "next";
import Banner from "../src/components/Banner";
import MainResearchProject from "../src/components/MainResearchProject";
import ResearchReport from "../src/components/ResearchReport";
import MainNews from "../src/components/MainNews";
import MainForum from "../src/components/MainForum";

const Home: NextPage = () => {
    return (
        <div>
            <Banner/>
            <MainResearchProject/>
            <ResearchReport/>
            <MainNews/>
            <MainForum/>
        </div>
    );
};

export default Home;
