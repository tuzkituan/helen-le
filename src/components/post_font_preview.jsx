import { Box, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { CONTENT_MAX_W } from "../appConstants";

const PostFontPreview = ({ titleImg, descriptionImg, mockup }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      maxW={CONTENT_MAX_W}
      margin="0 auto"
      w="100%"
    >
      <Box
        // bgColor="#EDF4D7"
        marginBlock="97px"
        paddingInline={{
          base: 4,
          lg: "64px",
        }}
        paddingBlock="60px"
        borderRadius="8px 0 8px 0"
        w="100%"
        h="100%"
        background="linear-gradient(to bottom right, #EDF4D7 0%, #EDF4D7 50%, #FDF9EE 50%, #FDF9EE 100%)"
      >
        <Image
          src={titleImg}
          maxW={{
            base: "200px",
            lg: "100%",
          }}
        />
        <Spacer h="20px" />
        <Image
          src={descriptionImg}
          backgroundColor="transparent"
          maxW={{
            base: "300px",
            lg: "100%",
          }}
        />
      </Box>
      <Image
        src={mockup}
        position="absolute"
        top={{
          base: "15%",
          lg: 0,
        }}
        right={{
          lg: "-150px",
          base: "-110px",
        }}
        h={{
          base: "70%",
          lg: "100%",
        }}
      />
    </Box>
  );
};

export default PostFontPreview;
