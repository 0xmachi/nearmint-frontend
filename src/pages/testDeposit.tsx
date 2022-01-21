import React from 'react';
import { ethers } from "ethers";
import styled from "styled-components";
import { BtnWrap, Button, Description, HeroContainer, HeroRow, HeroWrapper, SubRow } from '../components/InfoSection/InfoElements';
import Navbar from '../components/Navbar';
import { addresses, networkID } from '../constants';
import { Container } from './pageElements';
import SoloFarmAbi from '../abi/contracts/SoloFarm.sol/SoloFarm.json'
import { useWeb3Context } from '../hooks/web3Context';
import { useCallback } from 'react';

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PlaygroundSpace = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
`

const TestDeposit = () => {
  const { provider, address } = useWeb3Context();

  const signer = provider.getSigner();
  const soloFarmContract = new ethers.Contract(addresses[networkID].SOLO_FARM_ADDRESS as string, SoloFarmAbi, signer);

  const handleDeposit = useCallback(async () => {
    await soloFarmContract.deposit(1)
  }, [soloFarmContract])

  return (
    <Container>
      <Navbar showConnect />
      <PlaygroundSpace>
        <VStack>
          <select>
            <option value="0">Select lp token:</option>
            <option value="1">wNear - USDT</option>
          </select>
          <input type="number" id="fname" name="firstname" placeholder="Amount"></input>
          <button onClick={handleDeposit}>deposit</button>
        </VStack>
      </PlaygroundSpace>
    </Container>
  );
};
  
export default TestDeposit;