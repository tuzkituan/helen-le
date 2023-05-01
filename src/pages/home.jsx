import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import MyWork from "./my-work";

const Home = () => {
  return (
    <Box w="100%">
      <Flex flexDirection="column" gap={8} alignItems="center">
        <Text
          fontSize={{
            base: "48px",
            md: "72px",
          }}
          fontWeight={700}
          textAlign="center"
          lineHeight="130%"
          maxW={{
            base: "100%",
            md: "80vw",
            lg: "60vw",
          }}
        >
          UX/UI Designer with impactful design for Social Change
        </Text>
        <Text
          fontSize={{
            base: "16px",
            md: "20px",
          }}
          fontWeight={400}
          lineHeight="28px"
          textAlign="center"
          maxW={{
            base: "80vw",
            md: "40vw",
          }}
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
