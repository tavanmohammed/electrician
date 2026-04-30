import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Mission from "./components/Mission";
import Stats from "./components/Stats";

import Footer from "./components/Footer";

import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contactus";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Mission />
      
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}