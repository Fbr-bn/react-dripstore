import Footer from "./Footer";
import HeaderMobile from "./HeaderMobile";
import React from "react";

export default function LayoutWrapper({ children }) {
  return (
    <>
      <HeaderMobile />
      <main>{children}</main>
      <Footer />
    </>
  );
}
