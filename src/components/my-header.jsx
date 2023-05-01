import { HamburgerIcon } from "@chakra-ui/icons";
import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { APP_NAME } from "../appConstants";

const MyHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan540] = useMediaQuery("(max-width: 540px)");

  const menuItems = [
    {
      label: "Work",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
  ];

  const _renderLinks = (arr) => {
    return arr.map((x) => (
      <Link
        as={ReactRouterLink}
        to={x.link}
        fontSize="20px"
        fontWeight={500}
        key={x.label}
        onClick={onClose}
      >
        {x.label}
      </Link>
    ));
  };

  return (
    <>
      <Flex
        gap={12}
        paddingInline={{
          md: "104px",
          sm: "24px",
          lg: "104px",
          xl: "230px",
          base: "24px",
        }}
        paddingBlock="36px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link
          as={ReactRouterLink}
          to="/"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontSize="24px"
            lineHeight="32px"
            textTransform="uppercase"
            display="block"
            fontWeight={500}
          >
            {APP_NAME}
          </Text>
        </Link>
        <Flex alignItems="center" gap={16}>
          {!isSmallerThan540 ? (
            _renderLinks(menuItems)
          ) : (
            <Link className="icon" onClick={onOpen}>
              <Flex alignItems="center">
                <HamburgerIcon fontSize={24} />
              </Flex>
            </Link>
          )}
        </Flex>
      </Flex>
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        closeOnEsc
        closeOnOverlayClick
        blockScrollOnMount
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="space-between" alignItems="center">
              <Text mb={0}>Menu</Text>
              <CloseButton onClick={onClose} />
            </Flex>
          </DrawerHeader>
          <DrawerBody paddingBlock={8}>
            <Stack direction="column" spacing={4}>
              {_renderLinks(menuItems)}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyHeader;
