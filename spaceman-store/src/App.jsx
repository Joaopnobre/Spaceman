import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/HomePage";
import { Routes, Route } from "react-router-dom";
import Contact from "./Routes/Contact/Contact";
import Products from "./Routes/Products/Products";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "SPACEMAN";
  }, []);
  return (
    <>
      <NavBar />

      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      }

      <Footer />
    </>
  );
}

export default App;
