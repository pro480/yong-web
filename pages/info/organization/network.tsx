import React from "react";
import MemberTable from "../../../src/components/info/MemberTable";

function Network() {
    return (
        <div>
            {/*<Banner*/}
            {/*    title='Research Collaboration Network'*/}
            {/*    description='조직에 대한 설명을 적어주세요'*/}
            {/*    image={networkImage}*/}
            {/*/>*/}


            {/* 이메일 링크 a태그 추가 */}
            <MemberTable organization='연구협력 네트워크' />
        </div>
    );
}

export default Network;
