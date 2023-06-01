import { Box, Image, Spacer } from "@chakra-ui/react";
import React from "react";

const PostFontPreview = ({ titleImg, descriptionImg, mockup }) => {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        // bgColor="#EDF4D7"
        marginBlock="97px"
        paddingInline={4}
        paddingBlock="60px"
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
          lg: "-90px",
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
