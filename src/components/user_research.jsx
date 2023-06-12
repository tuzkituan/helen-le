import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { MAIN_MAX_W } from "../appConstants";

const PATTERNS = [
  "../images/img_pattern_1.png",
  "../images/img_pattern_2.png",
  "../images/img_pattern_3.png",
];

const UserResearch = ({ data = [] }) => {
  return (
    <Box
      marginInline={{
        base: "-20px",
        lg: 0,
      }}
    >
      <Flex
        gap="32px"
        overflowX="auto"
        maxW={MAIN_MAX_W}
        w="100%"
        justifyContent={{
          base: "unset",
          lg: "space-between",
        }}
        paddingBottom={4}
        paddingInline={{
          base: "20px",
          lg: 0,
        }}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none",
        }}
      >
        {data.map((x, i) => (
          <Box
            key={x.id}
            position="relative"
            borderRadius="24px"
            overflow="hidden"
            boxShadow="0px 8px 16px -4px rgba(9, 26, 47, 0.08)"
            // h="390px"
            h="405px"
            minW={{
              base: "280px",
              lg: "unset",
            }}
            maxW={{
              base: "280px",
              lg: "unset",
            }}
            flex={{
              base: "",
              lg: 1,
            }}
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
              // right="-20px"
              bottom="-36px"
              zIndex={3}
              h="49%"
            >
              <Image
                w="100%"
                src={PATTERNS[i]}
                display="block"
                transform="scale(1.55)"
              />
              <Box
                zIndex={10}
                position="absolute"
                top={0}
                left={0}
                right={0}
                paddingInline={{
                  base: "20px",
                  // lg: 8,
                }}
                paddingBlock={2}
              >
                <Text textStyle="t6" fontWeight="700 !important">
                  {x.name}
                </Text>
                <Spacer h="4px" />
                <Text textStyle="t10">{x.position}</Text>
                <Spacer h="4px" />
                <Text
                  textStyle="t8"
                  style={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    "-webkit-line-clamp": 3,
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {x.content}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default UserResearch;
