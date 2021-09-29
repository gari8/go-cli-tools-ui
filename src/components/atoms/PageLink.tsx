import { IPageObject } from "~/types/ui";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

interface Props {
  page: IPageObject;
  selectedColor?: string;
  pointerColor?: string;
}

export default function PageLink({ page, selectedColor, pointerColor }: Props) {
  const router = useRouter();
  const isCurrentPage = (): boolean => router.pathname === page.url;
  const pointer = pointerColor ? pointerColor : "brand.main";
  const selected = selectedColor ? selectedColor : "brand.main";
  return (
    <Box p={1}>
      <Flex
        borderRadius={5}
        py={2}
        px={4}
        transition={"all .3s"}
        cursor={"pointer"}
        bg={isCurrentPage() ? selected : ""}
        _hover={{ bg: pointer, transition: "all .2s" }}
        onClick={() => router.push(page.url)}
      >
        <Flex flexDirection={"column"} justify={"center"} mx={2}>
          <Icon as={page.icon} />
        </Flex>
        <Text>{page.name}</Text>
      </Flex>
    </Box>
  );
}
