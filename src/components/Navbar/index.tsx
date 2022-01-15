
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import ReactLogo from "../../images/logo.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLeft,
  VLine,
  NavDropBtn,
  NavRight,
  WalletBtn,
} from "./NavbarElements";
import { useAddress, useWeb3Context } from "../../hooks/web3Context";
import { shorten } from "../../helpers";

const Navbar = () => {
  const { connect, disconnect, connected, web3, chainID } = useWeb3Context();
  const address = useAddress();
  const [isConnected, setConnected] = useState(connected);

  let buttonText = "Connect Wallet";

  let clickFunc = connect;

  if (isConnected) {
    // buttonText = "Disconnect";
    buttonText = shorten(address);
    clickFunc = disconnect;
  }

  useEffect(() => {
    if (address) {
      connect();
    }
  }, [address]);

  useEffect(() => {
    setConnected(connected);
  }, [web3, connected]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLeft>
          <NavLogo to="/">
            <img src={ReactLogo} alt="Logo" />
          </NavLogo>
          <VLine />
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="docs">Docs</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="socials">Socials</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="apply">Apply</NavLinks>
            </NavItem>
          </NavMenu>
        </NavLeft>
        <NavRight>
          <NavBtn>
            <NavDropBtn>Dark Mode ↓</NavDropBtn>
          </NavBtn>
          <WalletBtn onClick={clickFunc}>{buttonText}</WalletBtn>
          <NavBtn>
            <NavBtnLink to="launch">LAUNCH APP</NavBtnLink>
          </NavBtn>
        </NavRight>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
