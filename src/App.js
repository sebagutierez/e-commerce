import Navbar from "./components/Navbar/Navbar";
import CardContainer from "./components/Cards/CardContainer";
import Services from "./components/Body/Services";
import GifCard from "./components/Body/GifCard";
import Pricing from "./components/Body/Pricing";
import Carousel from "./components/Body/Carousel";
import Footer from "./components/Footer/Footer";
import Recommendation from "./components/Body/Recommendation";
import Banner from "./components/Body/Banner/Banner";
import QuestionSection from "./components/Body/Questions/QuestionSection"
import Partner from "./components/Body/Partner/Partner";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CardContainer />
      <Services />
      <GifCard />
      <Pricing />
      <Carousel />
      <Partner />
      <QuestionSection />
      <Recommendation />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
