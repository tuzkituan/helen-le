import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useLayoutEffect } from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { APP_NAME } from "../appConstants";

const MyHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan540] = useMediaQuery("(max-width: 540px)");
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

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

  const _renderToggleThemeButton = () => {
    return (
      <IconButton
        variant="ghost"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    );
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
              <>
                {_renderLinks(menuItems)}
                {_renderToggleThemeButton()}
              </>
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
              <Flex alignItems="center" gap={2}>
                {_renderToggleThemeButton()}
                <IconButton
                  icon={<CloseIcon />}
                  variant="ghost"
                  onClick={onClose}
                  fontSize={14}
                />
              </Flex>
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
