import { Box, Divider, Flex } from "@chakra-ui/react";
import PageLinkList from "@/components/molecules/PageLinkList";
import SocialIcons from "@/components/molecules/SocialIcons";
import TitleLogo from "@/components/atoms/TitleLogo";

const Sidebar = () => {
  return (
    <Flex
      w={320}
      h={"full"}
      bg="brand.primary"
      flexDirection={"column"}
      color={"white"}
    >
      <Box>
        <TitleLogo />
      </Box>
      <Divider mb={8} />
      <PageLinkList />
      <Box mt={"auto"}>
        <SocialIcons />
      </Box>
    </Flex>
  );
};

export default Sidebar;
