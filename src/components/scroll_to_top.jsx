import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom={["16px", "32px"]}
          right={["16px", "32px"]}
          zIndex={3}
        >
          <IconButton
            w="48px"
            h="48px"
            icon={<img src="../icons/ic_top.svg" />}
            variant="solid"
            borderRadius="50%"
            bgColor="whiteAlpha.900"
            border="1px solid #141414"
            _hover={{
              bgColor: "whiteAlpha.900",
            }}
          ></IconButton>
        </Box>
      )}
    </>
  );
}
