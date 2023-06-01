import { Flex, Text } from "@chakra-ui/react";

const PostColorPreview = ({ colors = [] }) => {
  return (
    <Flex w="100%" borderRadius={8} overflow="hidden">
      {colors.map((x) => (
        <Flex
          justifyContent="center"
          alignItems="center"
          key={x.id}
          flex={1}
          bgColor={x.id}
          h={{
            base: "40px",
            lg: "112px",
          }}
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
