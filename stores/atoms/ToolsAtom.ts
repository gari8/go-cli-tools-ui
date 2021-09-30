import { atom } from "recoil";
import Tool from "@/types/Tool";

export const toolsState = atom<Tool[]>({
  key: "tools",
  default: [
    {
      id: "aaaaaa",
      title: "myCLI",
      author: "gari8",
      githubUrl: "",
      description: "",
      binaries: undefined,
    },
  ],
});
