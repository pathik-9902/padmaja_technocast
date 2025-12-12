import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Processes from "../pages/Processes";
import Contact from "../pages/Contact";
import Certificates from "../pages/Certificates";
import UnderMaintenance from "../UnderMaintainance";

const isMaintenanceMode = true; 
const isAdmin = localStorage.getItem("admin") === "true";

export const router = createBrowserRouter([
  isMaintenanceMode && !isAdmin
    ? {
        path: "*",
        element: <UnderMaintenance />,
      }
    : {
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



// Enable Admin Mode

// Paste this into your browser console:

// localStorage.setItem("admin", "true");
// console.log("Admin mode enabled. Refresh the page.");

// Disable Admin Mode
// localStorage.setItem("admin", "false");
// console.log("Admin mode disabled. Refresh the page.");

// Completely Remove Admin Key (Optional)
// localStorage.removeItem("admin");
// console.log("Admin mode cleared. Refresh the page.");