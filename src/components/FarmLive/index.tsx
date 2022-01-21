import React, { useCallback, useEffect, useState } from "react";
import Image from "../../images/projectImage.png";
import Image2 from "../../images/farmNearmint.png";
import {
  LiveFarmContainer,
  Header,
  ProjectSection,
  Img,
  Details,
  DetailTop,
  Name,
  Button, 
  DetailBottom,
  Box,
  BoxHeader,
  BoxDesc,
  Wrapper
} from "./LiveFarmingElements";
import { useWeb3Context } from "../../hooks/web3Context";
import { addresses, networkID } from "../../constants";
import SoloFarmAbi from '../../abi/contracts/SoloFarm.sol/SoloFarm.json'
import { ethers } from "ethers";
import { toast } from "react-toastify";

const LiveFarming = () => {
  const [totalDeposits, setTotalDeposits] = useState(0)
  // web3 stuff
  const { provider, address, connected } = useWeb3Context();

  const signer = provider.getSigner();
  const soloFarmContract = new ethers.Contract(addresses[networkID].SOLO_FARM_ADDRESS as string, SoloFarmAbi, signer);

  const fetchContractsInfos = useCallback(async () => {
    if (!connected) {
      // toast.error("Connect your wallet to see this page")
      // TODO: navigate to a page to connect wallet
      return
    }

    const newTotalDepositsBG = await soloFarmContract.deposited(address)
    const newTotalDepositsStr = ethers.utils.formatEther( newTotalDepositsBG )

    setTotalDeposits(parseFloat(newTotalDepositsStr))
  }, [address, connected, soloFarmContract])

  useEffect(() => {
    fetchContractsInfos()
  }, [fetchContractsInfos])
  
  return (
    <>
      <LiveFarmContainer>
        <Wrapper>
          <Header>Live Farms</Header>
          <ProjectSection>
            <Img src={Image2} alt="Decor Image" />
            <Details>
              <DetailTop>
                <Name>NEARmint Initial Staking Pool</Name>
                <Button>More Details {">"}</Button>
              </DetailTop>
              <DetailBottom>
                <Box>
                  <BoxHeader>Total Deposited</BoxHeader>
                  {/* TODO: convert this to a dollar amount */}
                  <BoxDesc>{totalDeposits} wETH-NEAR LP</BoxDesc>
                </Box>
                <Box>
                  <BoxHeader>Pool Remaining</BoxHeader>
                  <BoxDesc>81%</BoxDesc>
                </Box>
              </DetailBottom>
            </Details>
          </ProjectSection>
        </Wrapper>
      </LiveFarmContainer>
    </>
  );
};

export default LiveFarming;