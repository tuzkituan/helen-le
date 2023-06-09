import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Root from "./layouts/root";
import ErrorPage from "./error_page";
import Home from "./pages/home";
import About from "./pages/about";
import Nurix from "./pages/works/nurix";
import Navo from "./pages/works/navo";
import Synapte from "./pages/works/synapse";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Home />} />
        <Route path="work/nurix" element={<Nurix />} />
        <Route path="work/navo" element={<Navo />} />
        <Route path="work/synapse" element={<Synapte />} />
        <Route path="about" element={<About />} />
      </Route>
    </Route>
  )
);

export default router;
