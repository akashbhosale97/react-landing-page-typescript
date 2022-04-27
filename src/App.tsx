import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
