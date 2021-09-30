import { Box, Flex, Text } from "@chakra-ui/react";
import SocialIcon from "@/components/atoms/SocialIcon";
import { SiFacebook, SiGithub, SiTwitter } from "react-icons/si";

export default function SocialIcons() {
  const myInfo = {
    facebook: "https://www.facebook.com/hayato.hagari.7",
    twitter: "https://twitter.com/HAGARI06",
    github: "https://github.com/gari8",
  };
  return (
    <Box py={3}>
      <Flex justify={"center"} w={"full"} py={1}>
        <SocialIcon icon={<SiFacebook />} url={myInfo.facebook} />
        <SocialIcon icon={<SiTwitter />} url={myInfo.twitter} />
        <SocialIcon icon={<SiGithub />} url={myInfo.github} />
      </Flex>
      <Text textAlign={"center"} fontSize={14}>
        &copy; 2021 gari8
      </Text>
    </Box>
  );
}
