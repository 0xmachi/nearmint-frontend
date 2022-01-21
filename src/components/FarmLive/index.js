import React from "react";
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

const LiveFarming = () => {
  return (
    <>
      <LiveFarmContainer>
        <Wrapper>
          <Header>Live Farming</Header>
          <ProjectSection>
            <Img src={Image2} alt="Decor Image" />
            <Details>
              <DetailTop>
                <Name>NEARmint Farm</Name>
                <Button>More Details ></Button>
              </DetailTop>
              <DetailBottom>
                <Box>
                  <BoxHeader>Total Deposited</BoxHeader>
                  <BoxDesc>$50,000</BoxDesc>
                </Box>
                <Box>
                  <BoxHeader>Rewards Remaining</BoxHeader>
                  <BoxDesc>80%</BoxDesc>
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