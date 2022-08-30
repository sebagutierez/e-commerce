import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Body/Services";
import GifCard from "./components/Body/GifCard";
import Pricing from "./components/Body/Pricing";
import Carousel from "./components/Body/Carousel";
import Footer from "./components/Footer/Footer";
import CardContainer from "./components/Cards/CardContainer";

function App() {
  return (
    <>
      <Navbar />
      <Services />
      <GifCard />
      <Carousel />
      <Pricing />
      <CardContainer />
      <Footer />
    </>
  );
}
export default App;
