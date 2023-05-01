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
          name: "About",
          link: "#",
        },
        {
          name: "My resume",
          link: "#",
        },
      ],
    },
    {
      label:
        "I’m open to new opportunities and would love to hear from you. Please contact me by",
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
  ];
  const _renderBlock = ({ label, items = [] }) => {
    return (
      <Box key={label} flex={1}>
        <Text color="#C7C7C7">{label}</Text>
        <Spacer height={6} />
        {items.map((x) => (
          <Link to={x.link} key={x.name} display="block" marginBlock={3}>
            <Flex alignItems="center" gap={4}>
              <Text>{x.name}</Text>
              <img src="icons/ic_link_arrow.svg" />
            </Flex>
          </Link>
        ))}
      </Box>
    );
  };
  return (
    <Flex
      gap={12}
      paddingInline={{
        md: "104px",
        sm: "24px",
        lg: "104px",
        xl: "230px",
        base: "24px",
      }}
      paddingBlock="72px"
      alignItems="flex-start"
      bgColor="#141414"
      color="#FAFAFA"
      flexDirection="column"
      fontWeight="400px"
      fontSize="20px"
      lineHeight="28px"
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
      <Text>
        Written, designed by Helen Le and built by Lewis Nguyen © 2023
      </Text>
    </Flex>
  );
};

export default MyFooter;
