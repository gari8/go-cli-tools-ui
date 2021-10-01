import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MultiInput from "@/components/atoms/MultiInput";
import Label from "@/components/atoms/Label";
import TermPicker from "@/components/molecules/TermPicker";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import SearchCondition from "@/types/SearchCondition";
import { searchConditionState } from "@/stores/atoms/SearchConditionAtom";

export default function SearchDetail() {
  const [words, setWords] = useState([]);
  const [tags, setTags] = useState(() => {
    return [];
  });
  const [startedAt, setStartedAt] = useState<Date>(undefined);
  const [updatedAt, setUpdatedAt] = useState<Date>(undefined);
  const setSearchCondition: SetterOrUpdater<SearchCondition> =
    useSetRecoilState(searchConditionState);

  useEffect(() => {
    setSearchCondition({
      searchWords: words,
      tags: tags,
      startedAt: startedAt,
      updatedAt: updatedAt,
    });
    console.log("aaa");
  }, [words, tags, startedAt, updatedAt]);

  return (
    <Box
      borderRadius={5}
      border={"solid 1px"}
      borderColor={"brand.secondary"}
      p={4}
    >
      <Box mb={4}>
        <Label text={"Words"}>
          <MultiInput list={words} setList={setWords} />
        </Label>
      </Box>
      <Box mt={4}>
        <Label text={"Tags"}>
          <MultiInput list={tags} setList={setTags} isFormat />
        </Label>
      </Box>
      <Box mt={4}>
        <Label text={"Term"}>
          <TermPicker
            startedAt={startedAt}
            setStartedAt={setStartedAt}
            updatedAt={updatedAt}
            setUpdatedAt={setUpdatedAt}
          />
        </Label>
      </Box>
    </Box>
  );
}
