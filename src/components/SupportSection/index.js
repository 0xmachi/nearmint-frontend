import React from 'react';
import NearLogo from '../../images/nearLogo.png';
import ChainImage from '../../images/chainImg.png';

import {
  SupportContainer,
  Heading,
  SponserImg,
  DecorationImg,
} from './SupportElements';

const SupportSection = () => {
  return (
    <>
      <SupportContainer>
        <Heading>Supported By:</Heading>
        <SponserImg src={NearLogo} alt='Near Logo'></SponserImg>
        <DecorationImg src={ChainImage} alt='Chain Decor'></DecorationImg>
      </SupportContainer>
    </>
  );
};

export default SupportSection;
