import { Flex, Text } from "@chakra-ui/react";

const PostColorPreview = ({ colors = [] }) => {
  return (
    <Flex w="100%">
      {colors.map((x) => (
        <Flex
          justifyContent="center"
          alignItems="center"
          key={x}
          flex={1}
          bgColor={x}
          h="112px"
        >
          <Text textStyle="t7">{x}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default PostColorPreview;
