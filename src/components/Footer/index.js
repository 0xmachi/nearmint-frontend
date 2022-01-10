import React from "react";
import TeleIcon from "../../images/telegramIcon.png"
import DisIcon from "../../images/discordIcon.png"

import {
  FooterContainer,
  IconWrap,
  Icon,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <IconWrap href="https://discord.com/">
          <Icon src={TeleIcon}></Icon>
        </IconWrap>
        <IconWrap href="https://telegram.org/">
          <Icon src={DisIcon}></Icon>
        </IconWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
