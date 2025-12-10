import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Services from "../pages/Services/Services";
import Processes from "../pages/Processes";
import Contact from "../pages/Contact";
import Certificates from "../pages/Certificates";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "Processes", element: <Processes /> },
      { path: "contact", element: <Contact /> },
      { path: "certificates", element: <Certificates /> },
    ],
  },
]);
