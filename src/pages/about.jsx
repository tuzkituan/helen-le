import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { MY_DATA } from "../myData";
import { CONTENT_MAX_W } from "../appConstants";

const About = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");

  return (
    <Box w="100%" margin="0 auto" maxW={CONTENT_MAX_W}>
      <Stack
        spacing={{
          base: "48px",
          lg: "76px",
        }}
      >
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
            base: "20px",
            md: 8,
            xl: "64px",
          }}
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Box borderRadius="8px" flex={1} overflow="hidden">
            <Image
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qNMClxYGm2GwBU7v2fSCBhDEinMdrmSr6GMrMoGuctTchn_J4cuofci48iiqgTahdBli0heR4dhfoGACghJfvlQAmH=s1600"
              w={{
                base: "100%",
                // lg: "25vw",
              }}
              h="100%"
              objectFit="cover"
            />
          </Box>

          <Flex
            flexDirection="column"
            justifyContent="space-between"
            gap={{
              base: "20px",
              lg: "32px",
            }}
            flex={2}
          >
            <Stack
              h="100%"
              spacing={{
                base: "10px",
                lg: "24px",
              }}
            >
              <Text
                textStyle={{
                  base: "t6",
                  md: "t5",
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
                  md: "t7",
                }}
              >
                I&apos;m Helen, a UX/UI designer with a number of experience
                design skills including wire-framing, prototyping, design
                thinking, user research, user interviews, usability testing,
                user flows, dashboard design, mobile app design, web app design,
                user experience (UX) design and user interface (UI) design.
              </Text>
            </Stack>
            <Box w="fit-content">
              <Button
                iconSpacing="14px"
                variant="solid"
                size={{ base: "base", lg: "lg" }}
                onClick={() => window.open(MY_DATA.RESUME)}
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
            base: "10px",
            md: 8,
            xl: "64px",
          }}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          borderTop={{
            base: 0,
            lg: "1px solid #E8E8E8",
          }}
          paddingTop={{
            base: "none",
            lg: "32px",
          }}
        >
          <Box flex={1}>
            <Text
              textStyle={{
                base: "t6",
                md: "t7",
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
                md: "t7",
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
            base: "10px",
            md: 8,
            xl: "64px",
          }}
          flexDirection={{
            base: "column",
            md: "row",
          }}
          borderTop={{
            base: 0,
            lg: "1px solid #E8E8E8",
          }}
          paddingTop={{
            base: "0",
            lg: "32px",
          }}
        >
          <Text
            textStyle={{
              base: "t6",
              md: "t7",
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
            Experience
          </Text>

          {isSmallerThanMd ? (
            <Flex
              flex={2}
              gap="8px"
              flexDirection={{
                base: "column",
                md: "row",
              }}
            >
              <Flex gap={2} flex={1} alignItems="center">
                <Text
                  textStyle={{
                    base: "t8",
                    md: "t7",
                  }}
                  textAlign="left"
                >
                  iLotusLand JSC
                </Text>
                <img
                  src="../icons/ic_dot.svg"
                  style={{
                    width: 4,
                    height: 4,
                  }}
                />
                <Text
                  textStyle={{
                    base: "t8",
                    md: "t7",
                  }}
                >
                  UX/UI Designer
                </Text>
              </Flex>

              <Text
                textStyle={{
                  base: "t8",
                  md: "t7",
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
          ) : (
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
                    md: "t7",
                  }}
                  textAlign="left"
                >
                  iLotusLand JSC
                </Text>
                <Text
                  textStyle={{
                    base: "t8",
                    md: "t7",
                  }}
                  color="#6D6D6D"
                >
                  UX/UI Designer
                </Text>
              </Stack>

              <Text
                textStyle={{
                  base: "t8",
                  md: "t7",
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
          )}
        </Flex>
      </Stack>
    </Box>
  );
};

export default About;
