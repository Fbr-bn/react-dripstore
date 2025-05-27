import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import ProductDetails from "./pages/ProductDetails.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <HeaderMobile />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
