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
          bottom="20px"
          right={["16px", "20px"]}
          zIndex={3}
        >
          <IconButton
            size="md"
            icon={<ArrowUpIcon />}
            variant="solid"
            colorScheme="orange"
          ></IconButton>
        </Box>
      )}
    </>
  );
}
