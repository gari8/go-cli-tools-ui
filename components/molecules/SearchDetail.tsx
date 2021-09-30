import { Box } from "@chakra-ui/react";
import { useState } from "react";
import MultiInput from "@/components/atoms/MultiInput";

export default function SearchDetail() {
  const [list, setList] = useState([]);
  // const [] = useState(() => {
  //   return []
  // })
  return (
    <Box
      borderRadius={5}
      border={"solid 1px"}
      borderColor={"brand.secondary"}
      p={4}
    >
      <MultiInput list={list} setList={setList} />
    </Box>
  );
}
