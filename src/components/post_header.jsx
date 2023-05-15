import { Box, Spacer, Text } from "@chakra-ui/react";

const PostHeader = ({ title, description }) => {
  return (
    <Box>
      <Text
        fontSize={{
          base: "24px",
          lg: "60px",
        }}
        fontWeight={700}
        lineHeight={{
          base: "36px",
          lg: "72px",
        }}
      >
        {title}
      </Text>
      <Spacer height="20px" />
      <Text
        fontSize={{
          base: "16px",
          lg: "32px",
        }}
        fontWeight={400}
        lineHeight={{
          base: "24px",
          lg: "48px",
        }}
      >
        {description}
      </Text>
    </Box>
  );
};

export default PostHeader;
