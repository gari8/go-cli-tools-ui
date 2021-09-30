import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import React, { useCallback } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import SearchCondition from "@/types/SearchCondition";
import { searchConditionState } from "@/stores/atoms/SearchConditionAtom";

export default function SearchInput() {
  const setSearchCondition: SetterOrUpdater<SearchCondition> =
    useSetRecoilState(searchConditionState);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchCondition({
        searchWords: event.target.value.split(" "),
      });
    },
    [setSearchCondition]
  );

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        fontSize="1.2em"
        children={<SearchIcon />}
      />
      <Input placeholder="Enter amount" onChange={onChange} />
      <InputRightElement children={<CheckIcon color="green.500" />} />
    </InputGroup>
  );
}
