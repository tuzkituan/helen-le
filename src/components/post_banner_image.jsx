import { Box, Flex, Image } from "@chakra-ui/react";
import { MAIN_MAX_W } from "../appConstants";

const PostBannerImage = ({ color, images = [], maxW, backgroundImage }) => {
  const count = images.length;
  return (
    <Box
      bgColor={color}
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      p={{
        base: 10,
        lg: count > 1 ? "40px" : "142px",
      }}
      marginInline={{
        base: -8,
        lg: backgroundImage
          ? `calc(calc(${MAIN_MAX_W} - 100vw) / 2)`
          : "-100vw",
      }}
    >
      <Flex gap={8} justifyContent="center">
        {images.map((x) => (
          <Box key={x} maxW={maxW || count > 1 ? "250px" : "500px"} w="100%">
            <Image src={x} w="100%" h="100%" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PostBannerImage;
