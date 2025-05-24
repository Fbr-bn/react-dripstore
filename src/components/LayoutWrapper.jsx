import Footer from "./Footer";
import HeaderMobile from "./HeaderMobile";

export default function LayoutWrapper({ children }) {
  return (
    <>
      <HeaderMobile />
      {children}
      <Footer />
    </>
  );
}
