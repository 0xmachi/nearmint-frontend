import React from "react";
import TeleIcon from "../../images/telegramIcon.png"
import DisIcon from "../../images/discordIcon.png"
import TwitterIcon from "../../images/twitterIcon.jpeg"
import Twitter2Icon from "../../images/twitterIcon2.png"

import {
  FooterContainer,
  IconWrap,
  Icon,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <IconWrap href="t.me/nearmintxyz">
          <Icon src={TeleIcon}></Icon>
        </IconWrap>
        <IconWrap href="https://twitter.com/nearmintxyz">
          <Icon src={Twitter2Icon} style={{height: 27}}></Icon>
        </IconWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
