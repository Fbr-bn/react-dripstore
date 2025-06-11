import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/MyOrders";
import PageConfirmation from "./pages/PageConfirmation";
import FormAccount from "./pages/FormAccount";
import AccountLogin from "./pages/AccountLogin";
import AccoutCreate from "./pages/AccountCreate";
import { Navigate } from "react-router-dom";
import MyInformation from "./pages/MyInformation";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login" element={<AccountLogin />} />
        <Route path="/create" element={<AccoutCreate />} />
        <Route path="/form-create" element={<FormAccount />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/confirmation" element={<PageConfirmation />} />
        <Route path="/my-information" element={<MyInformation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
