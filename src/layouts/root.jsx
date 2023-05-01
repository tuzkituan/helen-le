import { Outlet } from "react-router-dom";
import MyHeader from "../components/my-header";
import MyFooter from "../components/my-footer";

export default function Root() {
  return (
    <div>
      <MyHeader />
      <div id="content">
        <Outlet />
      </div>
      <MyFooter />
    </div>
  );
}
