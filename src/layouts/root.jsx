import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/loading";
import MyFooter from "../components/my-footer";
import MyHeader from "../components/my-header";

export default function Root() {
  const [isMounting, setIsMounting] = React.useState(true);

  useEffect(() => {
    // Simulate a delay before loading the content
    setTimeout(() => {
      setIsMounting(false);
    }, 2000);
  }, []);

  return (
    <Loading spinning={isMounting}>
      <Box bgColor="white">
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
          <Outlet />
        </Box>
        <MyFooter />
      </Box>
    </Loading>
  );
}
