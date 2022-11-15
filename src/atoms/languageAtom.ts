import { atom } from "recoil";
import { SiteMap } from "../../typing";

export const languageState = atom({
    key: "languageState",
    default: false,
});
