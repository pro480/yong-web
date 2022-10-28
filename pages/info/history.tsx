import React from "react";
import PageTitle from "../../src/components/common/Layout/PageTitle";
import HistoryPost from "../../src/components/info/HistoryPost";
import HistoryCard from "../../src/components/info/HistoryCard";
import HorizontalRule from "../../src/components/common/HorizontalRule";

function History() {
    return (
        <div>


            {/*2022년*/}
            <HistoryCard
                year={2022}
                contents={[
                    { month: 10, history: "연혁을 입력해주세요" },
                    { month: 8, history: "연혁을 입력해주세요" },
                ]}
            />
            <HorizontalRule />
            <HistoryCard
                year={2021}
                contents={[
                    { month: 8, history: "연혁을 입력해주세요" },
                    { month: 6, history: "연혁을 입력해주세요" },
                ]}
            />
            <HorizontalRule />
            <HistoryCard
                year={2021}
                contents={[
                    { month: 12, history: "연혁을 입력해주세요" },
                    { month: 3, history: "연혁을 입력해주세요" },
                ]}
            />
        </div>
    );
}

export default History;
