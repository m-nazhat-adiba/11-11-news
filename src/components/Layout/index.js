import React from "react";
import NavBar from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
