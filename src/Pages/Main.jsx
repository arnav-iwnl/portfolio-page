// import { useEffect, useRef } from "react";
import NeonCursor from "../components/cursor/NeonCursor";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Home from "./Home";
import { LenisProvider } from "../utils/lenisScrollerWrapper";

const Main = () => {

  return (
    <LenisProvider>
      <div
        className="flex flex-col bg-transparent w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 text-white
        no-scrollbar overflow-hidden"
      >
        <div className="relative w-full max-w-5xl mx-auto space-y-16 overflow-visible"> 
          
        <Home />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
        
        </div>
      </div>
      <NeonCursor />
    </LenisProvider>
  );
};

export default Main;
