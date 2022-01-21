import React from "react";
import {
  FinishedFarmContainer,
  Header,
  FarmsTable,
  FarmsTableHead,
  Bond,
  BondColumn,
  HeadCol,
  BondSendIcon,
  CryptoImage
} from "./FinishedFarmElements";
import SendIcon from "../../images/sendIcon.svg";
import CircleImage from "../../images/circleCryptoImage.svg"

const FinishedFarm = () => {
  return (
    <>
      <FinishedFarmContainer>
        <Header>Finished Farms</Header>
        <FarmsTable>
          <FarmsTableHead>
            <HeadCol width="54%">Project</HeadCol>
            <HeadCol width="13%">Ticker</HeadCol>
            <HeadCol width="16%">Total Raise</HeadCol>
            <HeadCol width="18%">Token Price</HeadCol>
          </FarmsTableHead>
          <Bond>
            <BondColumn width="54%">
              <CryptoImage src={CircleImage} alt="Crypto Profile Image"/>
              Project Name
            </BondColumn>
            <BondColumn width="13%">0.00</BondColumn>
            <BondColumn width="16%">0.00</BondColumn>
            <BondColumn width="12%">0.00</BondColumn>
            <BondColumn width="6%">
              <BondSendIcon src={SendIcon} alt="Send Icon" />
            </BondColumn>
          </Bond>
          <Bond>
            <BondColumn width="54%">
              <CryptoImage src={CircleImage} alt="Crypto Profile Image"/>
              Project Name
            </BondColumn>
            <BondColumn width="13%">0.00</BondColumn>
            <BondColumn width="16%">0.00</BondColumn>
            <BondColumn width="12%">0.00</BondColumn>
            <BondColumn width="6%">
              <BondSendIcon src={SendIcon} alt="Send Icon" />
            </BondColumn>
          </Bond>
          <Bond>
            <BondColumn width="54%">
              <CryptoImage src={CircleImage} alt="Crypto Profile Image"/>
              Project Name
            </BondColumn>
            <BondColumn width="13%">0.00</BondColumn>
            <BondColumn width="16%">0.00</BondColumn>
            <BondColumn width="12%">0.00</BondColumn>
            <BondColumn width="6%">
              <BondSendIcon src={SendIcon} alt="Send Icon" />
            </BondColumn>
          </Bond>
          <Bond>
            <BondColumn width="54%">
              <CryptoImage src={CircleImage} alt="Crypto Profile Image"/>
              Project Name
            </BondColumn>
            <BondColumn width="13%">0.00</BondColumn>
            <BondColumn width="16%">0.00</BondColumn>
            <BondColumn width="12%">0.00</BondColumn>
            <BondColumn width="6%">
              <BondSendIcon src={SendIcon} alt="Send Icon" />
            </BondColumn>
          </Bond>
          <Bond>
            <BondColumn width="54%">
              <CryptoImage src={CircleImage} alt="Crypto Profile Image"/>
              Project Name
            </BondColumn>
            <BondColumn width="13%">0.00</BondColumn>
            <BondColumn width="16%">0.00</BondColumn>
            <BondColumn width="12%">0.00</BondColumn>
            <BondColumn width="6%">
              <BondSendIcon src={SendIcon} alt="Send Icon" />
            </BondColumn>
          </Bond>
          <Bond>
            <BondColumn width="54%">
              <CryptoImage src={CircleImage} alt="Crypto Profile Image"/>
              Project Name
            </BondColumn>
            <BondColumn width="13%">0.00</BondColumn>
            <BondColumn width="16%">0.00</BondColumn>
            <BondColumn width="12%">0.00</BondColumn>
            <BondColumn width="6%">
              <BondSendIcon src={SendIcon} alt="Send Icon" />
            </BondColumn>
          </Bond>
        </FarmsTable>
      </FinishedFarmContainer>
    </>
  );
};

export default FinishedFarm;
