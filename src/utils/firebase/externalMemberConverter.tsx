import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import { ExternalMember } from "../../../typing";

const externalMemberConverter = {
    toFirestore(member: WithFieldValue<ExternalMember>): DocumentData {
        return {
            name: member.name, // 이름
            email: member.email, // 개인 이메일
            department: member.department, // 소속 (ex.인하대학교 교육학과 교수)
            organization: member.organization,
            division: member.division ? member.division : null, // 구분 (대학 or 연구 기관)
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): ExternalMember {
        const member = snapshot.data(options)!;
        return {
            name: member.name, // 이름
            email: member.email, // 개인 이메일
            department: member.department, // 소속 (ex.인하대학교 교육학과 교수)
            division: member.division, // 구분 (대학 or 연구 기관)
            organization: member.organization,
        };
    },
};

export default externalMemberConverter;
