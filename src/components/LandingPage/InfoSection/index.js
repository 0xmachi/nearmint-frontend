import React from "react";
import ReactLogo from "../../../images/waveImage.png";

import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  TextWrapper,
  Heading,
  SubTitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  Button,
  SubRow,
  Description
} from "./InfoElements";

const HeroSection = () => {
  const handleOnClickNavLink = () => {
    window.open('https://medium.com/@nearmintxyz/beta-launch-and-airdrop-announcement-68853c6daa3c', "_blank")
  }
  
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrapper>
                <Heading id="core-features">Core Features</Heading>
                <SubRow>
                  <SubTitle>Lossless  Yield Swap Fundraising</SubTitle>
                  <Description>Mint tokens with your Yield, not your assets</Description>
                </SubRow>
                <SubRow>
                  <SubTitle>Fully Withdrawable Deposits</SubTitle>
                  <Description>Protocols exclusively building for NEAR and Aurora</Description>
                </SubRow>
                <SubRow>
                  <SubTitle>Support founders who believe in project sustainbility</SubTitle>
                  <Description>Diverse Treasury > Unsustainable emissions</Description>
                </SubRow>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={ReactLogo} alt="Logo" />
              </ImgWrap>
              <BtnWrap>
                <Button onClick={handleOnClickNavLink}>How it Works</Button>
              </BtnWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
