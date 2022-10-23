import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import { GraduateMember } from "../../../typing";

const graduateMemberConverter = {
    toFirestore(member: WithFieldValue<GraduateMember>): DocumentData {
        return {
            classification: member.classification, // 교수, 학생 구분
            name: member.name, // 이름
            email: member.email, // 개인 이메일
            major: member.major, //전공
            imageUrl: member.imageUrl, // 사진 주소
            department: member.department, // 소속 (ex.인하대학교 교육학과 교수)
            course: member.course,
            history: member.history, // 약력
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): GraduateMember {
        const member = snapshot.data(options)!;
        return {
            classification: member.classification, //교수, 학생 구분
            name: member.name, // 이름
            email: member.email, // 개인 이메일
            major: member.major, //전공
            imageUrl: member.imageUrl, // 사진 주소
            department: member.department, // 소속 (ex.인하대학교 교육학과 교수)
            course: member.course,
            history: member.history, // 약력
        };
    },
};

export default graduateMemberConverter;
