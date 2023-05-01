import { Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const MyHeader = () => {
  return (
    <Flex
      gap={12}
      paddingInline={{
        md: "104px",
        sm: "24px",
        lg: "104px",
        xl: "230px",
      }}
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
        <Link
          as={ReactRouterLink}
          to="/"
          _hover={{
            textDecoration: "none",
          }}
        >
          HELEN LE
        </Link>
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
