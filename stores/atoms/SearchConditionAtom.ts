import { atom } from "recoil";
import SearchCondition from "@/types/SearchCondition";

export const searchConditionState = atom<SearchCondition>({
  key: "searchConditionState",
  default: {
    searchWords: [],
  },
});
