import { Box, Image } from "@chakra-ui/react";

const IphoneMockup = ({ image }) => {
  return (
    <Box w="277px" position="relative">
      <Image
        src={"images/img_iphone_frame.png"}
        position="inherit"
        zIndex={5}
        display="block"
      />
      {image ? (
        <Image
          src={image}
          position="absolute"
          top={5}
          left={0}
          right={0}
          bottom={0}
          zIndex={1}
          display="block"
          loading="lazy"
          w="87%"
          margin="0 auto"
        />
      ) : null}
    </Box>
  );
};

export default IphoneMockup;
