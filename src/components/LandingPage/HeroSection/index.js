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
  const handleOnClickNavLink = () => {
    window.open('/farms')
  }

  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrapper>
                <Heading>Lossless Fundraising on NEAR & Aurora</Heading>
                <SubTitle>- Use your LP positions to Mint early stage project tokens <br/> - Support your Favorite Teams by participating in Yield Swap Financing</SubTitle>
                <BtnWrap>
                  <Button src={ButtonImg} alt="Button" onClick={handleOnClickNavLink}/>
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
