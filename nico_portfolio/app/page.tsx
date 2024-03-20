
import About from "./_components/About";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Header from "./_components/header/Header";
import Welcome from "./_components/Welcome";
import Logo from "./_components/logo/Logo";
import SkipToMenu from "./_components/skipToMenu/SkipToMenu";
import Testimonial from "./_components/Testimonial";

export default function Home() {

  return (
<>
    <header className="bg-slate-200  flex  ">
      <Logo />
      <SkipToMenu />
    </header>
    <main className="flex min-h-screen flex-col p-24 bg-slate-200 ">
      {/* NavBar */}
      

      {/* Left Hand Intro */}
      <Header />
      <Welcome />

      {/* Contents */}
      <About />
      <Projects />
      <Experience />
      <Contact />
<Testimonial />
    </main>
    <footer>
      
    </footer>


    </>
  );
}
