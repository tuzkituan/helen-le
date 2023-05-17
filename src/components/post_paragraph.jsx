import { Box, Center, Image, Spacer, Text } from "@chakra-ui/react";

const PostParagraph = ({ title, description, image, mockup }) => {
  return (
    <Box pl="148px">
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
            maxW="900px"
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
    </Box>
  );
};

export default PostParagraph;
