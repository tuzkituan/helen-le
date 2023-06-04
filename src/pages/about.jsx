import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box w="100%" margin="0 auto" maxW="936px">
      <Stack spacing="32px" divider={<Divider />}>
        {/* <Alert
          status="warning"
          borderRadius="8px"
          w="fit-content"
          fontSize="20px"
        >
          <AlertIcon />
          Everything will be OK. Try your best, my bé Cam ♥️
        </Alert> */}

        <Flex
          gap={{
            base: "32px",
            xl: "124px",
          }}
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Box borderRadius="8px" flex={1}>
            <Image
              src="images/orange_avatar.png"
              w={{
                base: "100%",
                lg: "25vw",
              }}
            />
          </Box>

          <Flex
            flexDirection="column"
            justifyContent="space-between"
            gap="32px"
            flex={2}
          >
            <Stack
              h="100%"
              spacing={{
                base: 4,
                lg: "24px",
              }}
            >
              <Text
                textStyle={{
                  base: "t6",
                  lg: "t5",
                }}
                fontWeight={{
                  base: "700 !important",
                  lg: "600 !important",
                }}
              >
                Hi there!
              </Text>
              <Text
                textStyle={{
                  base: "t8",
                  lg: "t7",
                }}
              >
                I&apos;m Helen, a UX/UI Designer with a number of experience
                design skills including wire-framing, prototyping, design
                thinking, user research, user interviews, usability testing,
                user flows, dashboard design, mobile app design, web app design,
                user experience (UX) design and user interface (UI) design.
              </Text>
            </Stack>
            <Box w="fit-content">
              <Button
                iconSpacing={4}
                rightIcon={
                  <img
                    src={"icons/ic_link_arrow.svg"}
                    alt=""
                    style={{
                      width: "12.5px",
                      height: "12.5px",
                    }}
                  />
                }
              >
                My resume
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Flex
          gap={{
            base: "32px",
            xl: "124px",
          }}
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Box flex={1}>
            <Text
              textStyle={{
                base: "t6",
                lg: "t7",
              }}
              color={{
                lg: "#6D6D6D",
              }}
              fontWeight={{
                base: "700",
                lg: "400",
              }}
            >
              How I continue to stay inspired and motivated?
            </Text>
          </Box>

          <Box flex={2}>
            <Text
              textStyle={{
                base: "t8",
                lg: "t7",
              }}
            >
              I&apos;m passionate about observing people&apos;s behaviors and
              interactions with the world around them. I draw inspiration from
              the challenges my friends and family face in their daily lives and
              use my expertise in human behavior, psychology, technology, and
              design to create assumption solutions that help them overcome
              those challenges. I&apos;m constantly inspired by the innovative
              approaches that leading designers take to solve problems,
              particularly those that have a positive impact on society.
            </Text>
          </Box>
        </Flex>

        <Flex
          gap={{
            base: "32px",
            xl: "124px",
          }}
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Text
            textStyle={{
              base: "t6",
              lg: "t7",
            }}
            color={{
              lg: "#6D6D6D",
            }}
            fontWeight={{
              base: "700",
              lg: "400",
            }}
            flex={1}
          >
            Professional experience
          </Text>

          <Flex
            flex={2}
            gap="32px"
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
            <Stack spacing={2} flex={1}>
              <Text
                textStyle={{
                  base: "t8",
                  lg: "t7",
                }}
                textAlign="left"
              >
                iLotusLand JSC
              </Text>
              <Text
                textStyle={{
                  base: "t8",
                  lg: "t7",
                }}
                color="#6D6D6D"
              >
                UX/UI Designer
              </Text>
            </Stack>

            <Text
              textStyle={{
                base: "t8",
                lg: "t7",
              }}
              flex={1}
              textAlign={{
                base: "left",
                lg: "right",
              }}
              color="#6D6D6D"
            >
              Jun 2022 - Current
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export default About;
