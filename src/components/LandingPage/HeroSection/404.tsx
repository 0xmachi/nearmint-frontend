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

const NotFoundSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrapper>
                <Heading>Page Not Found</Heading>
                <SubTitle>Click on the top left logo to return home</SubTitle>
                {/* <BtnWrap>
                  <Button src={ButtonImg} alt="Button"/>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            {/* <Column2>
              <ImgWrap>
                <Img src={ReactLogo} alt='Logo'/>
              </ImgWrap>
            </Column2> */}
          </HeroRow>
        </HeroWrapper> 
      </HeroContainer>
    </>
  )
}

export default NotFoundSection
