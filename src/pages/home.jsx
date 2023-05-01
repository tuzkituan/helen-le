import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import MyWork from "./my-work";

const Home = () => {
  return (
    <Box
      paddingInline={{
        md: "104px",
        sm: "24px",
        lg: "104px",
        xl: "230px",
      }}
      paddingBlock="72px"
      w="100%"
    >
      <Flex flexDirection="column" gap={8} alignItems="center">
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
          maxW="40vw"
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
