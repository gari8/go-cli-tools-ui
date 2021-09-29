import Sidebar from "~/components/organisms/Sidebar";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Flex w={"full"} h={"100vh"}>
      <Sidebar />
      <Box w={"full"}>{children}</Box>
    </Flex>
  );
}
