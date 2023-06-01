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
        fontWeight={600}
        textAlign="center"
        // maxW={{
        //   base: "100%",
        //   md: "80vw",
        //   lg: "60vw",
        // }}
      >
        Hi, I&apos;m Helen Le
        <br />a UX/UI designer from Vietnam.
      </Text>

      <Spacer height={16} />
      <MyWork />
    </Box>
  );
};

export default Home;
