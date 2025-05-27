import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <HeaderMobile />
      <main className="flex-grow">
        <Routes>
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
