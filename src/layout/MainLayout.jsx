import React from "react";
import Header from "../components/Home1/Header";
import Footer1 from "../components/Footer/Footer1";
import Topbar from "../components/Home1/Topbar";
import Breadcrumb from "./Breadcrumb";

function MainLayout({ children }) {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb />
      {children}
      <Footer1 />
    </>
  );
}

export default MainLayout;
