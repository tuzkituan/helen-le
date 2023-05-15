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
    <Box w="100%">
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
            <Stack h="100%" spacing="24px">
              <Text fontSize="46px" lineHeight="54px" fontWeight={400}>
                Hi there!
              </Text>
              <Text fontSize="20px" lineHeight="38px" fontWeight={400}>
                I&apos;m Helen, a UX/UI designer dedicated to creating designs
                that have a positive impact on people&apos;s lives. I constantly
                strive for improvement and always ask myself, &apos;How can this
                be better?&apos; in every design I create.
              </Text>
            </Stack>
            <Box w="fit-content">
              <Button
                rightIcon={<img src={"icons/ic_link_arrow.svg"} alt="" />}
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
              fontWeight={400}
              fontSize="20px"
              lineHeight="38px"
              color="#6D6D6D"
            >
              How I continue to stay inspired and motivated?
            </Text>
          </Box>

          <Box flex={2}>
            <Text fontWeight={400} fontSize="20px" lineHeight="38px">
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
            fontWeight={400}
            fontSize="20px"
            lineHeight="38px"
            color="#6D6D6D"
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
                fontWeight={400}
                fontSize="20px"
                lineHeight="38px"
                textAlign="left"
              >
                iLotusLand JSC
              </Text>
              <Text
                fontWeight={400}
                fontSize="20px"
                lineHeight="38px"
                color="#6D6D6D"
              >
                UX/UI Designer
              </Text>
            </Stack>

            <Text
              fontWeight={400}
              fontSize="20px"
              lineHeight="38px"
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
