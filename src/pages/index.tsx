import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import SupportSection from "../components/SupportSection";
import DetailSection from "../components/DetailSection";
import Footer from "../components/Footer";
import { Container } from "./pageElements";
import { Web3ContextProvider } from "../hooks/web3Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TestDeposit from "./testDeposit";

const Home = () => {
  return (
    <Web3ContextProvider>
      <Router>
        <ToastContainer />
        {/* <Container>
          <Sidebar />
          <Navbar />
          <HeroSection />
          <InfoSection />
          <SupportSection />
          <DetailSection />
          <Footer />
        </Container> */}
        <TestDeposit />
      </Router>
    </Web3ContextProvider>
  );
};

export default Home;
