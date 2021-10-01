import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  children: any;
}

export default function Label({ children, text }: Props) {
  return (
    <Grid p={1} templateColumns={"repeat(8, 1fr)"}>
      <Flex flexDirection={"column"} justify={"center"} mr={8}>
        <Text fontWeight={"bold"} color={"brand.main"}>
          {text}
        </Text>
      </Flex>
      <GridItem colStart={2} colEnd={9}>
        {children}
      </GridItem>
    </Grid>
  );
}
