import React from "react";
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
import { useWeb3Context } from "../../hooks/web3Context";

const Navbar = () => {
  const { connect } = useWeb3Context();
  let clickFunc = connect;
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
          <WalletBtn onClick={clickFunc}>Connect Wallet</WalletBtn>
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
