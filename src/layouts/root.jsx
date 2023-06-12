import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MAIN_MAX_W } from "../appConstants";
import Loading from "../components/loading";
import MyFooter from "../components/my_footer";
import MyHeader from "../components/my_header";
import ScrollToTop from "../components/scroll_to_top";

export default function Root() {
  const [isMounting, setIsMounting] = React.useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    // Simulate a delay before loading the content
    setTimeout(() => {
      setIsMounting(false);
    }, 1000);
  }, []);

  const getPaddingBottom = () => {
    return {
      lg: "112px",
      base: "80px",
    };
  };

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.8,
  };

  return (
    <Loading spinning={isMounting}>
      <Flex
        direction="column"
        justifyContent="space-between"
        w="100%"
        position="relative"
        overflow="clip"
        minH="100vh"
      >
        <Box>
          <MyHeader />
          <Box
            paddingInline={{
              // md: "104px",
              // sm: "24px",
              // lg: "104px",
              // xl: "230px",
              base: "20px",
            }}
            paddingTop={{
              base: "28px",
              lg: "80px",
            }}
            paddingBottom={{
              base: getPaddingBottom().base,
              lg: getPaddingBottom().lg,
            }}
          >
            <motion.div
              key={pathname}
              initial="initial"
              animate="in"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Box maxW={MAIN_MAX_W} w="100%" margin="0 auto">
                <Outlet />
              </Box>
            </motion.div>
          </Box>
        </Box>

        <MyFooter />
        <ScrollToTop />
      </Flex>
    </Loading>
  );
}
