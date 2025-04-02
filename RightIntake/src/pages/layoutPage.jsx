import React from "react";
import Footer from "../components/footerComponent/footer";
import NavComponent from "../components/NavComponent/NavComponent";

const Layout = ({ children }) => {
  return (
    <div>
      <NavComponent />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
