import { Box, Flex, Image } from "@chakra-ui/react";

const PostBannerImage = ({ color, images = [], maxW }) => {
  return (
    <Box
      bgColor={color}
      p="40px"
      marginInline={{
        base: -8,
        lg: "-100vw",
      }}
    >
      <Flex gap={8} justifyContent="center">
        {images.map((x) => (
          <Box key={x} maxW={maxW || "250px"} w="100%">
            <Image src={x} w="100%" h="100%" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PostBannerImage;
