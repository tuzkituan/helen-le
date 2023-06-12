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
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { CONTENT_MAX_W } from "../appConstants";

const UserPersonas = ({
  title = "USER PERSONAS",
  info: { name, age, position, avatar },
  data = [],
}) => {
  const [isSmallerThan992] = useMediaQuery("(max-width: 992px)");

  return (
    <Box
      bgColor="#EDF4D7"
      borderRadius={8}
      paddingInline="20px"
      position="relative"
      paddingBlock={{
        lg: "60px",
        base: 8,
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
            lg: "30px",
            base: "20px",
          }}
        />
        <Flex
          gap={{
            base: "20px",
            lg: "64px",
          }}
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
            w={{
              base: "100%",
              lg: "45%",
            }}
            gap={4}
          >
            <Box
              w={{
                base: "46px",
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
              spacing={{
                lg: 2,
                base: 0,
              }}
            >
              <Text
                textStyle={{
                  base: "t7",
                  lg: "t6",
                }}
                fontWeight="600 !important"
              >
                {name}
              </Text>
              <Flex
                flexDirection={{
                  base: "row",
                  lg: "column",
                }}
                justifyContent={{
                  base: "flex-start",
                  lg: "center",
                }}
                alignItems="center"
                flexWrap="wrap"
                gap={{
                  base: "8px",
                  lg: "2px",
                }}
              >
                <Text
                  textStyle={{
                    base: "t10",
                    lg: "t8",
                  }}
                  order={{
                    base: 3,
                    lg: 1,
                  }}
                >
                  {age} years old
                </Text>
                {isSmallerThan992 ? (
                  <Image
                    src="../icons/ic_dot.svg"
                    w="4px"
                    h="4px"
                    order={{
                      base: 2,
                    }}
                  />
                ) : null}
                <Text
                  textStyle={{
                    base: "t10",
                    lg: "t8",
                  }}
                  order={{
                    base: 1,
                    lg: 3,
                  }}
                >
                  {position}
                </Text>
              </Flex>
            </Stack>
          </Flex>
          <Flex
            flexDirection="column"
            gap={{
              base: "16px",
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
