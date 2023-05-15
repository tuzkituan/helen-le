import { Box, Image, Spacer, Text } from "@chakra-ui/react";

const PostParagraph = ({ title, description, image }) => {
  return (
    <Box pl="148px">
      <Text
        fontSize={{
          base: "24px",
          lg: "32px",
        }}
        fontWeight={700}
        lineHeight={{
          base: "36px",
          lg: "48px",
        }}
      >
        {title}
      </Text>
      <Spacer height="20px" />
      <Text
        fontSize={{
          base: "16px",
          lg: "20px",
        }}
        fontWeight={400}
        lineHeight={{
          base: "24px",
          lg: "30px",
        }}
      >
        {description}
      </Text>
      {image ? (
        <>
          <Spacer height="20px" />
          <Image src={image} />
        </>
      ) : null}
    </Box>
  );
};

export default PostParagraph;
