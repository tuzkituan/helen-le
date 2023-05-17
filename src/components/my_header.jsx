import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  DarkMode,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useLayoutEffect } from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { APP_NAME } from "../appConstants";
import { useScrollDirection } from "../utils/hooks";

const MyHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
  const location = useLocation();
  const scrollDirection = useScrollDirection();

  useLayoutEffect(() => {
    if (isOpen) {
      onClose();
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

  const _renderLinks = (arr, isInDrawer = false) => {
    const current = location.pathname;
    return arr.map((x) => (
      <Button
        variant={isInDrawer ? "link" : "ghost"}
        as={ReactRouterLink}
        to={x.link}
        textStyle="t8"
        fontWeight={isInDrawer ? 700 : 500}
        key={x.label}
        textDecoration={current === x.link ? "underline" : "none"}
      >
        {x.label}
      </Button>
    ));
  };

  const _renderEmailButton = () => {
    return <Button variant="solid">Email</Button>;
  };

  return (
    <Box
      w="100%"
      position="sticky"
      top={scrollDirection === "down" ? "-120px" : 0}
      transition="all 0.3s"
      zIndex={100}
      bgColor="white"
      backdropFilter="blur(20px)"
    >
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
              textStyle="t6"
              textTransform="uppercase"
              display="block"
              fontWeight={500}
            >
              {APP_NAME}
            </Text>
          </Link>
          <Flex alignItems="center" gap="16px">
            {!isSmallerThan480 ? (
              <>
                {_renderLinks(menuItems)}
                {_renderEmailButton()}
                {/* {_renderToggleThemeButton()} */}
              </>
            ) : (
              <Link className="icon" onClick={onOpen}>
                <Flex alignItems="center">
                  <img src="icons/ic_hamburger.svg" />
                </Flex>
              </Link>
            )}
          </Flex>
        </Flex>
      </Box>
      <DarkMode>
        <Drawer
          placement="right"
          onClose={onClose}
          isOpen={isOpen}
          closeOnEsc
          closeOnOverlayClick
          blockScrollOnMount
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent bg="black">
            <DrawerHeader borderBottomWidth={0}>
              <Flex justifyContent="space-between" alignItems="center">
                <Spacer />
                <Flex alignItems="center" gap={2}>
                  {/* {_renderToggleThemeButton()} */}
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
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={8}
              >
                {_renderLinks(menuItems, true)}
              </Stack>
            </DrawerBody>
            <DrawerFooter
              borderTopWidth={0}
              justifyContent="flex-start"
              pb={"108px"}
            >
              <Flex
                gap="30px"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Text
                  color="white"
                  fontWeight={400}
                  fontSize="20px"
                  lineHeight={"30px"}
                >
                  I would love to hear from you. Please contact me
                </Text>
                <Button
                  variant={"outline"}
                  rightIcon={<img src="icons/ic_link_arrow.svg" />}
                  iconSpacing={4}
                >
                  Email
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DarkMode>
    </Box>
  );
};

export default MyHeader;
