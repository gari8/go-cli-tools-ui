import { Box, Flex } from "@chakra-ui/react";
import PageLinkList from "~/components/molecules/PageLinkList";

const Sidebar = () => {
  return (
    <Flex
      w={320}
      h={"full"}
      bg="brand.primary"
      flexDirection={"column"}
      color={"white"}
    >
      <Box w={"full"} h={100}>
        header
      </Box>
      <PageLinkList />
      <Box mt={"auto"}>footer</Box>
    </Flex>
  );
};

export default Sidebar;
