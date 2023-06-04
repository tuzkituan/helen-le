import { Box, Spacer, Text } from "@chakra-ui/react";
import { CONTENT_MAX_W } from "../appConstants";

const PostHeader = ({ title, description }) => {
  return (
    <Box maxW={CONTENT_MAX_W} margin="0 auto" w="100%">
      <Text
        textStyle={{
          base: "t6",
          lg: "t4",
        }}
        fontWeight="700 !important"
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
