import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LiveFarming from "../components/FarmLive/index";
import UpcomingFarm from "../components/FarmUpcoming";
import FinishedFarm from "../components/FarmFinished";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./pageElements";
import { Web3ContextProvider } from "../hooks/web3Context";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";

const Farming = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar showConnect />
      <LiveFarming />
      <UpcomingFarm />
      {/* <FinishedFarm /> */}
      <Footer />
    </Container>
  );
};

export default Farming;
