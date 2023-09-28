import React from "react";
import NavBar from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
