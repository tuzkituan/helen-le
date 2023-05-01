import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";

const MyWork = () => {
  const cards = [
    {
      id: 1,
      description: "Healthy recipe planner & delivery app.",
      title: "Nurix",
      link: "#",
      images: ["images/nurix_1.png", "images/nurix_2.png"],
      color: "#EDF4D7",
    },
    {
      id: 2,
      description: "Improve the parking experience.",
      title: "Navo",
      link: "#",
      images: ["images/navo_1.png", "images/navo_2.png"],
      color: "#D5E6FB",
    },
    {
      id: 3,
      description: "Enhances farm operations for Vietnamese farmers.",
      title: "Farmate",
      link: "#",
      images: ["images/farmate_1.png"],
      color: "#CCDDD9",
    },
  ];

  const _renderCard = ({
    id,
    title,
    images = [],
    link = "",
    description,
    color,
  }) => {
    return (
      <Box key={id} bgColor={color} p="64px" borderRadius="8px">
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
              fontSize="38px"
              lineHeight="46px"
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
        {cards.map((x) => _renderCard(x))}
      </Flex>
    </Box>
  );
};

export default MyWork;
