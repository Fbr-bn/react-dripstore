import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;