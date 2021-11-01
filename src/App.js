import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";
import Maintainer from "./Components/Maintainer";
import Contributors from "./Components/Contributors";
import Cheer from "./Components/Cheer";
import EventSchedule from "./Components/EventSchedule";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Maintainer />
      <Contributors />
      <Cheer />
      <EventSchedule />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
