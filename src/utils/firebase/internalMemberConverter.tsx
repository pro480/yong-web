import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import { InternalMember } from "../../../typing";

const internalMemberConverter = {
    toFirestore(member: WithFieldValue<InternalMember>): DocumentData {
        return {
            name: member.name, // 이름
            email: member.email, // 개인 이메일
            major: member.major, //전공
            imageUrl: member.imageUrl, // 사진 주소
            department: member.department, // 소속 (ex.인하대학교 교육학과 교수)
            course: member.course,
            team: member.team, // 소속 조직
            history: member.history, // 약력
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): InternalMember {
        const member = snapshot.data(options)!;
        return {
            name: member.name, // 이름
            email: member.email, // 개인 이메일
            major: member.major, //전공
            imageUrl: member.imageUrl, // 사진 주소
            department: member.department, // 소속 (ex.인하대학교 교육학과 교수)
            course: member.course,
            team: member.team, // 소속 조직
            history: member.history, // 약력
        };
    },
};

export default internalMemberConverter;
