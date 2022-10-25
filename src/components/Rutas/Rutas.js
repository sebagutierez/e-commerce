import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carrito from "../Carrito/Carrito";
import Navbar from "../Navbar/Navbar";
import Home from "./Home";

const Rutas = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
    </Router>
  );
};

export default Rutas;
