import { createHashRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Services from "../pages/Services/Services";
import Infrastructure from "../pages/Infrastructure";
import Contact from "../pages/Contact";
import Certificates from "../pages/Certificates";

// Use HashRouter to prevent 404s on GitHub Pages
export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/infrastructure", element: <Infrastructure /> },
      { path: "/certificates", element: <Certificates /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
