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
      <Box position="relative" zIndex={1}>
        {header ? (
          <Text textStyle="t10" textTransform="uppercase" pb="10px">
            {header}
          </Text>
        ) : null}
        <Text
          textStyle={{
            base: "t7",
            lg: "t5",
          }}
          fontWeight={{
            base: "600 !important",
            lg: "700 !important"
          }}
          display="block"
        >
          {title}
        </Text>
        {description ? (
          <>
            <Spacer height="10px" />
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
      {image || mockup || video ? (
        <Box position="relative" display="block" zIndex={0}>
          {image ? (
            <>
              <Spacer
                height={{
                  lg: "32px",
                  base: "20px",
                }}
              />
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
              <Spacer
                height={{
                  lg: "32px",
                  base: "20px",
                }}
              />
              <Center>{mockup}</Center>
            </>
          ) : null}
          {video ? (
            <Box w="100%" maxW="650px" margin="0 auto">
              <video
                controls={false}
                loop
                muted
                autoPlay
                playsInline
                // preload="false"
              >
                <source
                  src={`https://drive.google.com/uc?export=download&id=${video}`}
                  type="video/mp4"
                />
              </video>
            </Box>
          ) : null}
        </Box>
      ) : null}
      {children ? (
        <>
          <Spacer
            height={{
              lg: "32px",
              base: "20px",
            }}
          />
          {children}
        </>
      ) : null}
    </Box>
  );
};

export default PostParagraph;
