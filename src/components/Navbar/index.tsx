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
  WalletBtnV2,
} from "./NavbarElements";
import { useAddress, useWeb3Context } from "../../hooks/web3Context";
import { shorten } from "../../helpers";

type Props = {
  showConnect?: boolean;
  showLaunchApp?: boolean;
};

const Navbar = ({ showConnect, showLaunchApp }: Props) => {
  const { connect, disconnect, connected } = useWeb3Context();
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
  }, [connected]);

  const handleOnClickNavLink = () => {
    window.open('https://twitter.com/nearmintxyz', "_blank")
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavLeft>
          <NavLogo to="/home">
            <img src={ReactLogo} alt="Logo" />
          </NavLogo>
          <VLine />
          <NavMenu>
            <NavItem>
              <NavLinks to="#" onClick={handleOnClickNavLink}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#" onClick={handleOnClickNavLink}>Docs</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#" onClick={handleOnClickNavLink}>Socials</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#" onClick={handleOnClickNavLink}>Apply</NavLinks>
            </NavItem>
          </NavMenu>
        </NavLeft>
        <NavRight>
          <NavBtn>
            <NavDropBtn>Dark Mode ↓</NavDropBtn>
          </NavBtn>
          {showConnect && (
            <WalletBtn onClick={clickFunc}>{buttonText}</WalletBtn>
          )}
          {showLaunchApp && (
            <NavBtn>
              <NavBtnLink to="farms">LAUNCH APP</NavBtnLink>
            </NavBtn>
          )}
        </NavRight>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
