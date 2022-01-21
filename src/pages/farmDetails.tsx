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
import styled from "styled-components";
import { LiveFarmContainer } from "../components/FarmLive/LiveFarmingElements";
import Rectangle from "../images/topRectangle.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 1380px;
  width: 100%;
  padding: 0 70px;
  overflow: hidden;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  width: 100%;
`;

export const Header = styled.h1`
  margin: 0;
  /* padding: 0 70px; */
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 30px;
  margin-top: 40px;
`;

export const CryptoDesc = styled.p`
  color: white;
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Column = styled.div`
  width: 50%;
`

export const Img = styled.img`
  /* height: 440px; */
  padding-top: 30px;
`;

const FarmDetails = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar showConnect />
      <LiveFarmContainer>
        <Wrapper>
          <Img src={Rectangle} alt="Decor Image" />
          <HStack>
            <Column>
              <Header>About NEARmint</Header>
              <CryptoDesc>NEARmint is focused on bringing DeFi 2.0 protocol-owned- liquidity (PoL) to the NEAR ecosystem through a mechanism called Community Farming where users trade their LP rewards for tokens at prelaunch prices.</CryptoDesc>
              <CryptoDesc>NEARmint exists to provide NEAR ecosystem projects the ability to design their token economics in a way that is sustainable, for the long term. This is important for the ecosystem, protocols and users who truly believe in a decentralized vision. We want NEARmint to be seen as the gold stamp of new protocols coming into the ecosystem and be a safeguard to the community against predatory token economics and release schedules.</CryptoDesc>
              <CryptoDesc>How do we help to do this? Protocols that forgo instant TVL through high emissions in exchange for PoL (protocol-owned liquidity) are ones that are operating with long-term visions. Good for the ecosystem, good for DeFi and even better for our users!</CryptoDesc>
            </Column>
            <Column>
              {/* <CryptoDesc>Staking launching soon</CryptoDesc> */}
            </Column>
          </HStack>
        </Wrapper>
      </LiveFarmContainer>
      <Footer />
    </Container>
  );
};

export default FarmDetails;
