
import Header from "./_components/header/Header";
import InfoBox from "./_components/info/InfoBox";
import Logo from "./_components/logo/Logo";
import SkipToMenu from "./_components/skipToMenu/SkipToMenu";

export default function Home() {

const welcomeText = "Welcome to my page"
  return (

    <main className="flex min-h-screen flex-col p-24 bg-slate-200">
      {/* NavBar */}
      <Logo />
      <SkipToMenu />

      {/* Left Hand Intro */}
      <Header />
      <InfoBox information={welcomeText} id="welcome"/>
<InfoBox information="Start" id="start" />
<InfoBox information="About Me" id="about" />
<InfoBox information="Project Highlights" id="projects" />
<InfoBox information="Work Experience" id="experience" />
<InfoBox information="Contact Nico" id="contact" />

    </main>
  );
}
