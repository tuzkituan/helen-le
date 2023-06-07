import { Box, Center, Image, Spacer, Text } from "@chakra-ui/react";
import { CONTENT_MAX_W, MAIN_MAX_W } from "../appConstants";

const PostParagraph = ({
  header,
  title,
  description,
  image,
  mockup,
  video,
  maxW,
  videoAutoPlay = true,
  children,
}) => {
  return (
    <Box maxW={CONTENT_MAX_W} margin="0 auto" w="100%">
      <Box>
        {header ? (
          <Text textStyle="t10" textTransform="uppercase" pb="20px">
            {header}
          </Text>
        ) : null}
        <Text
          textStyle={{
            base: "t7",
            lg: "t5",
          }}
          fontWeight="700 !important"
        >
          {title}
        </Text>
        {description ? (
          <>
            <Spacer height="20px" />
            <Text
              textStyle={{
                base: "t8",
                lg: "t7",
              }}
            >
              {description}
            </Text>
          </>
        ) : null}
      </Box>
      <Box position="relative" display="block">
        {image ? (
          <>
            <Spacer height="64px" />
            <Image
              margin="0 auto"
              display="block"
              src={image}
              w="100%"
              maxW={maxW || "340px"}
              loading="lazy"
            />
          </>
        ) : null}
        {mockup ? (
          <>
            <Spacer height="64px" />
            <Center>{mockup}</Center>
          </>
        ) : null}
        {video ? (
          <Box w="100%" maxW="650px" margin="0 auto">
            <video
              controls={false}
              loop
              muted=""
              autoPlay
              playsInline=""
              preload="false"
            >
              <source
                src={`https://drive.google.com/uc?export=download&id=${video}`}
                type="video/mp4"
              />
            </video>
          </Box>
        ) : null}
      </Box>
      {children ? (
        <>
          <Spacer height="32px" />
          {children}
        </>
      ) : null}
    </Box>
  );
};

export default PostParagraph;
