import { Box, Image, Spacer, Text } from "@chakra-ui/react";

const PostParagraph = ({ title, description, image }) => {
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
            maxW="800px"
          />
        </>
      ) : null}
    </Box>
  );
};

export default PostParagraph;
