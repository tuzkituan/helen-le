import { Box, Center, Image, Spacer, Text } from "@chakra-ui/react";

const PostParagraph = ({
  header,
  title,
  description,
  image,
  mockup,
  video,
  maxW,
  videoAutoPlay = true,
}) => {
  return (
    <Box paddingInline={40}>
      {header ? (
        <Text textStyle="t10" textTransform="uppercase" pb="20px">
          {header}
        </Text>
      ) : null}
      <Text textStyle="t5" fontWeight={700}>
        {title}
      </Text>
      <Spacer height="20px" />
      <Text textStyle="t7">{description}</Text>
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
  );
};

export default PostParagraph;
