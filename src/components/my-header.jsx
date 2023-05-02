import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
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
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { APP_NAME } from "../appConstants";
import { useLayoutEffect } from "react";

const MyHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan540] = useMediaQuery("(max-width: 540px)");
  const location = useLocation();

  useLayoutEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location]);

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
    const current = location.pathname;
    return arr.map((x) => (
      <Link
        as={ReactRouterLink}
        to={x.link}
        fontSize="20px"
        fontWeight={500}
        key={x.label}
        textDecoration={current === x.link ? "underline" : "none"}
      >
        {x.label}
      </Link>
    ));
  };

  return (
    <Box w="100%">
      <Box
        paddingInline={{
          md: "104px",
          sm: "24px",
          lg: "104px",
          xl: "230px",
          base: "24px",
        }}
        paddingBlock="36px"
      >
        <Flex
          gap={12}
          alignItems="center"
          justifyContent="space-between"
          maxW="1200px"
          w="100%"
          margin="0 auto"
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
      </Box>
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
    </Box>
  );
};

export default MyHeader;
