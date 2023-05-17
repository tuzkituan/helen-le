import { Box, Image, Spacer } from "@chakra-ui/react";
import React from "react";

const PostFontPreview = ({ titleImg, descriptionImg, mockup }) => {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        bgColor="#EDF4D7"
        marginBlock="97px"
        paddingInline="148px"
        paddingBlock="60px"
      >
        <Image src={titleImg} />
        <Spacer h="20px" />
        <Image src={descriptionImg} />
      </Box>
      <Image src={mockup} position="absolute" top={0} right="148px" h="100%" />
    </Box>
  );
};

export default PostFontPreview;
