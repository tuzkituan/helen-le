import { Box, Image } from "@chakra-ui/react";

const IphoneMockup = ({ image, video }) => {
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
          top={1.5}
          left={0}
          right={0}
          bottom={0}
          zIndex={1}
          display="block"
          loading="lazy"
          w="95%"
          margin="0 auto"
        />
      ) : null}

      {video ? (
        <Box
          position="absolute"
          top={2}
          left={0}
          right={0}
          bottom={2}
          zIndex={11}
          display="block"
          w="87%"
          margin="0 auto"
          overflow="hidden"
          borderRadius="30px"
        >
          <iframe
            src={`${video}?start=1`}
            allow="autoplay"
            style={{
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </Box>
      ) : null}
    </Box>
  );
};

export default IphoneMockup;
