import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";
import { Container } from "./pageElements";
import "react-toastify/dist/ReactToastify.css";
import DetailSection from "../components/LandingPage/DetailSection";
import HeroSection from "../components/LandingPage/HeroSection";
import InfoSection from "../components/LandingPage/InfoSection";
import SupportSection from "../components/LandingPage/SupportSection";
import TestDeposit from "./testDeposit";

const Home = () => {
  return (
    <Container>
    <Sidebar />
    <Navbar />
    <HeroSection />
    <InfoSection />
    <SupportSection />
    <DetailSection />
    <Footer />
  </Container>
  );
};

export default Home;
