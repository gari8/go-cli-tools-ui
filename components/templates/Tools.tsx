import Layout from "@/components/templates/Layout";
import SearchBox from "@/components/organisms/SearchBox";
import Tool from "@/types/Tool";
import { useRecoilValue } from "recoil";
import { searchedToolsSelector } from "@/stores/selectors/SearchedToolsSelector";
import ToolCard from "@/components/molecules/ToolCard";

export default function Tools() {
  const tools: Tool[] = useRecoilValue(searchedToolsSelector);
  return (
    <Layout>
      <SearchBox />
      {tools.map((tool: Tool, i: number) => {
        return <ToolCard tool={tool} key={i} />;
      })}
    </Layout>
  );
}
