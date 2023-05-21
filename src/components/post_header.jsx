import { Box, Spacer, Text } from "@chakra-ui/react";

const PostHeader = ({ title, description }) => {
  return (
    <Box paddingInline={40}>
      <Text textStyle="t2">{title}</Text>
      <Spacer height="20px" />
      <Text textStyle="t5">{description}</Text>
    </Box>
  );
};

export default PostHeader;
