import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ProjectDetail from "../pages/ProjectDetail";
import Pagina404 from "../pages/Pagina404";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const AppRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<Pagina404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
