import { Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
const MyHeader = () => {
  return (
    <Flex
      gap={12}
      paddingInline="104px"
      paddingBlock="36px"
      alignItems="center"
      // bgColor="gray.100"
    >
      <Text
        fontSize="24px"
        fontWeight={500}
        lineHeight="32px"
        textTransform="uppercase"
        display="block"
      >
        HELEN LE
      </Text>
      <Spacer />
      <Flex gap={12}>
        <Link as={ReactRouterLink} to="/" fontSize="20px" fontWeight={500}>
          Work
        </Link>
        <Link as={ReactRouterLink} to="/about" fontSize="20px" fontWeight={500}>
          About
        </Link>
      </Flex>
    </Flex>
  );
};

export default MyHeader;
