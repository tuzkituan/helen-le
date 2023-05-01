import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Root from "./layouts/root";
import ErrorPage from "./error-page";
import Home from "./pages/home";
import About from "./pages/about";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Route>
  )
);

export default router;
