import { Box, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { CONTENT_MAX_W } from "../appConstants";

const PostFontPreview = ({ titleImg, descriptionImg, mockup }) => {
  return (
    <Box
      position="relative"
      // overflow="hidden"
      maxW={CONTENT_MAX_W}
      margin="0 auto"
      w="100%"
      marginTop="-58px"
    >
      <Box
        // bgColor="#EDF4D7"
        marginBlock="80px"
        paddingInline={{
          base: "32px",
          lg: "64px",
        }}
        paddingBlock={{
          base: "24px",
          md: "60px",
          lg: "60px",
        }}
        borderRadius={{
          lg: "8px 0 8px 0",
          base: 0,
        }}
        w="100%"
        h="100%"
        background="linear-gradient(to bottom right, #EDF4D7 0%, #EDF4D7 50%, #FDF9EE 50%, #FDF9EE 100%)"
      >
        <Image
          src={titleImg}
          maxW={{
            base: "150px",
            sm: "200px",
            lg: "100%",
          }}
        />
        <Spacer
          h={{
            base: "12px",
            lg: "20px",
          }}
        />
        <Image
          src={descriptionImg}
          backgroundColor="transparent"
          maxW={{
            base: "170px",
            sm: "300px",
            lg: "100%",
          }}
        />
      </Box>
      <Image
        src={mockup}
        position="absolute"
        top={{
          base: "-35px",
          sm: "-33px",
          md: "-42px",
          lg: "-35px",
        }}
        right={{
          sm: "-98px",
          lg: "-128px",
          base: "-94px",
        }}
        h={{
          base: "auto",
          sm: "128%",
          md: "128%",
          lg: "125%",
        }}
        w={{
          base: "417px",
          sm: "unset",
        }}
      />
    </Box>
  );
};

export default PostFontPreview;
