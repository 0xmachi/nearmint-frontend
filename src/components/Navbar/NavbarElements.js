import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: rgba(19, 21, 48, 0);
  height: 70px;
  /* margin-top: -70px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* position: sticky;
  top: 0;
  z-index: 20; */
  @media screen and (max-width: 960px) {
    transaction: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 70px;
  max-width: 1380px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 910px) {
    display: block;
    position: absolute;
    top: 8px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  padding-left: 0;

  @media screen and (max-width: 910px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: #777e90;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  margin: 0 1.35rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 910px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: #3772ff;
  white-space: nowrap;
  padding: 13px 20px;
  color: #fcfcfd;
  font-size: 14px;
  font-family: sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;

export const NavLeft = styled.div`
  display: flex;
`;

export const NavRight = styled.div`
  display: flex;
`;

export const VLine = styled.div`
  border-left: 1px solid #353945;
  height: 42px;
  display: flex;
  align-self: center;
  margin-left: 2.7rem;
  margin-right: 1.35rem;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavDropBtn = styled.div`
  font-size: 14px;
  color: #fcfcfd;
  margin-right: 30px;
`;

export const WalletBtn = styled.button`
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  color: #fcfcfd;
  font-size: 14px;
  margin-right: 30px;
  font-weight: 600;

  &:hover {
    color:yellow
  }

  &:focus {
    color: red;
  }

`;

// export const WalletBtnV2 = styled.button`
//   background: #3772ff;
//   color: #fcfcfd;
//   font-size: 14px;
//   padding: 0;
//   margin: 0;
//   font-family: sans-serif;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: white;
//     color: #010606;
//   }
// `