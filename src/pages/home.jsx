import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import MyWork from "./my_work";

const Home = () => {
  return (
    <Box w="100%">
      <Text
        textStyle={{
          base: "t5",
          lg: "t4",
        }}
        fontWeight="600 !important"
        textAlign="center"
      >
        Hi, I&apos;m Helen Le
        <br />a UX/UI designer from Vietnam.
      </Text>
      <Spacer height="80px" />
      <MyWork />
    </Box>
  );
};

export default Home;
