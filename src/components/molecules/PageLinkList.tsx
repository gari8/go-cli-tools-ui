import PageLink from "~/components/atoms/PageLink";
import { Box } from "@chakra-ui/react";
import { IPageObject } from "~/types/ui";
import { TiSpanner } from "react-icons/ti";

interface Props {
  pageList?: IPageObject[];
  selectedColor?: string;
  pointerColor?: string;
}

export default function PageLinkList({
  pageList,
  selectedColor,
  pointerColor,
}: Props) {
  const defaultPageList = [
    {
      name: "Tools",
      url: "/",
      icon: TiSpanner,
    },
    {
      name: "Tags",
      url: "/tags",
    },
    {
      name: "Register",
      url: "/register",
    },
    {
      name: "Setting",
      url: "/setting",
    },
  ];

  return (
    <Box>
      {(pageList ? pageList : defaultPageList).map(
        (page: IPageObject, index: number) => {
          return (
            <PageLink
              page={page}
              key={page.name + index}
              selectedColor={selectedColor}
              pointerColor={pointerColor}
            />
          );
        }
      )}
    </Box>
  );
}
