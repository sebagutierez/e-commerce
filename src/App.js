import Navbar from "./components/Navbar/Navbar";
import CardContainer from "./components/Cards/CardContainer";
import Services from "./components/Body/Services";
import GifCard from "./components/Body/GifCard";
import Pricing from "./components/Body/Pricing";
import Carousel from "./components/Body/Carousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <CardContainer />
      <Services />
      <GifCard />
      <Pricing />
      <Carousel />
      <Footer />
    </>
  );
}
export default App;
