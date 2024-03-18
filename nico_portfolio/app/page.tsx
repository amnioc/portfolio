
import Header from "./_components/header/Header";
import InfoBox from "./_components/info/InfoBox";
import  {welcomeText}  from "./_components/info/sectionText";
import Logo from "./_components/logo/Logo";
import SkipToMenu from "./_components/skipToMenu/SkipToMenu";

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
      <InfoBox information={welcomeText} id="welcome"/>

      {/* Contents */}
      <InfoBox information="Start" id="start" />
      <InfoBox information="About Me" id="about" />
      <InfoBox information="Project Highlights Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam nulla. Porttitor leo a diam sollicitudin tempor id eu nisl. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Ante in nibh mauris cursus mattis molestie a iaculis. In ornare quam viverra orci sagittis eu volutpat odio. Quam nulla porttitor massa id neque aliquam vestibulum. Egestas integer eget aliquet nibh praesent. Nibh sed pulvinar proin gravida. Ultrices eros in cursus turpis massa tincidunt dui. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Sed euismod nisi porta lorem mollis aliquam ut. Tellus pellentesque eu tincidunt tortor aliquam nulla. Magna ac placerat vestibulum lectus mauris ultrices eros. Quis lectus nulla at volutpat diam ut venenatis. Dictum varius duis at consectetur lorem donec massa sapien faucibus. In pellentesque massa placerat duis ultricies. Sed tempus urna et pharetra pharetra massa massa ultricies. Sit amet tellus cras adipiscing enim eu turpis egestas.
      interdum. Duis ut diam quam nulla. Suspendisse potenti nullam ac tortor vitae. Nunc consequat interdum varius sit amet. Amet porttitor eget dolor morbi. Augue lacus viverra vitae congue eu consequat ac. Volutpat maecenas volutpat blandit aliquam etiam. Vel orci porta non pulvinar neque laoreet suspendisse. Lobortis mattis aliquam faucibus purus. Tellus mauris a diam maecenas sed. Tellus integer feugiat scelerisque varius." id="projects" />
      <InfoBox information="Work Experience" id="experience" />
      <InfoBox information="Contact Nico" id="contact" />

    </main>

    </>
  );
}
