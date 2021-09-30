import { Box, Flex, Text } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import Tool from "@/types/Tool";
import { useRouter } from "next/router";

interface Props {
  tool: Tool;
}

export default function ToolCard({ tool }: Props) {
  const router = useRouter();
  return (
    <Box
      p={2}
      _hover={{ bg: "brand.secondary" }}
      onClick={() => router.push(`/tools/${tool.id}`)}
    >
      <Flex borderRadius={8} p={4} border={"solid 1px"}>
        <Flex flexDirection={"column"} justify={"center"}>
          <SiGithub size={60} />
        </Flex>
        <Text fontSize={40} fontWeight={"bold"} mx={4}>
          {tool.title}
        </Text>
      </Flex>
    </Box>
  );
}
