import React from "react";
import { FaBars } from 'react-icons/fa'
import ReactLogo from '../../images/logo.svg';
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
  NavRight
} from "./NavbarElements";

const Navbar = () => {
  return (
      <Nav>
        <NavbarContainer>
          <NavLeft>
            <NavLogo to="/">
              <img src={ReactLogo} alt="Logo"/>
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
              <NavDropBtn>Dark Mode  ↓</NavDropBtn>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='launch'>LAUNCH APP</NavBtnLink>
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
