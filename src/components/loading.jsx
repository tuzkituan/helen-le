/* eslint-disable react/prop-types */
import { Box, Flex, Image } from "@chakra-ui/react";

const Loading = (props) => {
  const { children, spinning = false } = props;

  return (
    <Box position="relative">
      <Flex
        position="fixed"
        height="100%"
        top={0}
        bottom={0}
        left={0}
        right={0}
        justifyContent="center"
        alignItems="center"
        bgColor="#FBEADC"
        zIndex={1000}
        transition="transform 0.5s ease-in-out"
        transform={spinning ? "translateY(0)" : "translateY(-100%)"}
      >
        <Flex
          gap={8}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/images/loading.gif"
            alt="loading"
            w="100%"
            maxW="250px"
          />
        </Flex>
      </Flex>
      {children}
    </Box>
  );
};
export default Loading;
