import { selector } from "recoil";
import Tool from "@/types/Tool";
import { toolsState } from "@/stores/atoms/ToolsAtom";
import { searchConditionState } from "@/stores/atoms/SearchConditionAtom";
import SearchCondition from "@/types/SearchCondition";

export const searchedToolsSelector = selector<Tool[]>({
  key: "searchedToolsSelector",
  get: ({ get }) => {
    const tools: Tool[] = get(toolsState);
    const searchCondition: SearchCondition = get(searchConditionState);
    return searchCondition.searchText !== ""
      ? tools.filter((tool: Tool) =>
          tool.title.includes(searchCondition.searchText)
        )
      : tools;
  },
});
