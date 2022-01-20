import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LiveFarming from "../components/FarmLive";
import UpcomingFarm from "../components/FarmUpcoming";
import FinishedFarm from "../components/FarmFinished";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./pageElements";
import { Web3ContextProvider } from "../hooks/web3Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Farming = () => {
  return (
    <Web3ContextProvider>
      <Router>
        <ToastContainer />
        <Container>
          <Sidebar />
          <Navbar />
          <LiveFarming />
          <UpcomingFarm />
          <FinishedFarm />
        </Container>
      </Router>
    </Web3ContextProvider>
  );
};

export default Farming;
