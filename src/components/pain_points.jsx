import { Box, Divider, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { CONTENT_MAX_W } from "../appConstants";

const PainPoints = ({ title = "PAIN POINTS", data = [] }) => {
  return (
    <Box
      paddingInline="20px"
      bgColor="#FDF9EE"
      borderRadius={8}
      paddingBlock={{
        lg: "60px",
        base: 8,
      }}
    >
      <Box maxW={CONTENT_MAX_W} margin="0 auto" w="100%">
        <Box>
          <Divider w="36px" bgColor="#C7C7C7" h="4px" mb={2} />
          <Text textStyle="t10">{title}</Text>
        </Box>
        <Spacer h="30px" />
        <Flex
          gap={{
            lg: "40px",
            base: 4,
          }}
          justifyContent="space-between"
          flexDirection={{
            base: "column",
            lg: "row",
          }}
        >
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
              <Text
                textStyle={{
                  base: "t8",
                  lg: "t7",
                }}
                textAlign="center"
              >
                {x.title}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default PainPoints;
