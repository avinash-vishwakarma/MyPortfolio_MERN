import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, noFooter = false }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      {!noFooter && <Footer />}
    </>
  );
};

export default Layout;
