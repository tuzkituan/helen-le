import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import MyWork from "./my-work";

const Home = () => {
  return (
    <Box paddingInline="104px" paddingBlock="72px" w="100%">
      <Flex flexDirection="column" gap={8}>
        <Text
          fontSize="72px"
          fontWeight={700}
          textAlign="center"
          lineHeight="130%"
        >
          UX/UI Designer with impactful design for Social Change
        </Text>
        <Text
          fontSize={20}
          fontWeight={400}
          lineHeight="28px"
          textAlign="center"
        >
          Hi, I&apos;m Helen Le, a UX/UI designer dedicated to creating designs
          that have a positive impact on people&apos;s lives.
        </Text>
      </Flex>
      <Spacer height={20} />
      <MyWork />
    </Box>
  );
};

export default Home;
