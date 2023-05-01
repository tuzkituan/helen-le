import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MyFooter from "../components/my-footer";
import MyHeader from "../components/my-header";

export default function Root() {
  return (
    <div>
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
          md: "60px",
        }}
        paddingBottom="48px"
      >
        <Outlet />
      </Box>
      <MyFooter />
    </div>
  );
}
