import React from "react";
import HistoryCard from "../../src/components/info/HistoryCard";
import HorizontalRule from "../../src/components/common/HorizontalRule";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";

function Center_history() {
    return (
        <div>
            <HeadMeta title={"EBA | 센터연혁"} description={"EBA센터 연혁"}/>
            {/*2022년*/}
            <HistoryCard
                year={2022}
                contents={[
                    {
                        month: 10,
                        history:
                            "소프트웨어중심대학사업 지원 사범대학 “인공지능 활용 교육 활성화 프로그램” 운영 연구소 선정",
                    },
                    {
                        month: 5,
                        history:
                            "사범대생을 위한 빅데이터 현장 전문가 특강 개최(GMAC 임황규 박사)",
                    },
                    {
                        month: 3,
                        history:
                            "사범대학 교육연구소 부설 “교육빅데이터응용연구센터” 설립",
                    },
                ]}
            />
            <HorizontalRule />
        </div>
    );
}

export default Center_history;
