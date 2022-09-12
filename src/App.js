import Navbar from "./components/Navbar/Navbar";
import CardContainer from "./components/Cards/CardContainer";
import Services from "./components/Body/Services";
import GifCard from "./components/Body/GifCard";
import Pricing from "./components/Body/Pricing";
import Carousel from "./components/Body/Carousel";

import Footer from "./components/Footer/Footer";
import Carrito from './components/Carrito/Carrito';
import { Proveedor } from './components/cartContextProviders';
import { BrowserRouter as Router, Route, Routes } from
"react-router-dom";

function App() {
  return (
    <>
    <Proveedor>
    <Router>
    <Navbar/>
<Routes>
<Route path="/" element={<CardContainer/>}/>
<Route path="/Carrito" element={<Carrito></Carrito>}/>
</Routes>
<Services/>
<GifCard/>
<Pricing/>
<Carousel/>
<Footer />
</Router>
</Proveedor>
      
    </>
  );
}
export default App;
