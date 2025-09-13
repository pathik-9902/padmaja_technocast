// src/router.tsx
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

// Pages
import Home from "../pages/Home/Home"
import About from "../pages/About"
import Services from "../pages/Services/Services"
import Infrastructure from "../pages/Infrastructure"
import Contact from "../pages/Contact"
import Certificates from "../pages/Certificates"

// ✅ Pass routes as first argument, and options (basename) as second argument
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "infrastructure", element: <Infrastructure /> },
        { path: "contact", element: <Contact /> },
        { path: "certificates", element: <Certificates /> },
      ],
    },
  ],
  {
    basename: "/padmaja_technocast", // ✅ Correct placement
  }
)
