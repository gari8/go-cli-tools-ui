import { Input } from "@chakra-ui/input";
import React, { useState } from "react";
import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/tag";
import { Box, Wrap } from "@chakra-ui/react";

interface Props {
  list: string[];
  setList: (list: string[]) => void;
  colorScheme?: string;
  isFormat?: boolean;
}

export default function MultiInput({
  list,
  setList,
  colorScheme,
  isFormat,
}: Props) {
  const [tag, setTag] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTag(event.target.value);

  const onCreate = (e) => {
    if (e.key === "Enter") {
      list.push(isFormat ? toKebabCase(tag.trim()) : tag);
      setList(Array.from(new Set(list)));
      setTag("");
    }
  };
  const onRemove = (tagName: string) =>
    setList(list.filter((item: string) => tagName !== item));

  const toKebabCase = (str) =>
    str
      .replace(/^ *?[A-Z]/, function (allStr) {
        return allStr.toLowerCase();
      })
      .replace(/_/g, "-")
      .replace(/ *?[A-Z]/g, function (allStr) {
        return "-" + allStr.replace(/ /g, "").toLowerCase();
      });

  return (
    <Box>
      <Wrap mb={2}>
        {list.map((item: string, i: number) => (
          <Tag
            size={"md"}
            mx={1}
            key={item + i}
            borderRadius="full"
            variant="solid"
            px={3}
            colorScheme={colorScheme ? colorScheme : "green"}
          >
            <TagLabel>{item}</TagLabel>
            <TagCloseButton onClick={() => onRemove(item)} />
          </Tag>
        ))}
      </Wrap>
      <Input
        value={tag}
        placeholder="Enter amount"
        onChange={onChange}
        onKeyPress={onCreate}
      />
    </Box>
  );
}
