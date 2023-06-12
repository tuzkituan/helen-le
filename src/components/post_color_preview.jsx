import { Flex, Text } from "@chakra-ui/react";
import { CONTENT_MAX_W } from "../appConstants";

const PostColorPreview = ({ colors = [] }) => {
  const width = ["38%", "24%", "19%", "19%"];
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
            lg: "81px",
          }}
          paddingInline={{
            base: "6px",
            lg: "16px",
          }}
          w={width[i]}
        >
          <Text
            textStyle={{
              base: "t10",
              lg: "t6",
            }}
            color={x.textColor}
            fontWeight={
              i === 3 || i === 2
                ? {
                    lg: "500 !important",
                  }
                : null
            }
          >
            {x.id}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default PostColorPreview;
