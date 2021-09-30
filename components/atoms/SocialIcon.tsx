import { IconButton } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement } from "react";

interface Props {
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  url?: string;
}

export default function SocialIcon({ icon, url }: Props) {
  return (
    <IconButton
      aria-label={"social-icon" + icon.key}
      borderRadius={"full"}
      mx={1}
      bg={"brand.primary"}
      color={"white"}
      _hover={{ bg: "brand.main" }}
      icon={icon}
      _focus={{ outline: 0 }}
      onClick={() => window.open(url ? url : "", "_blank", "noreferrer")}
    />
  );
}
