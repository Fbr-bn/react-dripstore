import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import ProductDetails from "./pages/ProductDetails";

const infoLinks = [
  "Sobre Drip Store",
  "Segurança",
  "Wishlist",
  "Blog",
  "Trabalhe Conosco",
  "Meus Pedidos",
];

const categoryLinks = ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"];

const address = [
  "Av. Humberto Monte, 2929 - 11° andar, Torre Norte - Salas 1101 à 1107",
  "Pici, Fortaleza - CE, 60440-593",
];

const phone = "(85) 99972-1749";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <HeaderMobile />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer
        infoLinks={infoLinks}
        categoryLinks={categoryLinks}
        address={address}
        phone={phone}
      />
    </div>
  );
}

export default App;
