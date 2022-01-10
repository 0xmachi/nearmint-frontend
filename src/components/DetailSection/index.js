import React from "react";
import BackImg from "../../images/backImage.png";

import {
  DetailContainer,
  DetailWrapper,
  Img,
  TextWrapper,
  Heading,
  BtnWrap,
  Button,
} from "./DetailElements";

const DetailSection = () => {
  return (
    <DetailContainer>
      <DetailWrapper>
        <Img src={BackImg} alt="Background Image"></Img>
        <TextWrapper>
          <Heading>
            We support project sustainable fundraising for the NEAR Ecosystem
          </Heading>
          <BtnWrap>
            <Button>Launch App ></Button>
          </BtnWrap>
        </TextWrapper>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailSection;
