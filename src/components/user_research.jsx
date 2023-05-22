import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const PATTERNS = [
  "images/img_pattern_1.png",
  "images/img_pattern_2.png",
  "images/img_pattern_3.png",
];

const UserResearch = ({ data = [] }) => {
  return (
    <Flex gap="40px" justifyContent="center" w="100%" flexWrap="wrap">
      {data.map((x, i) => (
        <Box
          key={x.id}
          position="relative"
          overflow="hidden"
          borderRadius="24px"
          boxShadow="0px 8px 16px -4px rgba(9, 26, 47, 0.08)"
          // h="390px"
          h="395px"
          minW="325px"
          maxW="325px"
          flex={1}
          // maxW="400px"
          // minW="300px"
        >
          <Image
            w="100%"
            src={x.image}
            position="absolute"
            top={0}
            left={0}
            right={0}
            display="block"
            zIndex={1}
          />
          <Box
            position="absolute"
            right="-20px"
            bottom="-36px"
            zIndex={3}
            h="52%"
          >
            <Image
              w="100%"
              src={PATTERNS[i]}
              display="block"
              transform="scale(1.5)"
            />
            <Box
              zIndex={10}
              position="absolute"
              top={0}
              left={0}
              right={0}
              paddingInline={8}
              paddingBlock={2}
            >
              <Text textStyle="t6" fontWeight={700}>
                {x.name}
              </Text>
              <Spacer h="4px" />
              <Text textStyle="t10">{x.position}</Text>
              <Spacer h="4px" />
              <Text textStyle="t8">{x.content}</Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default UserResearch;
