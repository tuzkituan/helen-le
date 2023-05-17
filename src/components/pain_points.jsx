import { Box, Divider, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const PainPoints = ({ title = "PAIN POINTS", data = [] }) => {
  return (
    <Box
      bgColor="#FDF9EE"
      borderRadius={8}
      paddingBlock="60px"
      paddingInline="50px"
    >
      <Box>
        <Divider w="36px" bgColor="#C7C7C7" h="4px" mb={2} />
        <Text textStyle="t10">{title}</Text>
      </Box>
      <Spacer h="30px" />
      <Flex gap="40px" justifyContent="space-between">
        {data.map((x) => (
          <Flex
            key={x.id}
            flexDirection="column"
            gap={4}
            // justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Image src={x.image} w="100%" />
            <Text textStyle="t7" textAlign="center">
              {x.title}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default PainPoints;
