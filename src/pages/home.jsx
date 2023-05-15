import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import MyWork from "./my_work";

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
          UX/UI Designer
        </Text>
        <Text
          fontSize={{
            base: "16px",
            md: "32px",
          }}
          fontWeight={400}
          lineHeight={{
            base: "28px",
            md: "44px",
          }}
          textAlign="center"
          maxW={{
            base: "80vw",
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
