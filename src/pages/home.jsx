import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import MyWork from "./my_work";

const Home = () => {
  return (
    <Box w="100%">
      <Flex flexDirection="column" gap={8} alignItems="center">
        <Text
          textStyle="t1"
          fontWeight={700}
          textAlign="center"
          maxW={{
            base: "100%",
            md: "80vw",
            lg: "60vw",
          }}
        >
          UX/UI Designer
        </Text>
        <Text
          textStyle="t5"
          textAlign="center"
          maxW={{
            base: "90vw",
            md: "40vw",
          }}
        >
          Hi, I&apos;m Helen Le, a UX/UI designer from Vietnam.
        </Text>
      </Flex>
      <Spacer height={16} />
      <MyWork />
    </Box>
  );
};

export default Home;
