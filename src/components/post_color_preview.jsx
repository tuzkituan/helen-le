import { Flex, Text } from "@chakra-ui/react";
import { CONTENT_MAX_W } from "../appConstants";

const PostColorPreview = ({ colors = [] }) => {
  const width = ["45%", "25%", "15%", "15%"];
  return (
    <Flex
      w="100%"
      borderRadius={8}
      overflow="hidden"
      maxW={CONTENT_MAX_W}
      margin="0 auto"
    >
      {colors.map((x, i) => (
        <Flex
          justifyContent="center"
          alignItems="center"
          key={x.id}
          // flex={1}
          bgColor={x.id}
          h={{
            base: "40px",
            lg: "112px",
          }}
          w={width[i]}
        >
          <Text
            textStyle={{
              base: "t10",
              lg: "t7",
            }}
            color={x.textColor}
          >
            {x.id}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default PostColorPreview;
