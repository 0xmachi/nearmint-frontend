import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LiveFarming from "../components/FarmLive/index";
import UpcomingFarm from "../components/FarmUpcoming";
import FinishedFarm from "../components/FarmFinished";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./pageElements";
import { useWeb3Context, Web3ContextProvider } from "../hooks/web3Context";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import styled from "styled-components";
import Rectangle from "../images/topRectangle.png";
import BackgroundImage from "../images/BoxBackground.svg";
import { ethers } from "ethers";
import { addresses, networkID } from "../constants";
import SoloFarmAbi from "../abi/contracts/SoloFarm.sol/SoloFarm.json";

export const LiveFarmContainer = styled.div`
  background: #131530;
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 1800px;
`;

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
  justify-content: space-between;
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
  color: rgba(250, 250, 250, 0.8);
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  padding-right: 80px;
`;

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  /* height: 440px; */
  padding-top: 30px;
  width: 100%;
`;

export const Box = styled.div`
  border: 1.5px solid rgba(230, 232, 236, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 47.5%;
  margin-top: 107.33px;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
`;

export const BoxHeader = styled.p`
  margin: 0;
  padding-top: 35px;
  color: white;
  font-size: 20px;
`;

export const BoxDesc = styled.p`
  margin: 0;
  padding: 30px 10px 30px 10px;
  color: white;
  font-size: 34px;
  font-weight: 700;
`;

export const LongBox = styled.div`
  border: 1.5px solid rgba(230, 232, 236, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const LongBoxHeader = styled.p`
  margin: 0;
  padding: 20px;
  color: white;
  font-size: 20px;
`;

export const LongBoxDesc = styled.p`
  margin: 0;
  padding: 20px;
  color: white;
  font-size: 26px;
  font-weight: 700;
`;

export const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const NButton = styled.button`
  background: transparent;
  border: 1.5px solid #ffffff;
  color: #fcfcfd;
  padding: 1em 2em;
  min-width: 130px;
  font-size: 14px;
  font-weight: 600;
`;

export const ProgressBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
`;

export const OuterBar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  border: 1.5px solid #ffffff;
`;

export const InnerBar = styled.div`
  background-color: #3772ff;
  height: 25px;
  width: ${(props) => (props.width ? props.width : "10%")};
  margin: 0.7em 0.7em;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

export const FormTopButton = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
`;

export const Form = styled.div`
  display: flex;
  width: 500px;
  height: 460px;
  border: 1.5px solid #ffffff;
  margin-top: 30px;
`;
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const InputHead = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 600;
  color: white;
  font-size: 16px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  background: transparent;
  border: 1.5px solid rgba(230, 232, 236, 0.5);
  color: white;
  margin-top: 20px;
  ::placeholder {
    color: rgba(230, 232, 236, 0.5);
  }
`;

export const InputTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
`;

export const SmallButton = styled.button`
  background: white;
  color: black;
  padding: 0.5em 1.5em;
  font-size: 14px;
  font-weight: 600;
  border: none;
`;

export const SubmitButton = styled.button`
  background: #3772ff;
  color: white;
  padding: 1em 0;
  font-size: 14px;
  font-weight: 600;
  border: none;
  margin-top: 100px;
`;
const FarmDetails = () => {
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  // web3 stuff
  const { provider, address, connected } = useWeb3Context();
  
  const signer = provider.getSigner();
  const soloFarmContract = new ethers.Contract(
    addresses[networkID].SOLO_FARM_ADDRESS as string,
    SoloFarmAbi,
    signer
  );

  const fetchContractsInfos = useCallback(async () => {
    if (!connected) {
      // toast.error("Connect your wallet to see this page")
      // TODO: navigate to a page to connect wallet
      return;
    }

    const usersLength = await soloFarmContract.getUsersCount();

    setTotalUsers(usersLength.toNumber());

    let currentTotalDeposits = 0;
    for (let i = 0; i < usersLength; i++) {
      const userAddr = await soloFarmContract.users(i);
      const userDepositsBG = await soloFarmContract.deposited(userAddr);
      const userDepositsStr = ethers.utils.formatEther(userDepositsBG);
      currentTotalDeposits += parseFloat(userDepositsStr);
    }

    setTotalDeposits(currentTotalDeposits);
  }, [connected, soloFarmContract]);

  useEffect(() => {
    fetchContractsInfos();
  }, [fetchContractsInfos]);
  
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
              <CryptoDesc>
                NEARmint is focused on bringing DeFi 2.0 protocol-owned-
                liquidity (PoL) to the NEAR ecosystem through a mechanism called
                Community Farming where users trade their LP rewards for tokens
                at prelaunch prices.
              </CryptoDesc>
              <CryptoDesc>
                NEARmint exists to provide NEAR ecosystem projects the ability
                to design their token economics in a way that is sustainable,
                for the long term. This is important for the ecosystem,
                protocols and users who truly believe in a decentralized vision.
                We want NEARmint to be seen as the gold stamp of new protocols
                coming into the ecosystem and be a safeguard to the community
                against predatory token economics and release schedules.
              </CryptoDesc>
              <CryptoDesc>
                How do we help to do this? Protocols that forgo instant TVL
                through high emissions in exchange for PoL (protocol-owned
                liquidity) are ones that are operating with long-term visions.
                Good for the ecosystem, good for DeFi and even better for our
                users!
              </CryptoDesc>
            </Column>
            <Column>
              {/* <CryptoDesc>Staking launching soon</CryptoDesc> */}
              <HStack>
                <Box>
                  <BoxHeader>Total Deposited</BoxHeader>
                  <BoxDesc>{totalDeposits} wETH-NEAR LP</BoxDesc>
                </Box>
                <Box>
                  <BoxHeader>Issues Points</BoxHeader>
                  <BoxDesc>$0.05</BoxDesc>
                </Box>
              </HStack>
              {/* <LongBox>
                <LongBoxHeader>My Total Deposited</LongBoxHeader>
                <LongBoxDesc>$10,000</LongBoxDesc>
              </LongBox> */}
              <LongBox>
                <LongBoxHeader>My Total Deposited</LongBoxHeader>
                <LongBoxDesc>$10,000</LongBoxDesc>
              </LongBox>
              <BottomButtons>
                <NButton>Website</NButton>
                <NButton>Telegram</NButton>
                <NButton>Document</NButton>
                <NButton>Discord</NButton>
              </BottomButtons>
            </Column>
          </HStack>
          <ProgressBar>
            <Header>Total Deposited: {totalDeposits} wETH-NEAR LP</Header>
            <OuterBar>
              <InnerBar width="5%"></InnerBar>
            </OuterBar>
          </ProgressBar>
          <FormSection>
            <FormTopButton>
              <NButton>Deposit</NButton>
              <NButton>Withdraw</NButton>
            </FormTopButton>
            <Form>
              <FormWrapper>
                <InputHead>LP Tokens</InputHead>
                <Input type="text" placeholder="wNear - USDT" />
                <InputTop>
                  <InputHead>Amount</InputHead>
                  <SmallButton>Max</SmallButton>
                </InputTop>
                <Input type="text" placeholder="wNear - USDT" />
                <SubmitButton>Deposit</SubmitButton>
              </FormWrapper>
            </Form>
          </FormSection>
        </Wrapper>
      </LiveFarmContainer>
      <Footer />
    </Container>
  );
};

export default FarmDetails;
