import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import projects from "../projects.json";

const PostNavigator = ({ current }) => {
  const _renderButton = (item, type) => {
    const text = type === "prev" ? "PREV" : "NEXT";
    const justifyContent = type === "prev" ? "flex-start" : "flex-end";
    const order = type === "prev" ? "row-reverse" : "row";
    const icon =
      type === "prev"
        ? "../icons/ic_chevron_left.svg"
        : "../icons/ic_chevron_right.svg";
    return (
      <Flex
        justifyContent={justifyContent}
        w="100%"
        marginTop={{
          base: "calc(80px - 48px)",
          lg: "calc(112px - 80px)",
        }}
      >
        <Box as={Link} to={item.link} w="fit-content">
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
              borderRadius="50%"
              icon={<Image src={icon} w="20px" h="20px" />}
            ></IconButton>
          </Flex>
        </Box>
      </Flex>
    );
  };

  const prev = () => {
    if (current > 0) {
      return {
        name: projects[current - 1].title,
        link: projects[current - 1].link,
      };
    }
    return null;
  };

  const next = () => {
    if (current < projects.length - 1) {
      return {
        name: projects[current + 1].title,
        link: projects[current + 1].link,
      };
    }
    return null;
  };

  return (
    <Box>
      {prev() ? _renderButton(prev(), "prev") : null}
      {next() ? _renderButton(next(), "next") : null}
    </Box>
  );
};

export default PostNavigator;
