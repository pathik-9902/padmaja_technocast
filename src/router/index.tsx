import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Services from "../pages/Services/Services";
import Infrastructure from "../pages/Infrastructure";
import Contact from "../pages/Contact";
import Certificates from "../pages/Certificates";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
