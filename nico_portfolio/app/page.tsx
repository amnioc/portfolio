
'use client'
import About from "./_components/About";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Welcome from "./_components/Welcome";
import Menu from "./_components/menu/Menu";
import Testimonial from "./_components/Testimonial";
import React from "react";


export default function Home() {

  return (
<>
    <header className="">
      <Menu/>
    </header>
    
    <main className="flex min-h-screen flex-col p-24 bg-slate-200 ">

      {/* Left Hand Intro */}
    
      <Welcome />

      {/* Contents */}
      <About />
      <Projects />
      <Experience />
      <Contact/>
      <Testimonial />
    </main>
    <footer>
      
    </footer>


    </>
  );
}
