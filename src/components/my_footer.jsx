import {
  Box,
  Divider,
  Flex,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
const MyFooter = () => {
  const blocks = [
    {
      label: "If you want to learn more about me, please check",
      items: [
        {
          name: "Email",
          link: "#",
        },
        {
          name: "LinkedIn",
          link: "#",
        },
      ],
    },
    {
      label: "I would love to hear from you. Please contact me",
      items: [
        {
          name: "About",
          link: "#",
        },
        {
          name: "My resume",
          link: "#",
        },
      ],
    },
  ];
  const _renderBlock = ({ label, items = [] }) => {
    return (
      <Box key={label} flex={1}>
        <Text color="#C7C7C7" textStyle="t7">
          {label}
        </Text>
        <Spacer height={6} />
        {items.map((x) => (
          <Link to={x.link} key={x.name} display="block" marginBlock={3}>
            <Flex alignItems="center" gap={4}>
              <Text textStyle="t7">{x.name}</Text>
              <img src="icons/ic_link_arrow.svg" />
            </Flex>
          </Link>
        ))}
      </Box>
    );
  };
  return (
    <Box
      paddingInline={{
        md: "104px",
        sm: "24px",
        lg: "104px",
        xl: "230px",
        base: "24px",
      }}
      bgColor="#141414"
      paddingBlock="72px"
    >
      <Flex
        gap={12}
        alignItems="flex-start"
        color="#FAFAFA"
        flexDirection="column"
        maxW="1200px"
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
          {blocks.map((x) => _renderBlock(x))}
        </Stack>
        <Divider bgColor="#C7C7C7" />
        <Text color="#C7C7C7" textStyle="t7">
          Written, designed by Helen Le and built by Lewis Nguyen © 2023
        </Text>
      </Flex>
    </Box>
  );
};

export default MyFooter;
