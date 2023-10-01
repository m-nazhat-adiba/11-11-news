import React from "react";

import Footer from "../Footer";
import NavBar from "../Navigation";

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
