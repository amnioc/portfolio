
import Header from "./_components/header/Header";
import InfoBox from "./_components/info/InfoBox";
import SkipToMenu from "./_components/skipToMenu/SkipToMenu";

export default function Home() {

const welcomeText = "Welcome to my page"
  return (

    <main className="flex min-h-screen flex-col p-24 bg-slate-200">
      {/* NavBar */}
      <SkipToMenu />

      {/* Left Hand Intro */}
      <Header />
      <InfoBox information={welcomeText}/>
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="boop" />
<InfoBox information="boop" id="here" />

    </main>
  );
}
