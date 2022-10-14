import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import { Member } from "../../../typing";

const memberConverter = {
    toFirestore(member: WithFieldValue<Member>): DocumentData {
        return {
            name: member.name,
            division: member.division,
            email: member.email,
            history: member.history,
            team: member.team,
            major: member.major,
            imageUrl: member.imageUrl,
            department: member.department,
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Member {
        const member = snapshot.data(options)!;
        return {
            name: member.name,
            division: member.division,
            email: member.email,
            history: member.history,
            team: member.team,
            major: member.major,
            imageUrl: member.imageUrl,
            department: member.department,
        };
    },
};

export default memberConverter;
