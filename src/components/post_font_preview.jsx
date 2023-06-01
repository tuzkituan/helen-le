import { Box, Image, Spacer } from "@chakra-ui/react";
import React from "react";

const PostFontPreview = ({ titleImg, descriptionImg, mockup }) => {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        // bgColor="#EDF4D7"
        marginBlock="97px"
        paddingBlock="60px"
        w="100%"
        h="100%"
        background="linear-gradient(to bottom right, #EDF4D7 0%, #EDF4D7 50%, #FDF9EE 50%, #FDF9EE 100%)"
      >
        <Image src={titleImg} />
        <Spacer h="20px" />
        <Image src={descriptionImg} backgroundColor="transparent" />
      </Box>
      <Image src={mockup} position="absolute" top={0} right="-60px" h="100%" />
    </Box>
  );
};

export default PostFontPreview;
