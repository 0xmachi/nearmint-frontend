import React from "react";
import ReactLogo from "../../images/waveImage.png";

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
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrapper>
                <Heading>Core Features</Heading>
                <SubRow>
                  <SubTitle>Derisked Yield Swap Fundraising</SubTitle>
                  <Description>Swap yield, not assets.</Description>
                </SubRow>
                <SubRow>
                  <SubTitle>Mint leading early stage projects</SubTitle>
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
                <Button>How it Works</Button>
              </BtnWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
