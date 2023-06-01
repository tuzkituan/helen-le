import { Box, Spacer, Text } from "@chakra-ui/react";

const PostHeader = ({ title, description }) => {
  return (
    <Box>
      <Text
        textStyle={{
          base: "t6",
          lg: "t2",
        }}
        fontWeight="700"
      >
        {title}
      </Text>
      <Spacer height="20px" />
      <Text
        textStyle={{
          base: "t8",
          lg: "t5",
        }}
      >
        {description}
      </Text>
    </Box>
  );
};

export default PostHeader;
