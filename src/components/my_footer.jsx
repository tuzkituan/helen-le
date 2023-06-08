import {
  Box,
  Button,
  Divider,
  Flex,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { MAIN_MAX_W } from "../appConstants";
import { MY_DATA } from "../myData";
const MyFooter = () => {
  const data = [
    {
      name: "About",
      link: MY_DATA.ABOUT,
    },
    {
      name: "My resume",
      link: MY_DATA.RESUME,
      newTab: true,
    },
    {
      name: "LinkedIn",
      link: MY_DATA.LINKED_IN,
      newTab: true,
    },
  ];

  return (
    <Box
      paddingInline={{
        // md: "104px",
        // sm: "24px",
        // lg: "104px",
        // xl: "230px",
        base: 8,
      }}
      bgColor="#141414"
      paddingBlock="56px"
    >
      <Flex
        gap={{
          base: 6,
          lg: "32px",
        }}
        alignItems="flex-start"
        color="#F5F5FA"
        flexDirection="column"
        maxW={MAIN_MAX_W}
        w="100%"
        margin="0 auto"
      >
        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          spacing={8}
          w="100%"
        >
          {/* {blocks.map((x) => _renderBlock(x))} */}
          <Box flex={1}>
            <Text textStyle="t7">
              I would love to hear from you. <br />
              Let’s do great things together!
            </Text>
            <Spacer h="16px" />
            <Button
              variant="outline"
              rightIcon={
                <img
                  src="../icons/ic_link_arrow.svg"
                  style={{
                    width: "12.5px",
                    height: "12.5px",
                  }}
                />
              }
              iconSpacing={4}
              as={ReactRouterLink}
              to={`mailto:${MY_DATA.EMAIL}`}
            >
              Email me
            </Button>
          </Box>
          <Box flex={1} paddingTop={0.5}>
            <Text textStyle="t8">Know more about me</Text>
            <Spacer h="6px" />
            <Flex gap="32px">
              {data.map((x) => (
                <Link
                  key={x.name}
                  href={x.link}
                  target={x.newTab ? "_blank" : null}
                  textStyle="t7"
                >
                  {x.name}
                </Link>
              ))}
            </Flex>
          </Box>
        </Stack>
        <Divider borderColor="#2C2C2C" />
        <Text
          color="#C7C7C7"
          textStyle={{
            base: "t10",
            lg: "t9",
          }}
        >
          Written, designed by Helen Le and built by Lewis Nguyen © 2023
        </Text>
      </Flex>
    </Box>
  );
};

export default MyFooter;
