import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

// Pages
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import Industries from "../pages/Industries"
import Quality from "../pages/Quality"
import Enquiry from "../pages/Enquiry"
import Contact from "../pages/Contact"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/industries", element: <Industries /> },
      { path: "/quality", element: <Quality /> },
      { path: "/enquiry", element: <Enquiry /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
])
