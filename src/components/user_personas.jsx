import {
  Box,
  Divider,
  Flex,
  Image,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { CONTENT_MAX_W } from "../appConstants";

const UserPersonas = ({
  title = "USER PERSONAS",
  info: { name, age, position, avatar },
  data = [],
}) => {
  return (
    <Box
      bgColor="#EDF4D7"
      borderRadius={8}
      paddingInline={8}
      position="relative"
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
          gap="64px"
          flexDirection={{
            base: "column",
            lg: "row",
          }}
        >
          <Flex
            flexDirection={{
              base: "row",
              lg: "column",
            }}
            alignItems={{
              base: "flex-start",
              lg: "center",
            }}
            justifyContent="space-between"
            w="45%"
            gap={4}
          >
            <Box
              w={{
                base: "72px",
                lg: "100%",
              }}
              order={{
                base: 2,
                lg: 1,
              }}
            >
              <Image
                src={avatar}
                borderRadius={{
                  base: "50%",
                  lg: 8,
                }}
                objectFit="cover"
                w="100%"
              />
            </Box>

            {/* <Spacer display="block" h="16px" /> */}
            <Stack
              textAlign={{
                base: "left",
                lg: "center",
              }}
              order={{
                base: 1,
                lg: 2,
              }}
            >
              <Text textStyle="t6" fontWeight="700 !important">
                {name}
              </Text>
              <Text textStyle="t8">{age} years old</Text>
              <Text textStyle="t8">{position}</Text>
            </Stack>
          </Flex>
          <Flex
            flexDirection="column"
            gap={{
              base: 8,
              lg: "30px",
            }}
          >
            {data.map((x) => (
              <Box
                key={x.title}
                bgColor={{
                  base: "none",
                  lg: "rgba(255, 255, 255, 0.7)",
                }}
                p={{
                  base: 0,
                  lg: "32px",
                }}
              >
                <Text
                  textStyle={{
                    base: "t8",
                    lg: "t6",
                  }}
                  fontWeight="700 !important"
                >
                  {x.title}
                </Text>
                <Spacer h="10px" />
                <UnorderedList>
                  {x.items.map((t) => (
                    <ListItem
                      textStyle={{
                        base: "t8",
                        lg: "t7",
                      }}
                      key={t}
                    >
                      {t}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default UserPersonas;
