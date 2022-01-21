import React from "react";
import NearLogo from "../../../images/nearLogo.png";
import ChainImage from "../../../images/chainImg.png";

import {
  SupportContainer,
  Heading,
  SponserImg,
  DecorationImg,
  DecorationContainer,
} from "./SupportElements";

const SupportSection = () => {
  return (
    <>
      <SupportContainer>
        <Heading>Supported By:</Heading>
        <SponserImg src={NearLogo} alt="Near Logo"></SponserImg>
        <DecorationContainer>
          <DecorationImg src={ChainImage} alt="Chain Decor"></DecorationImg>
        </DecorationContainer>
      </SupportContainer>
    </>
  );
};

export default SupportSection;
