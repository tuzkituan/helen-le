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
        base: "20px",
      }}
      boxShadow={{
        base: "0px 4px 8px rgba(182, 182, 182, 0.15)",
        lg: "none",
      }}
    >
      <Box maxW={CONTENT_MAX_W} margin="0 auto" w="100%">
        <Box>
          <Divider w="36px" bgColor="#C7C7C7" h="4px" mb={2} />
          <Text textStyle="t10">{title}</Text>
        </Box>
        <Spacer
          h={{
            base: "20px",
            lg: "32px",
          }}
        />
        <Flex
          gap={{
            lg: "32px",
            base: "20px",
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
              gap={{
                base: "10px",
                lg: "16px",
              }}
              // justifyContent="center"
              alignItems="center"
              flex={1}
            >
              <Box
                position="relative"
                aspectRatio={{
                  base: "4/3",
                  lg: "1/1",
                }}
                w="100%"
                borderRadius="4px"
                overflow="hidden"
              >
                <Image
                  src={x.image}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                />
              </Box>
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
