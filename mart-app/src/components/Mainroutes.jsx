import React from "react";
import { Route, Routes } from "react-router-dom";
import BackToTop from "./BackToTop/BackToTop";
import Footer from "./Footer/Footer";
import NavbarSecond from "./Navbar/NavbarSecound";
import NavbarTop from "./Navbar/NavbarTop";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { Products } from "./Pages/Product/Products";
import styled from "styled-components";

const MainStayled = styled.div`
  margin: 0px 60px 0px 60px;
`;

const Mainroutes = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarSecond />
      <MainStayled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <BackToTop />
        <Footer />
      </MainStayled>
    </div>
  );
};

export default Mainroutes;
