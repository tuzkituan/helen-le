import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import data from "../projects.json";
const MyWork = () => {
  const _renderCard = ({
    id,
    title,
    images = [],
    link = "",
    description,
    color,
  }) => {
    return (
      <Box
        key={id}
        bgColor={useColorModeValue(color, "blackAlpha.600")}
        p={{
          base: "24px",
          lg: "64px",
        }}
        borderRadius="8px"
        _hover={{
          cursor: "pointer",
        }}
        role="group"
        as={ReactRouterLink}
        to={link}
      >
        <Flex
          w="100%"
          justifyContent="space-between"
          gap={12}
          flexDirection={{
            base: "column",
            lg: "row",
          }}
        >
          <Flex
            flexDirection="column"
            gap="16px"
            justifyContent="center"
            w={{
              base: "100%",
              lg: "40%",
            }}
            order={{
              base: 2,
              lg: 1,
            }}
          >
            <Text
              w="fit-content"
              textStyle={{
                base: "t6",
                lg: "t5",
              }}
              fontWeight={500}
              _groupHover={{
                textDecoration: "underline",
                transition: "ease 0.5s",
              }}
              transition="ease 0.5s"
            >
              {description}
            </Text>
            <Text
              w="fit-content"
              textStyle={{
                base: "t9",
                lg: "t7",
              }}
              fontWeight={400}
            >
              {title}
            </Text>
            <Button
              w="fit-content"
              variant="solid"
              rightIcon={<img src={"icons/ic_arrow_right.svg"} alt="" />}
              iconSpacing={4}
              as={ReactRouterLink}
              to={link}
            >
              Read more
            </Button>
          </Flex>
          <Flex
            gap={8}
            justifyContent="space-evenly"
            _groupHover={{
              transform: `scale(1.1)`,
              transition: "ease 0.5s",
            }}
            transition="ease 0.5s"
            order={{
              base: 1,
              lg: 2,
            }}
          >
            {images.map((x) => (
              <Box key={x}>
                <Image
                  loading="lazy"
                  src={x}
                  w="100%"
                  h="100%"
                  maxW={images.length > 1 ? "250px" : "500px"}
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    );
  };

  return (
    <Box w="100%">
      <Flex w="100%" gap="32px" flexDirection="column">
        {data.map((x) => _renderCard(x))}
      </Flex>
    </Box>
  );
};

export default MyWork;
