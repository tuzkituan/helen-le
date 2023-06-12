import { Box, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import MyWork from "./my_work";

const Home = () => {
  const [isSmallerThan386] = useMediaQuery("(max-width: 386px)");
  return (
    <Box w="100%">
      <Text
        textStyle={{
          base: "t6",
          lg: "t4",
        }}
        fontWeight="600 !important"
        textAlign="center"
      >
        Hi, I&apos;m Helen Le
        {!isSmallerThan386 ? <br /> : " "}
        UX/UI designer from Vietnam.
      </Text>
      <Spacer
        height={{
          base: "48px",
          lg: "80px",
        }}
      />
      <MyWork />
    </Box>
  );
};

export default Home;
