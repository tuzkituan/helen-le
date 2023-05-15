import { Box, Flex, Image } from "@chakra-ui/react";

const PostBannerImage = ({ color, images = [] }) => {
  return (
    <Box bgColor={color} p="40px" marginInline="-100vw">
      <Flex gap={8} justifyContent="center">
        {images.map((x) => (
          <Box key={x}>
            <Image src={x} w="100%" h="100%" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PostBannerImage;