import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import ProjectShowcase from "./Components/Projects";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ProjectShowcase />
    </div>
  );
}
