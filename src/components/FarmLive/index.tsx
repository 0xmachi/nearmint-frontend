import React, { useCallback, useEffect, useState } from "react";
import Image from "../../images/projectImage.png";
import Image2 from "../../images/farmNearmint.png";
import { useWeb3Context } from "../../hooks/web3Context";
import { addresses, networkID } from "../../constants";
import SoloFarmAbi from '../../abi/contracts/SoloFarm.sol/SoloFarm.json'
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { Details, Header, Img, LiveFarmContainer, ProjectSection, Wrapper, DetailTop,
  Name,
  Button, 
  DetailBottom,
  Box,
  BoxHeader,
  BoxDesc, } from "./LiveFarmingElements";

const LiveFarming = () => {
  const [totalDeposits, setTotalDeposits] = useState(0)
  const [totalUsers, setTotalUsers] = useState(0)

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

    const usersLength = await soloFarmContract.getUsersCount()

    setTotalUsers(usersLength.toNumber())

    let currentTotalDeposits = 0;
    for (let i = 0; i < usersLength; i++) {
      const userAddr = await soloFarmContract.users(i)
      const userDepositsBG = await soloFarmContract.deposited(userAddr)
      const userDepositsStr = ethers.utils.formatEther( userDepositsBG )
      currentTotalDeposits += parseFloat(userDepositsStr)
    }
    
    setTotalDeposits(currentTotalDeposits)
  }, [connected, soloFarmContract])

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
                <Button to="details/1">More Details {">"}</Button>
              </DetailTop>
              <DetailBottom>
                <Box>
                  <BoxHeader>Total Deposited</BoxHeader>
                  {/* TODO: convert this to a dollar amount */}
                  <BoxDesc>{totalDeposits} wETH-NEAR LP</BoxDesc>
                </Box>
                {/* <Box>
                  <BoxHeader>Pool Remaining</BoxHeader>
                  <BoxDesc>81%</BoxDesc>
                </Box> */}
                <Box>
                  <BoxHeader>Total Users</BoxHeader>
                  <BoxDesc>{totalUsers} </BoxDesc>
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