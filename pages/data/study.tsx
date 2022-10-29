import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import Banner from "../../src/components/common/Layout/Banner";
import StudyMaterialTable from "../../src/components/data/StudyMaterialTable";

function Research() {
    return (
        <div>
            <StudyMaterialTable material='학습 자료' />
        </div>
    );
}

export default Research;
