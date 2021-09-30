import SearchInput from "@/components/molecules/SearchInput";
import { useBoolean } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/react";
import SearchDetail from "@/components/molecules/SearchDetail";

export default function SearchBox() {
  const [isDetail, setIsDetail] = useBoolean(false);
  return (
    <Box p={4}>
      {isDetail ? <SearchDetail /> : <SearchInput />}
      <Text
        onClick={() => setIsDetail.toggle()}
        color={"blue"}
        _hover={{ textDecoration: "underline" }}
      >
        {isDetail ? "Simple" : "Detail"}
      </Text>
    </Box>
  );
}
