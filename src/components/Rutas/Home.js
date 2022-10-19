import Banner from "../Body/Banner/Banner";
import Carousel from "../Body/Carousel";
import GifCard from "../Body/GifCard";
import Partner from "../Body/Partner/Partner";
import Pricing from "../Body/Pricing";
import QuestionSection from "../Body/Questions/QuestionSection";
import Recommendation from "../Body/Recommendation";
import Services from "../Body/Services";
import CardContainer from "../Cards/CardContainer";
import Contact from "../Contact";
import Footer from "../Footer/Footer";
import Contribute from "../Body/Contribute/Contribute";

const Home = () => {
  return (
    <>
      <Contact />
      <Banner />
      <CardContainer />
      <Services />
      <GifCard />
      <Pricing />
      <Carousel />
      <Partner />
      <Recommendation />
      <Contribute />
      <QuestionSection />
      <Footer />
    </>
  );
};

export default Home;
