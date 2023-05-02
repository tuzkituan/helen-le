import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
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
          >
            <Text
              w="fit-content"
              fontSize={{
                base: "28px",
                lg: "38px",
              }}
              lineHeight={{
                base: "38px",
                lg: "46px",
              }}
              fontWeight={400}
            >
              {description}
            </Text>
            <Text
              w="fit-content"
              fontSize="20px"
              lineHeight="28px"
              fontWeight={400}
            >
              {title}
            </Text>
            <Button
              w="fit-content"
              variant="solid"
              rightIcon={<img src={"icons/ic_arrow_right.svg"} alt="" />}
              iconSpacing={4}
            >
              Read more
            </Button>
          </Flex>
          <Flex gap={8} justifyContent="space-evenly">
            {images.map((x) => (
              <Box key={x}>
                <Image src={x} w="100%" h="100%" />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    );
  };

  return (
    <Box w="100%">
      <Text fontWeight="400" fontSize="24px" lineHeight="32px">
        My Work
      </Text>
      <Spacer h={4} />
      <Flex w="100%" gap="32px" flexDirection="column">
        {data.map((x) => _renderCard(x))}
      </Flex>
    </Box>
  );
};

export default MyWork;
