import React from 'react'
import ReactLogo from '../../../images/heroLogo.png';
import ButtonImg from '../../../images/button.png';


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
  Button
} from './HeroElements'

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrapper>
                <Heading>Protocol Treasury Fundraising on NEAR</Heading>
                <SubTitle>NEARmint is bringing protocol-owned-liquidity (PoL) to the NEAR ecosystem by hosting Community Farming events.</SubTitle>
                <BtnWrap>
                  <Button src={ButtonImg} alt="Button"/>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={ReactLogo} alt='Logo'/>
              </ImgWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper> 
      </HeroContainer>
    </>
  )
}

export default HeroSection
