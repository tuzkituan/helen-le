import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostNavigator = ({ prev, next }) => {
  const _renderButton = (item, type) => {
    const text = type === "prev" ? "PREV" : "NEXT";
    const justifyContent = type === "prev" ? "flex-start" : "flex-end";
    const order = type === "prev" ? "row-reverse" : "row";
    const icon =
      type === "prev"
        ? "icons/ic_chevron_left.svg"
        : "icons/ic_chevron_right.svg";
    return (
      <Flex justifyContent={justifyContent} w="100%">
        <Flex gap="30px" w="fit-content" flexDirection={order}>
          <Flex flexDirection="column">
            <Text
              textStyle={{
                base: "t10",
                lg: "t9",
              }}
              color="#7A7A7A"
            >
              {text}
            </Text>
            <Text
              textStyle={{
                base: "t8",
                lg: "t7",
              }}
            >
              {item.name}
            </Text>
          </Flex>

          <IconButton
            as={Link}
            borderRadius="50%"
            to={item.link}
            icon={<Image src={icon} w="20px" h="20px" />}
          ></IconButton>
        </Flex>
      </Flex>
    );
  };
  return (
    <div>
      {prev ? _renderButton(prev, "prev") : null}
      {next ? _renderButton(next, "next") : null}
    </div>
  );
};

export default PostNavigator;
