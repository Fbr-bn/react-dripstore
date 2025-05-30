import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/MyOrders";
import AccountLogin from "./pages/AccountLogin";
import FormAccount from "./pages/FormAccount";
import AccoutCreate from "./pages/AccountCreate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AccountLogin />} />
        <Route path="/create" element={<AccoutCreate />} />
        <Route path="/form-create" element={<FormAccount />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
