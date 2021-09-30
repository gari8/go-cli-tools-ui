import PageLink from "@/components/atoms/PageLink";
import { Box } from "@chakra-ui/react";
import { IPageObject } from "@/types/ui";
import { ImPriceTags } from "react-icons/im";
import { IoMdCreate } from "react-icons/io";
import { BsGearWideConnected, BsTools } from "react-icons/bs";

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
      icon: BsTools,
    },
    {
      name: "Tags",
      url: "/tags",
      icon: ImPriceTags,
    },
    {
      name: "Register",
      url: "/register",
      icon: IoMdCreate,
    },
    {
      name: "Setting",
      url: "/setting",
      icon: BsGearWideConnected,
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
