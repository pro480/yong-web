import { atom } from "recoil";
import { QNA } from "../../typing";

export const qnaDocState = atom<QNA | null>({
    key: "qnaDocState",
    default: null,
});
