import React, { useRef, useState } from "react";
import Footer from "../components/footerComponent/footer";

const Layout = ({ children }) => {
  return (
    <div className="layoutbackground">

      {/* Components */}
      <div className="layout-wrapper">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
