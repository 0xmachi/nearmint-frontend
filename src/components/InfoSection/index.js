import React from 'react'
import { Button } from '../Components'

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to='home'>Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
