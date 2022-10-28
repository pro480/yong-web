import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
} from "@firebase/firestore";
import { GalleryProps } from "../../../typing";

const galleryPostConverter = {
    toFirestore(member: WithFieldValue<GalleryProps>): DocumentData {
        return {
            title : member.title,
            imgUrl : member.imgUrl,
            createdAt : member.createdAt,
            isBanner : member.isBanner
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): GalleryProps {
        const member = snapshot.data(options)!;
        return {
            title : member.title,
            imgUrl : member.imgUrl,
            createdAt : member.createdAt,
            isBanner : member.isBanner
        };
    },
};

export default galleryPostConverter;
