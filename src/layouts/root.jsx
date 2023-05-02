import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../components/loading";
import MyFooter from "../components/my-footer";
import MyHeader from "../components/my-header";
import { motion } from "framer-motion";

export default function Root() {
  const [isMounting, setIsMounting] = React.useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    // Simulate a delay before loading the content
    setTimeout(() => {
      setIsMounting(false);
    }, 2000);
  }, []);

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
      <Box bgColor="white" w="100%">
        <MyHeader />
        <Box
          paddingInline={{
            md: "104px",
            sm: "24px",
            lg: "104px",
            xl: "230px",
            base: "24px",
          }}
          paddingTop={{
            base: "24px",
            md: "40px",
          }}
          paddingBottom="104px"
        >
          <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Box maxW="1200px" w="100%" margin="0 auto">
              <Outlet />
            </Box>
          </motion.div>
        </Box>
        <MyFooter />
      </Box>
    </Loading>
  );
}
